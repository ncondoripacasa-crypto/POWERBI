// Datos de las misiones (10 Reinos)
const levelsData = [
    {
        id: 1,
        title: "Misión 1: El Tablero de Juego",
        theory: `
            <h3>Conceptos Básicos</h3>
            <p>Todo Maestro de Excel debe conocer su campo de batalla: la <strong>Hoja de Cálculo</strong>.</p>
            <ul>
                <li><strong>Columnas:</strong> Van de arriba a abajo y tienen letras (A, B, C...).</li>
                <li><strong>Filas:</strong> Van de izquierda a derecha y tienen números (1, 2, 3...).</li>
                <li><strong>Celdas:</strong> La intersección. Su nombre es Letra + Número (Ej: <code>C4</code>).</li>
            </ul>
        `,
        challenges: [
            {
                instruction: "¿Cuál es el nombre correcto para la celda en la columna B y fila 5?",
                type: "radio",
                options: [
                    { id: "opt1", text: "5B" },
                    { id: "opt2", text: "B5" },
                    { id: "opt3", text: "Columna B Fila 5" }
                ],
                correctAnswer: "opt2",
                xpReward: 50
            },
            {
                instruction: "Demuestra tu precisión: Haz clic en la celda C4 en el simulador.",
                type: "click_cell",
                targetUI: "C4",
                xpReward: 50
            }
        ]
    },
    {
        id: 2,
        title: "Misión 2: Conociendo las Herramientas",
        theory: `
            <h3>¿Dónde está cada cosa?</h3>
            <p>La magia ocurre en dos lugares principales:</p>
            <ul>
                <li><strong>Cinta de opciones (Ribbon):</strong> El menú principal arriba con pestañas como 'Inicio', 'Insertar'.</li>
                <li><strong>Barra de fórmulas:</strong> Donde escribes y lees el código mágico (las fórmulas).</li>
                <li><strong>Cuadro de nombres:</strong> Te dice en qué celda estás parado (ej. A1).</li>
            </ul>
        `,
        challenges: [
            {
                instruction: "Haz clic en el 'Cuadro de Nombres' (donde dice A1) para identificarlo.",
                type: "click_ui",
                targetUI: "name-box",
                xpReward: 50
            },
            {
                instruction: "Ahora, haz clic en la 'Barra de fórmulas' (el espacio largo junto a fx).",
                type: "click_ui",
                targetUI: "formula-input",
                xpReward: 50
            },
            {
                instruction: "Selecciona la pestaña 'Fórmulas' en la cinta de opciones.",
                type: "click_ui",
                targetUI: "tab-formulas",
                xpReward: 50
            }
        ]
    },
    {
        id: 3,
        title: "Misión 3: Tipos de Datos",
        theory: `
            <h3>Textos vs. Números</h3>
            <p>Excel trata los datos según cómo los ingresas:</p>
            <ul>
                <li><strong>Números:</strong> Se alinean a la <em>derecha</em> automáticamente.</li>
                <li><strong>Textos:</strong> Se alinean a la <em>izquierda</em> automáticamente.</li>
            </ul>
            <p>Un número escrito como texto (ej: con espacios "100 00") no se puede sumar.</p>
        `,
        challenges: [
            {
                instruction: "¿Hacia qué lado se alinea automáticamente una palabra que escribes en una celda?",
                type: "radio",
                options: [
                    { id: "opt1", text: "A la derecha" },
                    { id: "opt2", text: "Al centro" },
                    { id: "opt3", text: "A la izquierda" }
                ],
                correctAnswer: "opt3",
                xpReward: 50
            },
            {
                instruction: "Para aplicar negrita a un texto, haz clic en el botón 'B' del menú simulado.",
                type: "click_ui",
                targetUI: "btn-bold",
                xpReward: 50
            }
        ]
    },
    {
        id: 4,
        title: "Misión 4: Calculadora Básica",
        theory: `
            <h3>El Símbolo del Poder (=)</h3>
            <p>Para hacer cálculos, <strong>siempre</strong> debes iniciar con el signo igual <code>=</code>.</p>
            <ul>
                <li>Sumar: <code>+</code></li>
                <li>Restar: <code>-</code></li>
                <li>Multiplicar: <code>*</code></li>
                <li>Dividir: <code>/</code></li>
            </ul>
            <p>Ejemplo: <code>=A1+B1</code></p>
        `,
        challenges: [
            {
                instruction: "Escribe la fórmula exacta para multiplicar la celda A2 por la celda C2:",
                type: "input",
                placeholder: "Ej: =A1*B1",
                correctAnswer: ["=A2*C2", "=C2*A2", "=a2*c2", "=c2*a2"],
                xpReward: 100
            }
        ]
    },
    {
        id: 5,
        title: "Misión 5: Funciones Esenciales",
        theory: `
            <h3>Invocando Funciones</h3>
            <p>Las funciones son hechizos preprogramados. Se aplican a un <strong>rango</strong> (ej: <code>A1:A5</code>).</p>
            <ul>
                <li><code>=SUMA(rango)</code>: Suma todo.</li>
                <li><code>=PROMEDIO(rango)</code>: Saca el promedio.</li>
                <li><code>=MAX(rango)</code>: Encuentra el número más grande.</li>
            </ul>
        `,
        challenges: [
            {
                instruction: "Escribe la función exacta para encontrar el valor MÁS GRANDE (máximo) en el rango desde C1 hasta C10:",
                type: "input",
                placeholder: "Ej: =SUMA(A1:A5)",
                correctAnswer: ["=MAX(C1:C10)", "=max(c1:c10)"],
                xpReward: 100
            }
        ]
    },
    {
        id: 6,
        title: "Misión 6: Contando Datos",
        theory: `
            <h3>CONTAR vs CONTARA</h3>
            <p>A veces necesitas saber cuántos elementos hay en una lista, no sumarlos.</p>
            <ul>
                <li><code>=CONTAR(rango)</code>: Cuenta <strong>solo</strong> las celdas que tienen números.</li>
                <li><code>=CONTARA(rango)</code>: Cuenta todas las celdas que <strong>no están vacías</strong> (textos, números, símbolos).</li>
            </ul>
        `,
        challenges: [
            {
                instruction: "Si tienes una lista de 5 nombres de personas, ¿qué función usarías para contarlos?",
                type: "radio",
                options: [
                    { id: "opt1", text: "=CONTAR()" },
                    { id: "opt2", text: "=CONTARA()" },
                    { id: "opt3", text: "=SUMA()" }
                ],
                correctAnswer: "opt2",
                xpReward: 150
            }
        ]
    },
    {
        id: 7,
        title: "Misión 7: Funciones Lógicas",
        theory: `
            <h3>Tomando decisiones con SI()</h3>
            <p>La función <code>=SI()</code> permite que Excel tome decisiones automáticas basada en una condición.</p>
            <p>Estructura: <code>=SI(condición, qué_pasa_si_es_verdad, qué_pasa_si_es_falso)</code></p>
            <p>Ejemplo: <code>=SI(A1>=60, "Aprobado", "Reprobado")</code></p>
            <p><em>Nota: Los textos siempre van entre comillas "".</em></p>
        `,
        challenges: [
            {
                instruction: "Dada la fórmula =SI(B2>100, \"Caro\", \"Barato\"). Si B2 vale 50, ¿qué resultado dará Excel?",
                type: "radio",
                options: [
                    { id: "opt1", text: "Caro" },
                    { id: "opt2", text: "Barato" },
                    { id: "opt3", text: "Dará un error" }
                ],
                correctAnswer: "opt2",
                xpReward: 200
            }
        ]
    },
    {
        id: 8,
        title: "Misión 8: Manipulación de Textos",
        theory: `
            <h3>Uniendo Palabras</h3>
            <p>Excel también puede jugar con palabras. La función más común es unir dos textos que están separados.</p>
            <p><code>=CONCATENAR(texto1, texto2)</code></p>
            <p>Ejemplo: Si A1 es "Juan" y B1 es "Pérez", <code>=CONCATENAR(A1, B1)</code> da como resultado "JuanPérez".</p>
        `,
        challenges: [
            {
                instruction: "Escribe la función exacta para concatenar las celdas A5 y B5:",
                type: "input",
                placeholder: "Escribe tu fórmula...",
                correctAnswer: ["=CONCATENAR(A5,B5)", "=CONCATENAR(A5;B5)", "=concatenar(a5,b5)", "=concatenar(a5;b5)", "=CONCATENAR(A5, B5)"],
                xpReward: 200
            }
        ]
    },
    {
        id: 9,
        title: "Misión 9: Viaje en el Tiempo",
        theory: `
            <h3>Fechas Dinámicas</h3>
            <p>Si quieres que un reporte siempre muestre la fecha o la hora del día en que se abre, no la escribas a mano.</p>
            <ul>
                <li><code>=HOY()</code>: Muestra la fecha de hoy.</li>
                <li><code>=AHORA()</code>: Muestra la fecha y la hora exactas de este momento.</li>
            </ul>
        `,
        challenges: [
            {
                instruction: "Escribe la función exacta (con paréntesis vacíos) que te devuelve la fecha de hoy:",
                type: "input",
                placeholder: "Ej: =AHORA()",
                correctAnswer: ["=HOY()", "=hoy()"],
                xpReward: 250
            }
        ]
    },
    {
        id: 10,
        title: "Misión 10: Atajos de Maestro",
        theory: `
            <h3>Atajos de Teclado (Shortcuts)</h3>
            <p>Los verdaderos maestros no usan tanto el mouse, usan el teclado:</p>
            <ul>
                <li><strong>Ctrl + C:</strong> Copiar</li>
                <li><strong>Ctrl + V:</strong> Pegar</li>
                <li><strong>Ctrl + Z:</strong> Deshacer (¡salvavidas!)</li>
                <li><strong>F4:</strong> Fija una celda en una fórmula (convierte <code>A1</code> en <code>$A$1</code>).</li>
            </ul>
        `,
        challenges: [
            {
                instruction: "¿Qué combinación de teclas usas para deshacer un error si borraste algo por accidente?",
                type: "radio",
                options: [
                    { id: "opt1", text: "Ctrl + C" },
                    { id: "opt2", text: "Ctrl + Z" },
                    { id: "opt3", text: "F4" }
                ],
                correctAnswer: "opt2",
                xpReward: 300
            }
        ]
    }
];

