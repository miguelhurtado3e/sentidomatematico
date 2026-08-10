/* ====================================================================
   BANCO DE PREGUNTAS FRECUENTES COMPARTIDO — chat "Sin conexión"
   ====================================================================
   Usado por todas las páginas del sitio que tengan un chat de dudas
   (Recta.html, Identidades.html, ...). Se carga con <script src=
   "faq-shared.js"></script> ANTES del <script> propio de cada página,
   para que FAQ_BANK/initChatWidget queden disponibles como variables
   globales que el script de la página puede usar directamente.

   Para agregar una pregunta nueva (de cualquier página): agrégala al
   array FAQ_BANK de abajo — queda disponible en TODAS las páginas que
   carguen este archivo, no hace falta duplicarla. Mantener sincronizado
   con BancoRespuestas.txt (documentación para el profesor, en Fenómeno,
   no se publica).
*/
"use strict";

const FAQ_BANK = [
  { id:'que-es-punto', keywords:['punto','que es un punto','coordenadas de un punto','plano cartesiano','punto en el plano','que significa un punto','definicion de punto'],
    answer:'Un punto en el plano cartesiano se representa con dos coordenadas: $(x, y)$ — o en la página de la recta, $(t, d)$. La primera coordenada indica la posición horizontal y la segunda la posición vertical.\n\nEn "Ecuación de la Recta", cuando agregas un punto en la etapa 1, escribes esos dos valores separados por coma: "t, d" (por ejemplo "4, 7" significa $t=4$, $d=7$).' },
  { id:'pendiente', keywords:['pendiente','inclinacion','que es m','valor de m','como se construye la pendiente','como se halla la pendiente'],
    answer:'La pendiente ($m$) indica qué tan inclinada está la recta y en qué dirección: es cuánto cambia la variable dependiente (distancia, precio...) por cada unidad que aumenta la independiente (tiempo, cantidad...). Si $m$ es positiva, la recta sube; si es negativa, baja.\n\n¿Cómo se construye? Si el enunciado dice algo como "cada 4 minutos la distancia aumenta 3 km", esa razón ES la pendiente: $m = \\dfrac{3}{4}$ (lo que cambia, entre lo que avanza). Si ya tienes dos puntos $(x_1,y_1)$ y $(x_2,y_2)$, se calcula como $m = \\dfrac{y_2-y_1}{x_2-x_1}$.' },
  { id:'intercepto', keywords:['intercepto','ordenada','corte con el eje','valor de b','que es b'],
    answer:'El intercepto ($b$) es el valor de la variable dependiente cuando la independiente vale 0 — por ejemplo, la distancia en el minuto 0, o el precio si no compras ninguna unidad. Gráficamente es el punto donde la recta cruza el eje vertical.' },
  { id:'que-es-ecuacion', keywords:['que es una ecuacion','que es la ecuacion','definicion de ecuacion','que significa una ecuacion','que significa ecuacion','ecuacion'],
    answer:'Una ecuación es una igualdad matemática entre dos expresiones que contiene una o más incógnitas (valores desconocidos, normalmente representados con letras como $x$). Resolverla significa encontrar el valor (o los valores) de la incógnita que hacen que la igualdad sea cierta.\n\nPor ejemplo, en $2x + 3 = 7$, la incógnita es $x$, y el único valor que cumple la igualdad es $x = 2$.\n\nLa ecuación de la recta ($y = mx + b$) es un caso particular: en vez de una sola incógnita, relaciona dos variables ($x$, $y$) de modo que cada valor de $x$ determina un valor de $y$. Si quieres saber más sobre esa forma específica, pregunta por "ecuación de la recta".' },
  { id:'forma-ecuacion', keywords:['forma de la ecuacion','y=mx+b','formula de la recta','como se escribe la ecuacion','estructura de la ecuacion','que forma tiene','ecuacion de la recta','formas de la ecuacion','punto pendiente','pendiente intercepto','forma general','forma simetrica'],
    answer:'La ecuación de una recta se puede escribir de varias formas, todas equivalentes entre sí:\n\n• Pendiente-intercepto: $y = mx + b$ — la que usamos en "Ecuación de la Recta". $m$ es la pendiente, $b$ es el intercepto (dónde cruza el eje y).\n\n• Punto-pendiente: $y - y_1 = m(x - x_1)$ — útil cuando conoces la pendiente y solo un punto $(x_1,y_1)$ de la recta.\n\n• General (o implícita): $Ax + By + C = 0$ — agrupa todo en un lado; sirve incluso para rectas verticales, que no se pueden escribir como $y=mx+b$.\n\n• Simétrica (segmentaria): $\\dfrac{x}{a} + \\dfrac{y}{b} = 1$ — cuando conoces dónde la recta corta el eje x (en $a$) y el eje y (en $b$).' },
  { id:'leer-grafica', keywords:['leer la grafica','puntos amarillos','como encuentro puntos','encontrar puntos en la grafica','cuadricula'],
    answer:'Cuando la Referencia es una gráfica, busca los puntos amarillos: son coordenadas exactas y enteras sobre la recta. Cuenta las casillas desde el origen para leer su posición horizontal ($t$) y vertical ($d$). Puedes arrastrar y usar la rueda del ratón para verlos mejor.' },
  { id:'fraccion-en-punto', keywords:['fraccion en el punto','puntos con fraccion','decimales en el punto','coordenadas fraccionarias','puedo poner fracciones','punto en fraccion','coordenadas enteras'],
    answer:'Sí: las coordenadas de un punto (en la etapa 1 o al comprobar en la etapa 3 de "Ecuación de la Recta") pueden ser enteras o fracciones — escribe la fracción con "/" (ej. 3/4 o -5/2). Lo único que no se acepta son los decimales (0.75); el sistema los rechaza a propósito para que siempre trabajes con fracciones exactas.' },
  { id:'fraccion-propia', keywords:['fraccion propia','que es una fraccion propia'],
    answer:'Una fracción propia es aquella donde el numerador (arriba) es menor que el denominador (abajo), como $\\frac{3}{4}$ o $-\\frac{2}{5}$ — su valor está entre $-1$ y $1$.' },
  { id:'escribir-fraccion', keywords:['como escribo una fraccion','usar la barra','como pongo una fraccion','sintaxis de fraccion','simbolo de dividir'],
    answer:'Escribe las fracciones con el símbolo "/" entre numerador y denominador, ej: 3/4 o -5/2. No uses puntos decimales (0.75) — el sistema los rechaza a propósito para que trabajes con fracciones exactas.' },
  { id:'calcular-pendiente', keywords:['como se calcula la pendiente','formula de la pendiente','y2-y1','diferencia de puntos','pendiente entre dos puntos'],
    answer:'La pendiente entre dos puntos $(x_1,y_1)$ y $(x_2,y_2)$ se calcula como $m = \\dfrac{y_2-y_1}{x_2-x_1}$: el cambio en $y$ dividido entre el cambio en $x$.\n\n(En "Ecuación de la Recta" esas coordenadas se llaman $t$ y $d$, pero la fórmula es la misma.) No necesitas calcularla a mano para pasar la etapa — el sistema verifica tu ecuación completa evaluándola en varios valores.' },
  { id:'pendiente-negativa', keywords:['pendiente negativa','que significa negativa','recta que baja','disminuye','pendiente negativa que significa'],
    answer:'Una pendiente negativa significa que la recta desciende: a medida que la variable independiente aumenta, la dependiente disminuye (ej: la temperatura baja, o el auto retrocede).' },
  { id:'ciclo', keywords:['ciclo','abstraccion','formulacion','valoracion','que es el ciclo','frege'],
    answer:'El ciclo Abstracción → Formulación → Valoración es el modelo didáctico de la tesis (basado en Frege): primero ABSTRAES datos concretos del fenómeno, luego los conviertes en una FUNCIÓN o expresión general (Formulación), y finalmente VALORAS el resultado comparándolo con el fenómeno original (la gráfica). Cada etapa pide un tipo distinto de representación para forzar ese cambio de sentido.' },
  { id:'verificar-ecuacion', keywords:['como verifico la ecuacion','boton verificar','revisar mi respuesta','verificar ecuacion'],
    answer:'En "Ecuación de la Recta", la etapa 2 usa un solo campo para varias preguntas seguidas: primero te pide la pendiente, luego la ecuación en forma punto-pendiente y por último en forma pendiente-intercepto. Escribe tu respuesta y presiona "Verificar" (o Enter); si es correcta, queda marcada con ✓ arriba del campo y este te pide automáticamente lo siguiente.' },
  { id:'punto-rojo', keywords:['punto rojo','marca x','punto incorrecto','sale mal el punto','punto en rojo','no se pudo agregar el punto'],
    answer:'Si el punto que escribiste no corresponde a la situación (o, tras resolver la ecuación, no cae sobre la recta), aparece un mensaje de error debajo del campo explicando que no es correcto — simplemente vuelve a intentarlo con otro valor, no queda guardado.' },
  { id:'zoom-pan', keywords:['zoom','arrastrar la grafica','mover la vista','rueda del raton','hacer pan'],
    answer:'En cualquier gráfica de este sitio puedes hacer clic y arrastrar para desplazar la vista, y usar la rueda del ratón para acercar o alejar (zoom).' },
  { id:'variable-x-t', keywords:['que es x','que es t','variable independiente','cual variable uso','x o t'],
    answer:'$x$ y $t$ representan la variable independiente (ej: el tiempo en minutos, o la cantidad comprada) — son intercambiables, usa la que prefieras al escribir tu ecuación.' },
  { id:'cuantos-puntos', keywords:['cuantos puntos necesito','minimo de puntos','dos puntos necesarios'],
    answer:'En "Ecuación de la Recta" necesitas al menos 2 puntos correctos (quedan marcados con ✓ en el historial) para que el campo pase a pedirte la pendiente. Si un punto no corresponde a la situación, el sistema te avisa con un error y puedes intentar con otro valor.' },
  { id:'nuevo-problema', keywords:['nuevo problema','cambiar de problema','reiniciar','otro ejercicio'],
    answer:'El botón "Nuevo problema" genera una situación distinta desde cero (nuevo escenario, o nueva identidad/expresión) sin recargar la página, y reinicia todo el ejercicio.' },
  { id:'tipo-referencia', keywords:['a veces es texto','a veces es grafica','tipo de referencia','por que cambia el enunciado'],
    answer:'En "Ecuación de la Recta" la Referencia inicial cambia al azar entre dos formatos: un texto narrativo, o una gráfica con 3 puntos amarillos ya marcados sobre la recta. Ambos representan el mismo tipo de fenómeno; solo cambia cómo se presenta.' },
  { id:'ecuacion-lineal', keywords:['que es una ecuacion lineal','recta que es','definicion de recta','que es una funcion lineal'],
    answer:'Una ecuación lineal (o de primer grado) describe una relación donde la variable dependiente cambia a un ritmo constante respecto a la independiente — su gráfica es siempre una línea recta. Se escribe como $y = mx + b$.' },

  /* --- Identidades Trigonométricas --- */
  { id:'que-es-identidad', keywords:['que es una identidad','identidad trigonometrica','que significa identidad','definicion de identidad','que es demostrar una identidad'],
    answer:'Una identidad trigonométrica es una igualdad entre dos expresiones que es cierta para TODO valor de $x$ (no solo para algunos, como en una ecuación normal). Demostrarla significa transformar un lado (o una expresión) hasta llegar exactamente a la otra forma, usando solo pasos que se sepa que son ciertos — no basta con comprobar que "da lo mismo" en un par de valores.' },
  { id:'comando-sustituir', keywords:['sustituir','como sustituyo','flecha','->','como uso el comando sustituir','identidad conocida'],
    answer:'Para aplicar un paso a un término, escribe "expresión1 -> expresión2", ej: $\\tan(x) \\to \\dfrac{\\operatorname{sen}(x)}{\\cos(x)}$. El sistema lo acepta si: (a) ese par coincide con una identidad del catálogo (pregunta "catálogo de identidades"), o (b) lo que escribiste después de la flecha es exactamente lo que calcularían combinar/simplificar/expandir/factorizar aplicados a lo que escribiste antes de la flecha. Y en cualquier caso, esa expresión debe aparecer de verdad en lo que tienes escrito — no puedes escribir la meta completa de una vez, tiene que ser un paso pequeño.' },
  { id:'comando-simplificar', keywords:['simplificar','comando simplificar','que hace simplificar'],
    answer:'"simplificar" hace varias cosas automáticas, válidas para cualquier expresión $A$ (no son trucos de trigonometría, es álgebra genérica): reparte una potencia sobre una fracción o un producto (ej. $(a/b)^2 \\to a^2/b^2$); cancela una fracción cuando el numerador y el denominador son exactamente iguales (ej. $a/a \\to 1$); convierte un producto de un mismo factor por sí mismo en una potencia (ej. $\\csc(x)\\cdot\\csc(x) \\to \\csc^2(x)$); cancela un factor que se multiplica por una fracción con ese mismo factor en el denominador, $A\\cdot\\dfrac{C}{A}\\to C$ (el caso $C=1$ es "un valor por su recíproco da 1"); resuelve una fracción dividida entre otra fracción, $\\dfrac{a/b}{c/d}\\to\\dfrac{a\\cdot d}{b\\cdot c}$; y cancela un factor común DENTRO de una fracción, $\\dfrac{a\\cdot b}{b}\\to a$. No hace nada más — no usa identidades trigonométricas por su cuenta.' },
  { id:'comando-combinar', keywords:['combinar','comando combinar','que hace combinar','una sola fraccion','terminos semejantes'],
    answer:'"combinar" hace dos cosas: (1) une en una sola fracción los términos que se están sumando o restando (si ya tienes una fracción y un término suelto, como en $1 + \\dfrac{\\operatorname{sen}^2(x)}{\\cos^2(x)}$, el término suelto se trata como si tuviera el mismo denominador; si hay DOS fracciones con denominadores distintos, primero hay que igualarlos con "amplificar"), y (2) agrupa y cancela/suma términos semejantes (idénticos, sin importar el orden de un producto) — ej. $-\\cot(x)\\csc(x) + \\csc(x)\\cot(x)$ se cancela a 0 porque es el mismo producto con signos opuestos. Funciona tanto si la suma está en el nivel superior de tu expresión, como si está DENTRO del numerador o el denominador de una fracción.' },
  { id:'comando-amplificar', keywords:['amplificar','comando amplificar','que hace amplificar'],
    answer:'"amplificar <expresión>" multiplica tu expresión completa, arriba y abajo, por lo que escribas — ej. "amplificar cos(x)" convierte $E$ en $\\dfrac{E\\cdot\\cos(x)}{\\cos(x)}$. Siempre es válido (es multiplicar por 1), y sirve para preparar una fracción antes de "combinar" o para racionalizar.' },
  { id:'comando-factorizar', keywords:['factorizar','comando factorizar','que hace factorizar','factor comun','diferencia de cuadrados'],
    answer:'"factorizar <expresión>" saca esa expresión como factor común de una suma, ej. si tienes $\\operatorname{sen}(x)\\cos(x) + \\operatorname{sen}(x)$ y escribes "factorizar sen(x)", obtienes $\\operatorname{sen}(x)\\,(\\cos(x)+1)$. Solo funciona si de verdad es un factor común de TODOS los términos.\n\nSi escribes "factorizar" SIN nada, busca una diferencia de cuadrados ($A^2-B^2$, donde un número como 1 cuenta como $1^2$) en cualquier parte de tu expresión y la convierte en $(A-B)(A+B)$ — ej. $\\sec^2(x)-1 \\to (\\sec(x)-1)(\\sec(x)+1)$.' },
  { id:'comando-expandir', keywords:['expandir','comando expandir','que hace expandir','distribuir'],
    answer:'"expandir" distribuye un producto sobre una suma o resta, ej. $a(b+c) \\to ab+ac$. Es el paso contrario a "factorizar".' },
  { id:'catalogo-identidades', keywords:['catalogo de identidades','que identidades conozco','lista de identidades','identidades conocidas','identidades disponibles'],
    answer:'El comando de sustitución (flecha ->) acepta estas identidades (y sus versiones al cuadrado), en cualquiera de los dos sentidos:\n\n• Cociente: $\\tan(x)=\\dfrac{\\operatorname{sen}(x)}{\\cos(x)}$, $\\cot(x)=\\dfrac{\\cos(x)}{\\operatorname{sen}(x)}$\n• Recíprocas: $\\sec(x)=\\dfrac{1}{\\cos(x)}$, $\\csc(x)=\\dfrac{1}{\\operatorname{sen}(x)}$, $\\cot(x)=\\dfrac{1}{\\tan(x)}$\n• Pitagóricas: $\\operatorname{sen}^2(x)+\\cos^2(x)=1$, $\\sec^2(x)-\\tan^2(x)=1$, y formas despejadas como $1-\\cos^2(x)=\\operatorname{sen}^2(x)$\n• Con raíz: $\\operatorname{sen}(x)=\\sqrt{1-\\cos^2(x)}$, $\\cos(x)=\\sqrt{1-\\operatorname{sen}^2(x)}$, $\\tan(x)=\\sqrt{\\sec^2(x)-1}$, $\\sec(x)=\\sqrt{1+\\tan^2(x)}$, $\\cot(x)=\\sqrt{\\csc^2(x)-1}$, $\\csc(x)=\\sqrt{1+\\cot^2(x)}$ — OJO: estas asumen $x$ en el primer cuadrante (todo positivo); la tabla completa trae un ± porque el signo real depende del cuadrante, algo que este catálogo no maneja.\n\nADEMÁS, acepta cualquier sustitución cuyo resultado sea exactamente lo que calcularían combinar, simplificar, expandir o factorizar (diferencia de cuadrados) aplicados a lo que escribiste como punto de partida — no hace falta memorizar el nombre del comando, solo que el resultado sea correcto.' },
  { id:'nivel-1-identidades', keywords:['nivel 1','que es el nivel 1','meta','forma indicada','hasta donde debo llegar','como valoro','como comparo','boton comparar'],
    answer:'En el Nivel 1 no se demuestra una identidad con dos lados todavía: se te da una expresión y una META (ambas visibles desde el inicio), y debes transformar la expresión con los comandos hasta que quede EXACTAMENTE igual a la meta. Cuando lo logras, se abre la sección de Valoración con dos campos ya llenos (la expresión original y tu resultado) — puedes editarlos y probar lo que quieras. El punto se otorga cuando presionas "Comparar" y las dos expresiones coinciden en la gráfica.' },
  { id:'por-que-no-puedo-saltar', keywords:['puedo escribir la respuesta directa','me lo resuelve de una','por que no acepta el salto','se salto un paso','de un salto','no me deja pasar directo'],
    answer:'A propósito, cada comando hace UN solo paso pequeño y comprobable — no se puede escribir la meta completa como una sola sustitución, aunque sea matemáticamente cierta, porque el objetivo es que practiques el camino, no solo la respuesta. Divide tu razonamiento en pasos: primero una identidad conocida, luego combinar/simplificar/factorizar según haga falta.' },
  { id:'sen-o-sin', keywords:['sen o sin','como escribo seno','se puede sen','nombres de las funciones','tg o tan','ctg o cot'],
    answer:'Puedes escribir "sen" o "sin" (ambos funcionan igual), "cos", "tan" o "tg", "sec", "csc" o "cosec", y "cot" o "ctg". Siempre con paréntesis: ej. "sen(x)", "tan^2(x)" o "tan(x)^2" (son lo mismo).' },
  { id:'deshacer-identidades', keywords:['deshacer','boton deshacer','como deshago','me equivoque de paso','regresar al paso anterior'],
    answer:'El botón "Deshacer" regresa tu expresión al estado justo antes del último comando que aplicaste (y borra esa línea del historial). Úsalo si exploras un camino que no te sirve — no hay límite de veces, pero solo deshace de a un paso.' },
  { id:'como-escribo-raiz', keywords:['como escribo raiz','raiz cuadrada','simbolo de raiz','como pongo la raiz','sqrt'],
    answer:'Escribe "sqrt(...)" con lo que va dentro del paréntesis, ej. "sqrt(1-cos(x)^2)" — se muestra en pantalla como √. También puedes hacer clic en el botón "√" para que inserte la plantilla y solo tengas que llenar el paréntesis.' },
];

