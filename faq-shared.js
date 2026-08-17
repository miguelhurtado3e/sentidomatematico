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
    answer:'El comando de sustitución (flecha ->) acepta estas identidades (y sus versiones al cuadrado), en cualquiera de los dos sentidos:\n\n• Cociente: $\\tan(x)=\\dfrac{\\operatorname{sen}(x)}{\\cos(x)}$, $\\cot(x)=\\dfrac{\\cos(x)}{\\operatorname{sen}(x)}$\n• Recíprocas: $\\sec(x)=\\dfrac{1}{\\cos(x)}$, $\\csc(x)=\\dfrac{1}{\\operatorname{sen}(x)}$, $\\cot(x)=\\dfrac{1}{\\tan(x)}$\n• Pitagóricas: $\\operatorname{sen}^2(x)+\\cos^2(x)=1$, $\\sec^2(x)-\\tan^2(x)=1$, y formas despejadas como $1-\\cos^2(x)=\\operatorname{sen}^2(x)$\n• Con raíz: $\\operatorname{sen}(x)=\\sqrt{1-\\cos^2(x)}$, $\\cos(x)=\\sqrt{1-\\operatorname{sen}^2(x)}$, $\\tan(x)=\\sqrt{\\sec^2(x)-1}$, $\\sec(x)=\\sqrt{1+\\tan^2(x)}$, $\\cot(x)=\\sqrt{\\csc^2(x)-1}$, $\\csc(x)=\\sqrt{1+\\cot^2(x)}$ — OJO: estas asumen $x$ en el primer cuadrante (todo positivo); la tabla completa trae un ± porque el signo real depende del cuadrante, algo que este catálogo no maneja.\n• Fraccionadas al cuadrado: el resto de la tabla de conversión (ej. $\\operatorname{sen}^2(x)=\\dfrac{1}{1+\\cot^2(x)}$, $\\cos^2(x)=\\dfrac{1}{1+\\tan^2(x)}$, $\\tan^2(x)=\\dfrac{1}{\\csc^2(x)-1}$, $\\sec^2(x)=\\dfrac{\\csc^2(x)}{\\csc^2(x)-1}$, etc.) — al elevarlas al cuadrado el ± desaparece, así que estas SÍ son universales, sin la advertencia de cuadrante.\n\nADEMÁS, acepta cualquier sustitución cuyo resultado sea exactamente lo que calcularían combinar, simplificar, expandir o factorizar (diferencia de cuadrados) aplicados a lo que escribiste como punto de partida — no hace falta memorizar el nombre del comando, solo que el resultado sea correcto.' },
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

  /* --- Graficador: funciones y puntos (sentido-matematico.html) --- */
  { id:'que-es-funcion', keywords:['que es una funcion','definicion de funcion','funcion matematica','que es f(x)','que significa una funcion'],
    answer:'Una función es una regla que a cada valor de entrada ($x$) le asigna EXACTAMENTE un valor de salida ($y$, o $f(x)$) — nunca dos salidas distintas para la misma entrada. Se escribe $y=f(x)$; por ejemplo $f(x)=x^2-3x+1$ significa que a cada $x$ le corresponde el resultado de esa expresión.\n\nEn el graficador de "Esquema, Graficador y Matrices" escribes la función en el mismo campo que los puntos, en la forma $y=...$ o $f(x)=...$ (o sin etiqueta, solo la expresión) — pregunta "cómo escribo una función en el graficador" para los detalles.' },
  { id:'como-escribir-funcion-grafo', keywords:['como escribo una funcion en el graficador','como grafico una funcion','como agrego una funcion','funciones soportadas','que funciones soporta el graficador'],
    answer:'En el campo "Funciones f(x) y puntos (x, y)" puedes escribir la función como $y=x^3+3$, $f(x)=3x^4-3$, o sin ninguna etiqueta ($x^3+3$) — el programa descarta cualquier texto antes del "=" y solo interpreta lo que sigue.\n\nSoporta +,-,*,/,^, paréntesis y multiplicación implícita (2x, 3(x+1)); las funciones sen/cos/tan, arcsin/arccos/arctan, sinh/cosh/tanh, sqrt, abs, exp, log, ln, floor/ceil/round, y las constantes pi, e. La barra de botones sobre el campo inserta plantillas para lo más difícil de escribir: π, √, ⌊x⌋ (parte entera), integral definida, integral indefinida y derivada.' },
  { id:'punto-en-grafo', keywords:['agregar un punto en el graficador','escribir un punto en el graficador','formato de un punto','punto x y en el graficador'],
    answer:'En el graficador, un punto se escribe en el MISMO campo que las funciones: solo dos números separados por coma, con o sin paréntesis — ej. "2, 3" o "(-1, 4)". El programa detecta el formato automáticamente: si lo que escribiste son exactamente dos números, lo agrega como punto; cualquier otra cosa la interpreta como función.' },
  { id:'puntos-mouse', keywords:['punto con el mouse','punto con el raton','clic en la grafica','punto enganchado','punto libre','crear un punto haciendo clic'],
    answer:'Además de escribirlos, puedes crear puntos haciendo clic directamente en el lienzo del graficador:\n\n• Clic cerca de una curva (sin arrastrar) crea un punto ENGANCHADO a esa función, del mismo color; al arrastrarlo, se mueve solo a lo largo de la curva.\n\n• Clic en un espacio vacío (sin arrastrar) crea un punto LIBRE, que puedes mover a cualquier parte del plano.\n\n• Si arrastras desde un espacio vacío (más de unos pocos píxeles), en cambio desplazas la vista (pan) y no se crea ningún punto.' },
  { id:'rectas-mouse', keywords:['recta entre dos puntos','linea entre dos puntos','conectar dos puntos','recta con el mouse','recta punteada'],
    answer:'Puedes trazar una recta punteada entre dos puntos ya creados con el mouse: haz clic (sin arrastrar) sobre un punto existente para dejarlo "pendiente" (se resalta con un anillo), y luego clic sobre otro punto existente para trazar la recta entre ambos. Puedes crear varias rectas a la vez; cada una se recalcula en vivo si arrastras cualquiera de sus dos puntos.' },
  { id:'borrar-del-grafo', keywords:['borrar un punto del graficador','eliminar una funcion del graficador','como borro del graficador','quitar un punto del mouse'],
    answer:'Los puntos y funciones que ESCRIBISTE en el campo de texto se pueden borrar individualmente con el botón "✕" de la lista debajo del campo. Los puntos y rectas creados haciendo CLIC en el lienzo, en cambio, no se pueden borrar uno por uno todavía — solo desaparecen si borras la función a la que estaban enganchados, o si recargas la página ("Restablecer vista" solo reinicia el zoom, no borra nada).' },
  { id:'integral-derivada-grafo', keywords:['como grafico una integral','integral definida','integral indefinida','como grafico una derivada'],
    answer:'Integral y derivada se escriben dentro del mismo campo de funciones:\n\n• Definida: "integral(f(x), a, b, dx)" sombrea el área bajo la curva entre $a$ y $b$ y muestra su valor numérico.\n\n• Indefinida: "integral(f(x), dx, c)" grafica la antiderivada, con $c$ como la constante que elijas.\n\n• Derivada: "derivada(f(x), dx)" calcula y grafica $f\'(x)$ numéricamente.\n\nSumar o restar varias integrales en la misma expresión (ej. "integral(...)+integral(...)") se reconoce como suma/resta de áreas: cada una se sombrea por separado con su signo. Usa los botones de la barra de símbolos si no recuerdas la sintaxis exacta.' },

  /* --- Matrices (sentido-matematico.html) --- */
  { id:'que-es-matriz', keywords:['que es una matriz','definicion de matriz','que es un elemento de una matriz','filas y columnas de una matriz'],
    answer:'Una matriz es un arreglo rectangular de números organizado en filas (horizontales) y columnas (verticales). Una matriz de $m$ filas y $n$ columnas se dice "de tamaño $m\\times n$". Por ejemplo:\n$$A=\\begin{pmatrix}1 & 2\\\\ 3 & 4\\end{pmatrix}$$\nes una matriz $2\\times 2$: el elemento de la fila 2, columna 1 es el número 3.' },
  { id:'suma-resta-matrices', keywords:['suma de matrices','resta de matrices','como se suman matrices','a+b matrices','a-b matrices'],
    answer:'Para sumar o restar dos matrices, deben tener EXACTAMENTE el mismo tamaño (mismo número de filas y columnas). El resultado se calcula celda por celda: el elemento en la posición $(i,j)$ del resultado es la suma (o resta) de los elementos en esa misma posición de $A$ y $B$.\n\nEn "Operaciones entre matrices" tú construyes $A$ y $B$, escribes tu propia respuesta celda por celda, y al presionar "Verificar" el programa marca en verde lo correcto y en rojo lo que falló.' },
  { id:'multiplicacion-matrices', keywords:['multiplicacion de matrices','como se multiplican matrices','a por b matrices','producto de matrices','multiplicar matrices'],
    answer:'Para multiplicar $A\\times B$, el número de COLUMNAS de $A$ debe ser igual al número de FILAS de $B$; el resultado tiene tantas filas como $A$ y tantas columnas como $B$. Cada elemento del resultado se obtiene multiplicando la fila correspondiente de $A$ por la columna correspondiente de $B$, término a término, y sumando. Ejemplo:\n$$\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}\\begin{pmatrix}5\\\\6\\end{pmatrix}=\\begin{pmatrix}1\\cdot5+2\\cdot6\\\\3\\cdot5+4\\cdot6\\end{pmatrix}=\\begin{pmatrix}17\\\\39\\end{pmatrix}$$\nEn "Operaciones entre matrices", elige "A × B", construye ambas matrices con tamaños compatibles y verifica tu resultado.' },
  { id:'transpuesta-matriz', keywords:['transpuesta de una matriz','que es a transpuesta','matriz transpuesta','como se transpone'],
    answer:'La transpuesta de una matriz $A$ (escrita $A^T$) intercambia sus filas por columnas: la fila 1 de $A$ se convierte en la columna 1 de $A^T$, y así sucesivamente. Si $A$ es $m\\times n$, $A^T$ es $n\\times m$. En "Operaciones entre matrices", selecciona "Aᵀ" (solo necesitas construir $A$, no hace falta $B$).' },
  { id:'matriz-aumentada', keywords:['matriz aumentada','para que sirve la matriz aumentada','que es a dado b'],
    answer:'La matriz aumentada $[A|b]$ representa un sistema de ecuaciones lineales $Ax=b$: la parte $A$ contiene los coeficientes de las incógnitas, y la columna extra $b$ (separada por una barra) contiene los términos independientes (los números del lado derecho de cada ecuación). Reducirla por filas equivale a resolver el sistema. En "Reducción de matrices por filas", elige el tipo "[A|b] Aumentada".' },
  { id:'matriz-doble', keywords:['matriz doble','para que sirve el modo doble','rellenar b como identidad','a dado b doble'],
    answer:'El modo "[A|B] Doble" reduce dos matrices A y B (del mismo tamaño) EN PARALELO, aplicando cada operación de fila a ambas a la vez. Su uso más común es hallar la inversa de una matriz: construyes A, usas el botón "Rellenar B como identidad", y reduces A hasta convertirla en la identidad — lo que quede en B en ese momento es $A^{-1}$ (pregunta "inversa de una matriz" para más detalle).' },
  { id:'sistema-ecuaciones-lineales', keywords:['sistema de ecuaciones lineales','que es un sistema de ecuaciones'],
    answer:'Un sistema de ecuaciones lineales es un conjunto de ecuaciones de primer grado (sin exponentes ni productos entre incógnitas) que comparten las mismas variables, y cuya solución son los valores que las satisfacen TODAS a la vez. Ej:\n$$\\begin{cases}2x+y=5\\\\ x-y=1\\end{cases}$$\nCualquier sistema así se puede escribir como una matriz aumentada $[A|b]$ y resolverse reduciéndola por filas (preguntas "matriz aumentada", "método Gauss" y "método Gauss-Jordan").' },
  { id:'metodo-gauss', keywords:['metodo de gauss','eliminacion gaussiana','que es el metodo gauss','forma escalonada'],
    answer:'El método de Gauss reduce una matriz (por operaciones de fila) hasta la forma ESCALONADA: ceros debajo de cada "pivote" (el primer número distinto de cero de cada fila), formando una especie de escalera. Con la matriz aumentada en esa forma, la solución del sistema se obtiene por sustitución hacia atrás (despejando desde la última ecuación hacia arriba).\n\nEn "Reducción de matrices por filas" tú decides y ejecutas cada operación con comandos como "F2-3F1" (pregunta "comandos de reducción") — el programa no decide por ti qué operación hacer ni verifica si tu camino es el más corto, solo la aplica.' },
  { id:'metodo-gauss-jordan', keywords:['metodo de gauss jordan','gauss-jordan','gauss jordan','forma escalonada reducida'],
    answer:'Gauss-Jordan continúa el proceso de Gauss un poco más: en vez de detenerse en la forma escalonada, sigue haciendo operaciones hasta que la parte $A$ de la matriz quede como la matriz IDENTIDAD (unos en la diagonal, ceros en todo lo demás) — la forma escalonada REDUCIDA. Con la matriz aumentada así, la solución se lee directamente en la última columna, sin sustitución hacia atrás (pregunta "solución de un sistema de ecuaciones").\n\nEjemplo pequeño, partiendo de $\\begin{pmatrix}1&2&|&5\\\\3&8&|&14\\end{pmatrix}$: con "F2-3F1" queda $\\begin{pmatrix}1&2&|&5\\\\0&2&|&-1\\end{pmatrix}$; con "1/2F2" queda $\\begin{pmatrix}1&2&|&5\\\\0&1&|&-1/2\\end{pmatrix}$; y con "F1-2F2" queda $\\begin{pmatrix}1&0&|&6\\\\0&1&|&-1/2\\end{pmatrix}$ — ya es identidad, así que $x=6$, $y=-1/2$.' },
  { id:'solucion-sistema', keywords:['solucion de un sistema de ecuaciones','como leo la solucion del sistema','como se lee la respuesta del sistema'],
    answer:'Si reduces una matriz aumentada $[A|b]$ hasta que $A$ quede como la identidad (Gauss-Jordan), la columna $b$ que queda ES la solución: cada fila te da directamente el valor de una incógnita, en el mismo orden en que ordenaste las columnas. Si solo llegas a la forma escalonada (Gauss), tienes que despejar las incógnitas a mano, empezando por la última fila.' },
  { id:'inversa-matriz', keywords:['inversa de una matriz','como hallo la inversa','matriz inversa','a la menos uno'],
    answer:'Para hallar la inversa de una matriz $A$ (cuadrada) con este módulo: usa el modo "[A|B] Doble", construye $A$, presiona "Rellenar B como identidad", y aplica operaciones de fila hasta reducir $A$ a la identidad — lo que quede en $B$ en ese momento es $A^{-1}$. Si en el camino te queda una fila de ceros en A (y no puedes seguir reduciendo a identidad), esa matriz no tiene inversa.\n\nNo hay un botón que la calcule por ti: el programa aplica la operación que tú le indiques con cada comando, pero decidir cuáles y en qué orden es tu trabajo.' },
  { id:'comandos-reduccion', keywords:['comandos de reduccion','como escribo una operacion de fila','sintaxis de las operaciones','f2-3f1','como intercambio filas','como multiplico una fila'],
    answer:'En "Reducción de matrices por filas" (campo debajo de la matriz) escribes la operación con estos comandos:\n\n• Combinación: "F2-3F1" reemplaza la fila 2 por (fila 2 − 3×fila 1); también sirve "F2+1/2F3".\n\n• Escalar: "1/2F1" o "F1*2" multiplica toda la fila 1 por ese número (fracción o entero).\n\n• Intercambio: "F1<->F2" (o "F1<>F2") intercambia dos filas completas.\n\nLos números se ingresan como fracciones exactas (ej. "1/2", no "0.5") para que se note por cuánto se multiplicó cada fila. El botón "Deshacer" regresa la matriz al estado justo antes de la última operación.' },
  { id:'deshacer-matrices', keywords:['deshacer en matrices','boton deshacer matrices','me equivoque en la reduccion','regresar una operacion de fila'],
    answer:'El botón "Deshacer" (junto a "Ejecutar") regresa la matriz al estado justo antes de la última operación de fila que aplicaste, y quita esa línea del historial. Puedes deshacer tantas veces como operaciones hayas hecho, de a una por vez.' },
  { id:'tamano-matriz', keywords:['tamano maximo de la matriz','hasta que tamaño','cuantas filas y columnas puedo poner','matriz muy grande'],
    answer:'Las matrices de este módulo admiten hasta 10 filas y 10 columnas (10×10), o 10×20 en el modo "[A|B] Doble" (10 columnas para A y 10 más para B). Si la matriz no cabe en pantalla, aparece una barra de desplazamiento horizontal.' },
  { id:'verificar-operaciones-matrices', keywords:['boton verificar matrices','como se verifica una operacion entre matrices','celda verde celda roja','verificar respuesta matriz'],
    answer:'A diferencia de "Reducción de matrices por filas" (donde cualquier secuencia válida de operaciones es correcta y el programa no la evalúa), en "Operaciones entre matrices" SÍ hay una única respuesta correcta: escribes tu resultado celda por celda y, al presionar "Verificar", el programa calcula la respuesta real y marca cada celda en verde (correcta) o rojo (incorrecta).' },
  { id:'combinar-grafo-matrices', keywords:['graficador y matrices juntos','interpolacion','polinomio que pasa por unos puntos','matriz de vandermonde','encontrar un polinomio con puntos'],
    answer:'El graficador y el reductor de matrices se pueden combinar para encontrar el polinomio que pasa por ciertos puntos: si tienes puntos $(x_1,y_1),...,(x_n,y_n)$, arma a mano una matriz aumentada donde cada fila tiene las potencias de $x_i$ (matriz de Vandermonde) y la columna $b$ son los $y_i$; redúcela a identidad (Gauss-Jordan) y el vector resultante son los coeficientes del polinomio. Luego escribe ese polinomio en el graficador para comprobar que pasa por tus puntos originales. El programa no arma la matriz de Vandermonde por ti a propósito: reconocer qué número va en cada casilla es parte de lo que debes practicar.' },

  /* --- Sumas.html: área bajo la curva por sumas telescópicas --- */
  { id:'que-es-pagina-sumas', keywords:['que es esta pagina','para que sirve sumas','area bajo la curva por sumas','que hace sumas.html'],
    answer:'"Área bajo la Curva por Sumas" te deja encontrar el área bajo un polinomio SIN calculadora de integrales: grafica la función, sombrea el área, y luego "abre la llave" para ver esa misma área armada como una suma de rectángulos, que tú sumas a mano. Es una manera de entender de dónde sale la idea de "área bajo la curva" antes de estudiar cálculo integral.' },
  { id:'como-escribo-polinomio-sumas', keywords:['como escribo un polinomio','que polinomios acepta','formato del polinomio','grado maximo del polinomio','no acepta mi funcion','fracciones en el polinomio','coeficientes fraccionarios'],
    answer:'Escribe la función como $y=...$, $f(x)=...$, o directamente la expresión sin etiqueta — el programa descarta cualquier texto antes del "=". Esta página solo acepta POLINOMIOS escritos como sumas o restas de términos $c \\cdot x^k$ con exponente entero no negativo (ej. "y=x^2", "f(x)=3x^2-2x+1", "x^3+x"). Los coeficientes SÍ pueden ser fracciones, de dos formas: como divisor ("x^2/2", "x/2") o como coeficiente al frente ("1/2x^2") — pero no las dos a la vez en el mismo término. NO acepta paréntesis, ni funciones como seno/coseno/raíz, ni decimales, ni exponentes negativos — porque el truco de sumas telescópicas que arma los rectángulos solo funciona exactamente para este tipo de expresión. Grado máximo permitido: 5.' },
  { id:'que-es-n-sumas', keywords:['que es n en sumas','limite superior','hasta donde llega el area','que significa n'],
    answer:'$n$ es el límite superior del área: siempre se calcula el área bajo la curva entre $x=0$ y $x=n$. Debe ser un número entero (entre 1 y 12 en esta página) porque los rectángulos de la simulación tienen todos ancho 1, uno por cada entero entre 0 y n.' },
  { id:'boton-area-sumas', keywords:['boton area','que hace el boton area','para que sirve area'],
    answer:'El botón "Área" sombrea la región bajo tu polinomio entre 0 y n, igual que en el graficador de "Esquema, Graficador y Matrices" — pero aquí, A PROPÓSITO, no se muestra ningún número junto al sombreado. La idea es que encuentres ese valor tú mismo con la simulación de sumas ("Abrir llave"), no que te lo entregue el programa.' },
  { id:'abrir-llave', keywords:['abrir llave','que es abrir llave','simulacion por sumas','boton abrir llave','cerrar llave'],
    answer:'"Abrir llave" cambia la MISMA gráfica (no abre una nueva) de la vista continua (curva + sombreado) a una vista discreta: va llenando, uno por uno, rectángulos de base 1 — SIN mostrar su altura en un número, a propósito, para que la leas tú directamente en el eje (acércate con el zoom si hace falta). Cuando terminan de aparecer todos (uno por cada entero de 1 a n), puedes escribir tu propia suma en la sección "Tu suma". El botón cambia a "Cerrar llave": lo presionas para volver a la vista continua sin perder el zoom en el que estabas.' },
  { id:'de-donde-salen-rectangulos', keywords:['de donde salen los rectangulos','de donde salen los numeros','por que esos numeros','como se calculan los rectangulos','regla grado mas uno','suma telescopica'],
    answer:'Los rectángulos NO son f(1), f(2), f(3)... (eso sería solo una aproximación). Son los términos EXACTOS de una suma telescópica: para cada monomio $c\\cdot x^k$ de tu polinomio, el rectángulo $i$ mide $\\dfrac{c}{k+1}\\big(i^{k+1}-(i-1)^{k+1}\\big)$. Por ejemplo, para $f(x)=3x^2$ ($c=3$, $k=2$): el rectángulo $i$ mide $i^3-(i-1)^3$, que da 1, 7, 19, 37... Al sumar todos esos rectángulos (de $i=1$ hasta $n$), los términos intermedios se cancelan entre sí (por eso se llama "telescópica") y el resultado es EXACTAMENTE el área real bajo la curva — no una aproximación que mejora con más rectángulos, como en un Riemann sum común.' },
  { id:'por-que-no-tocan-la-curva', keywords:['los rectangulos no tocan la curva','por que no coinciden con la funcion','los rectangulos no siguen la curva','rectangulos raros'],
    answer:'Es normal que los rectángulos de la simulación no queden pegados a la curva de tu función: no son una foto de la curva (eso sería f(1), f(2), f(3)...), sino una descomposición algebraica distinta cuya suma da exactamente la misma área total. Dos maneras distintas de llegar al mismo número — ese es el "Sentido" doble de una misma "Referencia" (el área) del modelo de Frege que usa todo este sitio.' },
  { id:'verificar-suma-sumas', keywords:['verificar suma','como se revisa la suma','se corrige mi respuesta','me marca si esta mal la suma','boton verificar suma','como escribo la suma'],
    answer:'En "Tu suma" escribes la SUMA completa, término por término, separados por + o - (ej. $1+3+5+7+9$) — no el total final, sino cada altura que leíste en la gráfica. El botón "Verificar suma" marca cada término en su propio óvalo: verde si coincide con el real, rojo si no, sin decirte cuál era el valor correcto. Solo cuando TODOS los términos quedan en verde se desbloquea la sección de abajo, donde escribes la sucesión de sumas parciales (pregunta "sucesión de sumas parciales" para más detalle). Puedes reintentar tantas veces como quieras.' },
  { id:'que-es-suma-telescopica', keywords:['que es una suma telescopica','definicion de suma telescopica'],
    answer:'Una suma telescópica es una suma donde cada término se cancela parcialmente con el siguiente, dejando solo el primer y el último valor — como un catalejo (telescopio) que se pliega. Por ejemplo, $\\sum_{i=1}^n \\big(i^2-(i-1)^2\\big)$ se reduce a $n^2-0^2=n^2$, porque el $i^2$ de cada término se cancela con el $-(i-1)^2$ del siguiente. Expandiendo cada diferencia por binomio de Newton se obtienen los términos individuales (ej. $i^2-(i-1)^2=2i-1$), que son los que se muestran como rectángulos en esta página.' },
  { id:'sucesion-sumas-parciales', keywords:['sucesion de sumas parciales','que es la sucesion de sumas','segundo input','verificar sucesion','como escribo la sucesion'],
    answer:'Después de acertar todos los términos de "Tu suma", se desbloquea un segundo campo para escribir la SUCESIÓN de sumas parciales: el primer término solo, luego ese más el segundo, luego esos dos más el tercero, y así sucesivamente. Por ejemplo, si tu suma es $1+3+5+7+9$, la sucesión es $1, 4, 9, 16, 25$. El botón "Verificar sucesión" marca cada valor en su propio óvalo (verde o rojo), con su índice ($i=1,2,3...$) justo debajo, para que relaciones cada resultado con su posición — si alguno queda en rojo, NO te muestra cuál era el valor real: corrígelo tú y vuelve a verificar.' },
  { id:'verificar-funcion-sumas', keywords:['verificar funcion','como formulo la funcion','que es a=n^2','tercer input','formula del area','a de n'],
    answer:'Después de acertar toda la sucesión de sumas parciales, se desbloquea un tercer campo: ahí formulas la FUNCIÓN que relaciona el índice $i$ con su suma parcial — la fórmula cerrada del área. Escríbela como $A=...$, $A(n)=...$, o solo la expresión, usando $n$ o $x$ como variable indistintamente (son intercambiables, igual que $x$/$t$ en Recta.html); debe ser un polinomio, igual de restringido que en el resto de la página. Por ejemplo, si tu sucesión fue $1, 4, 9, 16, 25$, la función es $A=n^2$. El botón "Verificar función" compara tu fórmula, coeficiente por coeficiente y de forma EXACTA, contra la fórmula real (la misma que generó los rectángulos) — si no coincide, no te dice cuál es la correcta, solo que sigas intentando.' },
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