// Estado de la aplicación
let state = {
    xp: 0,
    completedLevels: [],
    unlockedLevel: 1
};

let currentLevel = null;
let currentChallengeIndex = 0;

// Elementos del DOM
const views = {
    landing: document.getElementById('landing-page'),
    level: document.getElementById('level-page')
};

const hud = {
    xp: document.getElementById('xp-counter'),
    progress: document.getElementById('overall-progress')
};

const elements = {
    btnStart: document.getElementById('btn-start'),
    btnBack: document.getElementById('btn-back'),
    btnSubmit: document.getElementById('btn-submit'),
    btnNextChallenge: document.getElementById('btn-next-challenge'),
    btnNextLevel: document.getElementById('btn-next-level'),
    btnReset: document.getElementById('btn-reset'),
    
    mapPath: document.getElementById('map-path'),
    
    theoryStep: document.getElementById('theory-step'),
    practiceStep: document.getElementById('practice-step'),
    
    theoryContent: document.getElementById('theory-content'),
    challengeCounter: document.getElementById('challenge-counter'),
    instruction: document.getElementById('practice-instruction'),
    currentTitle: document.getElementById('current-level-title'),
    challengeProgress: document.getElementById('challenge-progress'),
    
    btnGoPractice: document.getElementById('btn-go-practice'),
    btnBackTheory: document.getElementById('btn-back-theory'),
    
    excelSimulator: document.getElementById('excel-simulator'),
    simulatorGrid: document.getElementById('simulator-grid'),
    dynamicInteraction: document.getElementById('dynamic-interaction'),
    feedbackMsg: document.getElementById('feedback-message')
};

