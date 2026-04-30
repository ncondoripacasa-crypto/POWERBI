# ExcelQuest - El Dominio de la Hoja de Cálculo

ExcelQuest es una aventura interactiva (estilo RPG) y gamificada diseñada para enseñar Microsoft Excel desde cero. Está orientada a estudiantes que deseen dominar esta herramienta completando "Misiones" en un "Reino Digital", combinando retos teóricos, cuestionarios y **prácticas directas en un simulador de Excel integrado**.

## ⚔️ Características Épicas
- **Diseño Dark Mode RPG:** Interfaz oscura con acentos dorados (`#d4af37`), fuentes épicas (Cinzel) y mapas de ruta verticales para los niveles.
- **Simulador de Excel:** Zona de práctica interactiva que incluye Cinta de opciones, Barra de fórmulas y una cuadrícula (grid) donde los estudiantes deben hacer clic en celdas reales.
- **Sistema de Misiones:** 10 Reinos (niveles) desbloqueables. Cada nivel contiene múltiples retos progresivos para ganar XP.
- **Persistencia Mágica:** El progreso del héroe se guarda localmente en su navegador usando \`localStorage\`.
- **Vanilla Puro:** Cero dependencias o frameworks externos. Construido exclusivamente con HTML5, CSS3 y JavaScript moderno.

## 🗺️ Estructura del Reino
- \`index.html\`: Mapa de los Reinos y contenedores de Misiones (Teoría y Práctica con Simulador).
- \`styles.css\`: Temática oscura, animaciones CSS fluidas y diseño responsivo para móviles y escritorio.
- \`script.js\`: El "Dungeon Master" (lógica). Controla los retos, la inyección del mapa, interacción del simulador y XP.
- \`assets/\`: Bóveda para futuras imágenes o recursos gráficos estáticos.

## 📜 Las 10 Misiones (Reinos)
1. El Tablero de Juego (Conceptos básicos espaciales)
2. Conociendo las Herramientas (Navegación de UI)
3. Tipos de Datos (Alineación)
4. Calculadora Básica (Matemáticas con \`=\`)
5. Funciones Esenciales (\`SUMA\`, \`MAX\`)
6. Contando Datos (\`CONTAR\`, \`CONTARA\`)
7. Funciones Lógicas (\`SI\`)
8. Manipulación de Textos (\`CONCATENAR\`)
9. Viaje en el Tiempo (\`HOY\`, \`AHORA\`)
10. Atajos de Maestro (Shortcuts del teclado)

## 🔮 Cómo Jugar Localmente
1. Clona o descarga este repositorio.
2. Navega a la carpeta principal del proyecto.
3. Haz doble clic en el archivo \`index.html\` para abrirlo en tu navegador.
4. Presiona "Iniciar Aventura" y conquista los Reinos.

## 🏰 Despliegue en GitHub Pages
Para que otros héroes puedan jugar en línea:
1. Crea un repositorio en [GitHub](https://github.com/).
2. Sube los archivos a la rama \`main\`.
3. Ve a **Settings** > **Pages**.
4. En *Source*, selecciona la rama \`main\` y dale a **Save**.
5. ¡Tu aventura estará viva en internet!