function normalizeChat(str){
  return str.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').trim();
}
function matchFAQ(query){
  // La puntuación suma la LONGITUD de cada palabra clave que coincide
  // (no solo cuenta coincidencias), para que una frase específica como
  // "punto rojo" gane sobre una palabra genérica como "punto".
  const nq = normalizeChat(query);
  let best = null, bestScore = 0;
  FAQ_BANK.forEach(entry => {
    let score = 0;
    entry.keywords.forEach(kw => {
      const nkw = normalizeChat(kw);
      if(nq.includes(nkw)) score += nkw.length;
    });
    if(score > bestScore){ bestScore = score; best = entry; }
  });
  return best;
}

/* ---------- Widget de chat: wiring genérico compartido por página ----------
   Cada página llama a initChatWidget({ welcome, fallback, workerUrl }) una
   sola vez. welcome/fallback son textos propios de esa página (mencionan
   su vocabulario); workerUrl es opcional, para cuando se reactive el modo
   "IA en línea" (ver worker-chat-recta.js) — vacío/omitido = desactivado. */
function initChatWidget(opts){
  opts = opts || {};
  const CHAT_WORKER_URL = opts.workerUrl || '';
  const fallbackMsg = opts.fallback || 'No estoy seguro de haber entendido tu pregunta 🤔. Prueba con palabras más simples y directas.';

  const chatLog = document.getElementById('chat-log');
  const chatInput = document.getElementById('chat-input');
  const chatSend = document.getElementById('chat-send');
  let chatHistory = []; // {role:'user'|'assistant', text} — usado solo si se reactiva el modo en línea

  function appendChatMsg(role, text){
    const div = document.createElement('div');
    div.className = 'chat-msg ' + role;
    div.textContent = text;
    chatLog.appendChild(div);
    chatLog.scrollTop = chatLog.scrollHeight;
    // Solo se tipografían las respuestas del asistente (texto propio, con
    // delimitadores $...$ deliberados) — nunca lo que escribe el estudiante.
    if(role !== 'user' && window.MathJax && MathJax.typesetPromise){
      MathJax.typesetPromise([div]).then(() => { chatLog.scrollTop = chatLog.scrollHeight; }).catch(()=>{});
    }
    return div;
  }

  function answerOffline(query){
    const match = matchFAQ(query);
    if(match){
      appendChatMsg('bot', match.answer);
    } else {
      appendChatMsg('bot', fallbackMsg);
    }
  }

  async function answerOnline(query){
    if(!CHAT_WORKER_URL){
      appendChatMsg('system', 'El modo en línea todavía no está configurado en esta página. Mientras tanto, prueba el modo "📴 Sin conexión".');
      return;
    }
    chatHistory.push({ role:'user', text: query });
    const typingEl = appendChatMsg('bot typing', 'Pensando...');
    try{
      const resp = await fetch(CHAT_WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: chatHistory.slice(-10) }),
      });
      const data = await resp.json();
      typingEl.remove();
      if(!resp.ok || data.error){
        appendChatMsg('system', 'No se pudo contactar a la IA en línea (' + (data.error || resp.status) + '). Prueba el modo "📴 Sin conexión" o inténtalo de nuevo más tarde.');
        return;
      }
      appendChatMsg('bot', data.reply);
      chatHistory.push({ role:'assistant', text: data.reply });
    }catch(err){
      typingEl.remove();
      appendChatMsg('system', 'No hay conexión a internet o el servicio no responde. Prueba el modo "📴 Sin conexión".');
    }
  }

  function sendChat(){
    const query = chatInput.value.trim();
    if(!query) return;
    appendChatMsg('user', query);
    chatInput.value = '';
    answerOffline(query); // modo "IA en línea" desactivado por ahora — ver workerUrl arriba
  }
  chatSend.addEventListener('click', sendChat);
  chatInput.addEventListener('keydown', e => { if(e.key === 'Enter') sendChat(); });

  if(opts.welcome) appendChatMsg('system', opts.welcome);
}