// Generar grilla del simulador (5 columnas A-E, 5 filas 1-5)
function buildSimulator() {
    elements.simulatorGrid.innerHTML = '';
    elements.simulatorGrid.style.gridTemplateColumns = '40px repeat(5, 1fr)';
    
    // Esquina superior izquierda vacía
    const corner = document.createElement('div');
    corner.className = 'excel-cell excel-header';
    elements.simulatorGrid.appendChild(corner);
    
    // Cabeceras de columnas (A-E)
    const cols = ['A', 'B', 'C', 'D', 'E'];
    cols.forEach(col => {
        const header = document.createElement('div');
        header.className = 'excel-cell excel-header';
        header.textContent = col;
        elements.simulatorGrid.appendChild(header);
    });
    
    // Filas (1-5) con celdas
    for (let r = 1; r <= 5; r++) {
        // Cabecera de fila
        const rowHeader = document.createElement('div');
        rowHeader.className = 'excel-cell excel-header';
        rowHeader.textContent = r;
        elements.simulatorGrid.appendChild(rowHeader);
        
        // Celdas
        cols.forEach(col => {
            const cell = document.createElement('div');
            cell.className = 'excel-cell';
            cell.dataset.ui = `${col}${r}`; // ej. A1, B2
            
            // Interaction click
            cell.addEventListener('click', () => {
                // Actualizar name-box visualmente
                document.getElementById('sim-name-box').textContent = cell.dataset.ui;
                // Si es reto de tipo click_cell
                handleUIClick(cell.dataset.ui);
            });
            
            elements.simulatorGrid.appendChild(cell);
        });
    }

    // Agregar listeners a otros elementos de UI
    document.querySelectorAll('[data-ui]').forEach(el => {
        if (!el.classList.contains('excel-cell')) {
            el.addEventListener('click', (e) => {
                e.stopPropagation();
                handleUIClick(el.dataset.ui);
            });
        }
    });
}

