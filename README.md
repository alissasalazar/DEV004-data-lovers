# Data Lovers

# 1. Resumen del proyecto.
En este proyecto se construyó una página web para visualizar un conjunto de datos. Esta página web debe de permitir que se visualice la data, se filtre, se ordene y además se realice algún cálculo.

# 2. Descripción del proyecto.
Esta página web es una propuesta de pokédex para el juego Pokemon GO, es una herramienta paralela al juego, en la que se puede encontrar información sobre los pokemons. El objetivo es que esta información sea útil para los jugadores y que los ayude a realizar las mejores estrategias para sus batallas dentro del juego, y que además sea un primer acercamiento amigable para quien quiere iniciar a jugar.

# 3. Investigación de los usuarios
## Pokemon GO
Pokémon Go es un juego de realidad aumentada para teléfonos inteligentes. En él, lxs jugadores buscan sobresalir como entrenadores de Pokemones, unas criaturas que "viven" en unas bolas especiales llamadas “Pokebolas”.
De acuerdo con el concepto original, los entrenadores buscan capturar Pokemones hasta completar una colección. El otro objetivo es adiestrarlos para que ganen batallas frente a otras criaturas.
Para la captura, el jugador debe literalmente lanzarse a las calles de su ciudad. Haciendo uso del GPS del teléfono, la app le avisará con una vibración y una luz intermitente cuando se encuentra cerca de un Pokémon.

## Hallazgos
Los Pokémon tienen características únicas que determinan las decisiones que toma el usuario (tipo, debilidad, peso, multiplicador, etc), con base en esto elegimos qué información de la data es que debíamos utilizar. 
-Nombre, número, tipo, generación, max hp, fortalezas y debilidades.

# 4. Historias de Usuario
## HU 1. Mostrar la data. 
Yo cómo: nueva jugadora de Pokémon.
Quiero ver imágenes y nombres de los Pokemones.
Para: saber cuáles existen.

**Criterios de aceptación:**
-Se visualizan todos los pokémons con nombre, número e imagen.
-Se muestran los pokemones en filas y columnas.

**Criterios de terminado:**
-Una tarjeta contiene nombre, número e imagen de cada pokemon.
-Está en un commit en GH.
-Es responsive.

## HU 2. Filtrar la data.
Yo cómo: jugadora de pokemon Go.
Quiero: conocer el tipo de cada pokemon.
Para: crear una estrategia para mi batalla.

**Criterios de aceptación:**
-Se tienen botones para filtrar cada tipo de pokémon.
-Los botones tienen funcionalidad.
-Los botones tienen estilo en CSS.
-Se tiene test para la función. 
-Se muestran los pokemones filtrados en filas y columnas.

**Criterios de terminado:**
-Está en un commit en GH.
-Es responsive.
-Pasa los test.

## HU 3. Filtrar la data.
Yo cómo: jugadora de pokemon Go.
Quiero: conocer la generación de cada pokemon.
Para: conocer el origen de cada pokemon.

**Criterios de aceptación:**
-Se tienen botones para filtrar las generaciones de los pokémon.
-Los botones tienen funcionalidad.
-Los botones tienen estilo en CSS.
-Se tiene test para la función. 
-Se muestran los pokemones filtrados en filas y columnas.

**Criterios de terminado:**
-Está en un commit en GH.
-Es responsive.
-Pasa los test.

## HU 4. Ordenar la data.
Yo cómo: jugadora de pokemon Go.
Quiero: ordenar los pokemones de manera alfabética y por número..
Para: encontrarlos más fácilmente en la pokédex

**Criterios de aceptación:**
-Se tienen una barra selección.
-La barra tiene opciones para ordenar ascendente y descendentemente, por orden alfabético y de número.
-La barra tiene funcionalidad.
-La barra tiene estilo en CSS.
-Se tiene test para la función. 
-Se muestran los pokemones ordenados en filas y columnas.
**Criterios de terminado:**
-Está en un commit en GH.
-Es responsive.
-Pasa los test.

## HU 5. Calcular algo con la data.
Yo cómo: jugadora de pokemon Go.
Quiero: ingresar el HP de mi pokemon.
Para: que me retorne un pokemon con más HP.

