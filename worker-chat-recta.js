/*
 * Proxy de chat con IA para "Ecuación de la Recta" (Recta.html)
 * ================================================================
 * Este archivo NO se publica en GitHub Pages ni se sube al repo del sitio.
 * Se despliega aparte, como un Cloudflare Worker, para que la clave de la
 * API de Claude nunca quede expuesta en el navegador del estudiante.
 *
 * CÓMO DESPLEGARLO (una sola vez, gratis con el plan Free de Cloudflare):
 *
 * Opción A — Panel web (más fácil, sin instalar nada):
 *   1. Crea una cuenta gratis en https://dash.cloudflare.com/sign-up
 *   2. En el panel: Workers & Pages → Create → Create Worker.
 *   3. Ponle un nombre (ej. "recta-chat-proxy") y despliega la plantilla.
 *   4. Edit code → borra todo y pega el contenido completo de este archivo.
 *   5. Save and deploy.
 *   6. Ve a Settings → Variables and Secrets → Add →
 *        Nombre: ANTHROPIC_API_KEY
 *        Valor: tu clave de la API de Anthropic (empieza con sk-ant-...)
 *        Marca "Encrypt" y guarda.
 *   7. Copia la URL pública que te da Cloudflare (algo como
 *      https://recta-chat-proxy.TU-USUARIO.workers.dev) y pégala en
 *      Recta.html, en la constante CHAT_WORKER_URL (dentro del <script>).
 *
 * Opción B — CLI (wrangler), si prefieres la terminal:
 *   1. npm install -g wrangler
 *   2. wrangler login
 *   3. wrangler init recta-chat-proxy   (elige "Hello World Worker" y no TS)
 *   4. Reemplaza el src/index.js generado por el contenido de este archivo.
 *   5. wrangler secret put ANTHROPIC_API_KEY   (pega tu clave cuando la pida)
 *   6. wrangler deploy
 *   7. Copia la URL que imprime wrangler y pégala en CHAT_WORKER_URL.
 *
 * COSTOS: Cloudflare Workers es gratis hasta 100,000 peticiones/día.
 * La API de Claude se cobra aparte, por tu cuenta de Anthropic — cada
 * pregunta del estudiante cuesta unos pocos centavos de dólar como mucho
 * (usa claude-opus-5 por defecto; puedes cambiar el modelo abajo a
 * "claude-haiku-4-5" si quieres respuestas más baratas y rápidas para
 * un caso de uso tan simple como este).
 */

const MODEL = 'claude-opus-5';

const SYSTEM_PROMPT = `Eres un asistente de matemáticas para estudiantes de grado 10 en Colombia, integrado en una página web sobre "Ecuación de la Recta" (fenómenos lineales: pendiente, intercepto, forma y = m·x + b).

Reglas:
- Responde siempre en español, de forma breve y clara (2-4 frases como máximo, salvo que el estudiante pida más detalle).
- Enfócate en conceptos de ecuación de la recta, pendiente, intercepto, fracciones, lectura de gráficas y el ciclo Abstracción-Formulación-Valoración.
- Si el estudiante te da los números de SU problema actual (por ejemplo "mi pendiente es 3/4 y mi intercepto es 5/2, ¿cuál es la ecuación?"), NO le des directamente la respuesta lista: explica el concepto o el procedimiento y anímalo a construirla él mismo. El objetivo pedagógico del sitio es que el estudiante construya la respuesta, no que se la resuelvan.
- Si preguntan algo fuera de matemáticas de grado 10 / ecuación de la recta, redirige amablemente el tema.
- No uses LaTeX ni símbolos especiales de formato — texto plano, usa "/" para fracciones y "^" para exponentes si hace falta.`;

export default {
  async fetch(request, env) {
    // CORS: permite llamadas desde cualquier origen (GitHub Pages, localhost
    // al abrir el HTML directamente, etc.) — es un proxy de solo lectura de
    // chat, sin datos sensibles del usuario, así que un origen abierto es
    // aceptable aquí.
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Método no permitido' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: 'JSON inválido' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const history = Array.isArray(body.messages) ? body.messages : [];
    if (history.length === 0) {
      return new Response(JSON.stringify({ error: 'Falta el mensaje' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // Convierte {role, text} -> formato de la API de Claude, con un límite
    // de longitud por mensaje para evitar abuso accidental de tokens.
    const messages = history.slice(-10).map((m) => ({
      role: m.role === 'assistant' ? 'assistant' : 'user',
      content: String(m.text || '').slice(0, 2000),
    }));

    let anthropicResp;
    try {
      anthropicResp = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: MODEL,
          max_tokens: 512,
          system: SYSTEM_PROMPT,
          thinking: { type: 'disabled' },
          output_config: { effort: 'low' },
          messages,
        }),
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: 'No se pudo contactar a la API de Claude' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const data = await anthropicResp.json();

    if (!anthropicResp.ok) {
      return new Response(JSON.stringify({ error: data.error?.message || 'Error de la API' }), {
        status: anthropicResp.status,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    if (data.stop_reason === 'refusal') {
      return new Response(
        JSON.stringify({ reply: 'No puedo responder eso. ¿Tienes alguna otra pregunta sobre la ecuación de la recta?' }),
        { headers: { 'Content-Type': 'application/json', ...corsHeaders } },
      );
    }

    const textBlock = (data.content || []).find((b) => b.type === 'text');
    const reply = textBlock ? textBlock.text : 'No obtuve una respuesta. Intenta de nuevo.';

    return new Response(JSON.stringify({ reply }), {
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  },
};