function handleUIClick(uiName) {
    if (!currentLevel) return;
    const challenge = currentLevel.challenges[currentChallengeIndex];
    if (challenge.type === 'click_cell' || challenge.type === 'click_ui') {
        if (uiName === challenge.targetUI) {
            checkAnswer(true); // Forced correct
        } else {
            showFeedback(false, "Incorrecto. Hiciste clic en el lugar equivocado.");
            elements.feedbackMsg.classList.remove('hidden');
        }
    }
}

function init() {
    loadProgress();
    buildSimulator();
    renderMap();
    updateHUD();
    setupEventListeners();
}

function loadProgress() {
    const saved = localStorage.getItem('excelQuestData');
    if (saved) {
        state = JSON.parse(saved);
    } else {
        state = { xp: 0, completedLevels: [], unlockedLevel: 1 };
    }
}

function saveProgress() {
    localStorage.setItem('excelQuestData', JSON.stringify(state));
}

function updateHUD() {
    hud.xp.textContent = `${state.xp} XP`;
    const progressPercent = (state.completedLevels.length / levelsData.length) * 100;
    hud.progress.style.width = `${progressPercent}%`;
}

function renderMap() {
    elements.mapPath.innerHTML = '';
    
    levelsData.forEach(lvl => {
        const isUnlocked = lvl.id <= state.unlockedLevel;
        const isCompleted = state.completedLevels.includes(lvl.id);
        
        let nodeClass = 'locked';
        if (isCompleted) nodeClass = 'completed';
        else if (isUnlocked) nodeClass = 'unlocked';
        
        const node = document.createElement('div');
        node.className = `map-node ${nodeClass}`;
        
        node.innerHTML = `
            <div class="map-dot"></div>
            <div class="map-card" ${isUnlocked ? 'role="button" tabindex="0"' : ''}>
                <div class="level-number">Misión ${lvl.id}</div>
                <h4>${lvl.title.split(': ')[1]}</h4>
            </div>
        `;

        if (isUnlocked) {
            node.querySelector('.map-card').addEventListener('click', () => startLevel(lvl.id));
        }

        elements.mapPath.appendChild(node);
    });
}