**Criterios de aceptación:**
-Se tiene un input de tipo número.
-Se tiene un botón que realice el cálculo de encontrar un pokemon con más HP, que el número que se ingresa.
-El botón tiene funcionalidad.
-La barra tiene estilo en CSS.
-Se tiene test para la función. 
-Se muestran los pokemones más fuertes en filas y columnas.

**Criterios de terminado:**
-Está en un commit en GH.
-Es responsive.
-Pasa los test.

## HU 6. Mostrar más detalles de la data
Yo cómo: jugadora de pokemon Go.
Quiero: conocer fortalezas, debilidades y más información sobre el pokemon.
Para: crear la estrategia de batalla.

**Criterios de aceptación:**
-Se puede dar click al número de cada pokemon (botón).
-Al dar click se muestran nombre, número, imagen, fortalezas, debilidades e información general del pokemon.
-El botón tiene funcionalidad.
-Se tiene test para la función. 
-Se muestra una tarjeta más grande.
**Criterios de terminado:**
-Está en un commit en GH.
-Es responsive.
-Pasa los test.

## HU 7. Buscar en la data.
Yo cómo: jugadora de pokemon Go.
Quiero: buscar pokemones por sus primeras letras o su nombre
Para: encontrarlos más facilmente en la pokedex.

**Criterios de aceptación:**
-Se tiene un input.
-Al ingresar texto en el input se realiza la búsqueda.
-Si no se encuentran coincidencias, se da un mensaje de error.
-El input tiene estilo en CSS.
-Se tiene test para la función. 
-Se muestran los pokemones en filas y columnas.

**Criterios de terminado:**
-Está en un commit en GH.
-Es responsive.
-Pasa los test.

# 4. Diseño
## Prototipo de baja fidelidad (bocetos).
Después de buscar información sobre pokemon GO y los pokedex, se coincidió en un diseño de página con tarjetas que contengan información de los pokemones, ordenadas por filas y columnas. Además de un menú lateral donde se encuentren los botones y barras para la funcionalidad de la página.
![Primeros bocetos](/boceto1.jpg)
![Primeros bocetos](/boceto2.jpg)

## Prototipo de alta fidelidad
El primer prototipo que se realizó para el proyecto, fue con un menú lateral donde se encuentran todas las funciones.
![Primer prototipo](/prototipo1.JPG)
Después se decidió por cambiar el menú de barra lateral, a dejarlo como un menú encima de las cartas de los pokemones.
![Segundo prototipo](/prototipo2.JPG)

## Paleta de color
Se eligió una paleta de color para utilizar en el diseño de toda la página web.
![Paleta de color](/color.jpg)

# 5. Pruebas unitarias
Se realizaron test para todas las funciones incluídas en nuestro archivo data.js. Estos test dieron un resultado 100% en statements, functions y lines y 85.71 en branchs.
![Resultado tests](/test.JPG)

## Problemas de los test
El principal problema fue el coverage de las branch, ya que al tener todos los test para las funciones cumplía con el 100% para todo a excepción de las branch. Al investigar la razón, nos dimos cuenta que el problema era la suposición de que no se recibiera data(undefined) y esto nos diera un nuevo resultado. Así que tuvimos que incluir en tres test esta opción de undefined, con lo que aumentó el porcentaje de coverage a 85.71%. Y se tomó la decisión de dejarlo hasta ese porcentaje para no seguir al código. 

# 7. Resultado final
![Encabezado y opciones](/final1.JPG)
![Tarjetas pokemones](/final2.JPG)
![Más información del pokemon](/final3.JPG)

# 8. Checklist
[x]Usa VanillaJS.
[x]Pasa linter (npm run pretest)
[x]Pasa tests (npm test)
[x]Pruebas unitarias cubren un mínimo del 70% de statements, functions y lines y branches.
[x]Incluye Definición del producto clara e informativa en README.md.
[x]Incluye historias de usuario en README.md.
[x]Incluye sketch de la solución (prototipo de baja fidelidad) en README.md.
[x]Incluye Diseño de la Interfaz de Usuario (prototipo de alta fidelidad) en README.md.
[x]Incluye el listado de problemas que detectaste a través de tests de usabilidad en el README.md.
[x]UI: Muestra lista y/o tabla con datos y/o indicadores.
[x]UI: Permite ordenar data por uno o más campos (asc y desc).
[x]UI: Permite filtrar data en base a una condición.
[x]UI: Es responsive.