function switchView(viewName) {
    Object.values(views).forEach(v => v.classList.remove('active', 'hidden'));
    Object.values(views).forEach(v => v.classList.add('hidden'));
    
    views[viewName].classList.remove('hidden');
    views[viewName].classList.add('active');
}

function showStep(stepName) {
    if (stepName === 'theory') {
        elements.practiceStep.classList.remove('active');
        elements.practiceStep.classList.add('hidden');
        elements.theoryStep.classList.remove('hidden');
        elements.theoryStep.classList.add('active');
    } else if (stepName === 'practice') {
        elements.theoryStep.classList.remove('active');
        elements.theoryStep.classList.add('hidden');
        elements.practiceStep.classList.remove('hidden');
        elements.practiceStep.classList.add('active');
    }
}

function setupEventListeners() {
    elements.btnStart.addEventListener('click', () => {
        let next = 1;
        for (let i = 1; i <= levelsData.length; i++) {
            if (!state.completedLevels.includes(i)) {
                next = i; break;
            }
        }
        if (next > state.unlockedLevel) next = state.unlockedLevel;
        startLevel(next);
    });

    elements.btnBack.addEventListener('click', () => {
        switchView('landing');
        renderMap();
    });

    elements.btnGoPractice.addEventListener('click', () => showStep('practice'));
    elements.btnBackTheory.addEventListener('click', () => showStep('theory'));

    elements.btnSubmit.addEventListener('click', () => checkAnswer(false));
    
    elements.btnNextChallenge.addEventListener('click', () => {
        currentChallengeIndex++;
        loadChallenge();
    });
    
    elements.btnNextLevel.addEventListener('click', () => {
        switchView('landing');
        renderMap();
    });

    elements.btnReset.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que deseas reiniciar tu viaje? Perderás toda tu XP y progreso.')) {
            state = { xp: 0, completedLevels: [], unlockedLevel: 1 };
            saveProgress();
            updateHUD();
            renderMap();
        }
    });
}

function startLevel(levelId) {
    const data = levelsData.find(l => l.id === levelId);
    if (!data) return;

    currentLevel = data;
    currentChallengeIndex = 0;
    
    elements.currentTitle.textContent = data.title;
    elements.theoryContent.innerHTML = data.theory;
    
    loadChallenge();
    switchView('level');
    showStep('theory');
}

function renderChallengeProgress() {
    elements.challengeProgress.innerHTML = '';
    currentLevel.challenges.forEach((ch, idx) => {
        const dot = document.createElement('div');
        dot.className = 'challenge-dot';
        if (idx < currentChallengeIndex) dot.classList.add('done');
        else if (idx === currentChallengeIndex) dot.classList.add('active');
        elements.challengeProgress.appendChild(dot);
    });
}

function loadChallenge() {
    renderChallengeProgress();
    
    const challenge = currentLevel.challenges[currentChallengeIndex];
    elements.challengeCounter.textContent = `Reto ${currentChallengeIndex + 1}/${currentLevel.challenges.length}`;
    elements.instruction.textContent = challenge.instruction;
    
    // Limpiar UI anterior
    elements.dynamicInteraction.innerHTML = '';
    elements.excelSimulator.classList.add('hidden');
    elements.feedbackMsg.classList.add('hidden');
    elements.btnSubmit.classList.add('hidden');
    elements.btnNextChallenge.classList.add('hidden');
    elements.btnNextLevel.classList.add('hidden');
    
    // Remover clases de highlight interactivas previas
    document.querySelectorAll('.sim-interactive').forEach(el => el.classList.remove('sim-interactive'));

    if (challenge.type === 'click_cell' || challenge.type === 'click_ui') {
        // Mostrar simulador
        elements.excelSimulator.classList.remove('hidden');
        
        // Poner clase hover al target para que brille cuando el mouse pasa (guiño visual sutil)
        const targetEl = document.querySelector(`[data-ui="${challenge.targetUI}"]`);
        if(targetEl) targetEl.classList.add('sim-interactive');
        
    } else if (challenge.type === 'radio') {
        const div = document.createElement('div');
        div.className = 'radio-group';
        challenge.options.forEach(opt => {
            const label = document.createElement('label');
            label.className = 'radio-option';
            label.innerHTML = `<input type="radio" name="chAnswer" value="${opt.id}"><span>${opt.text}</span>`;
            div.appendChild(label);
        });
        elements.dynamicInteraction.appendChild(div);
        elements.btnSubmit.classList.remove('hidden');
        
    } else if (challenge.type === 'input') {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'chAnswerInput';
        input.placeholder = challenge.placeholder;
        input.autocomplete = 'off';
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') checkAnswer(false);
        });
        
        const div = document.createElement('div');
        div.className = 'input-group';
        div.appendChild(input);
        
        elements.dynamicInteraction.appendChild(div);
        elements.btnSubmit.classList.remove('hidden');
        
        setTimeout(() => input.focus(), 100);
    }
}

function showFeedback(isCorrect, message) {
    elements.feedbackMsg.textContent = message;
    elements.feedbackMsg.className = `feedback ${isCorrect ? 'success' : 'error'}`;
}

function checkAnswer(isForcedCorrect = false) {
    const challenge = currentLevel.challenges[currentChallengeIndex];
    let isCorrect = isForcedCorrect;
    let userAnswer = '';
    
    if (!isForcedCorrect) {
        if (challenge.type === 'radio') {
            const selected = document.querySelector('input[name="chAnswer"]:checked');
            if (!selected) return showFeedback(false, 'Por favor, selecciona una opción.');
            isCorrect = (selected.value === challenge.correctAnswer);
        } else if (challenge.type === 'input') {
            const inputEl = document.getElementById('chAnswerInput');
            userAnswer = inputEl.value.trim().replace(/\s+/g, '').toLowerCase();
            if (!userAnswer) return showFeedback(false, 'Por favor, escribe una respuesta.');
            isCorrect = challenge.correctAnswer.some(ans => ans.replace(/\s+/g, '').toLowerCase() === userAnswer);
        }
    }

    if (isCorrect) {
        showFeedback(true, '¡Victoria! Has superado este reto.');
        if (elements.btnSubmit) elements.btnSubmit.classList.add('hidden');
        
        // Sumar XP
        state.xp += challenge.xpReward;
        
        // Es el último reto del nivel?
        if (currentChallengeIndex === currentLevel.challenges.length - 1) {
            elements.btnNextLevel.classList.remove('hidden');
            
            // Nivel completado!
            if (!state.completedLevels.includes(currentLevel.id)) {
                state.completedLevels.push(currentLevel.id);
                if (state.unlockedLevel === currentLevel.id && currentLevel.id < levelsData.length) {
                    state.unlockedLevel++;
                }
            }
        } else {
            // Faltan retos en este nivel
            elements.btnNextChallenge.classList.remove('hidden');
        }
        
        saveProgress();
        updateHUD();
        
    } else {
        showFeedback(false, 'Ataque fallido. Revisa la teoría e inténtalo de nuevo.');
    }
}

document.addEventListener('DOMContentLoaded', init);
