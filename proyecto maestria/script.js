// Datos de los 10 niveles
const levelsData = [
    {
        id: 1,
        title: "Lección 1: El Tablero de Juego",
        badge: "🏁",
        theory: `
            <h3>Conceptos Básicos</h3>
            <p>Excel es como un gran tablero de batalla naval llamado <strong>Hoja de Cálculo</strong>.</p>
            <ul>
                <li><strong>Columnas:</strong> Van de arriba a abajo y tienen letras (A, B, C...).</li>
                <li><strong>Filas:</strong> Van de izquierda a derecha y tienen números (1, 2, 3...).</li>
                <li><strong>Celdas:</strong> Son cada uno de los cuadritos. Su nombre es la letra de la columna más el número de la fila (Ejemplo: <code>A1</code>).</li>
            </ul>
        `,
        instruction: "¿Cuál es el nombre correcto para la celda que está en la columna B y la fila 5?",
        type: "radio",
        options: [
            { id: "opt1", text: "5B" },
            { id: "opt2", text: "B5" },
            { id: "opt3", text: "Columna B Fila 5" }
        ],
        correctAnswer: "opt2",
        xpReward: 100
    },
    {
        id: 2,
        title: "Lección 2: Conociendo la Interfaz",
        badge: "🖥️",
        theory: `
            <h3>¿Dónde está cada cosa?</h3>
            <p>La pantalla de Excel tiene partes muy importantes:</p>
            <ul>
                <li><strong>Cinta de opciones:</strong> El menú principal arriba donde están todas las herramientas.</li>
                <li><strong>Barra de fórmulas:</strong> Una barra blanca y larga arriba de las celdas donde puedes ver y editar lo que realmente contiene una celda seleccionada.</li>
            </ul>
        `,
        instruction: "Si escribes una fórmula muy larga en una celda, ¿dónde es el mejor lugar para leerla y editarla cómodamente?",
        type: "radio",
        options: [
            { id: "opt1", text: "En la Cinta de opciones" },
            { id: "opt2", text: "En la Barra de fórmulas" },
            { id: "opt3", text: "En la barra de estado inferior" }
        ],
        correctAnswer: "opt1", // wait, error in logic, correct is opt2
        correctAnswer: "opt2",
        xpReward: 100
    },
    {
        id: 3,
        title: "Lección 3: Tipos de Datos",
        badge: "🔤",
        theory: `
            <h3>Textos vs. Números</h3>
            <p>Excel trata los datos de manera diferente dependiendo de qué escribas:</p>
            <ul>
                <li><strong>Números:</strong> Se usan para matemáticas. Por defecto se alinean a la <em>derecha</em>.</li>
                <li><strong>Textos:</strong> Letras o símbolos. Por defecto se alinean a la <em>izquierda</em>.</li>
            </ul>
            <p>Si escribes un número de teléfono con espacios (Ej: <code>555 1234</code>), Excel lo tratará como texto, no podrás sumarlo.</p>
        `,
        instruction: "¿Cómo alinea Excel por defecto una palabra escrita en una celda?",
        type: "radio",
        options: [
            { id: "opt1", text: "A la derecha" },
            { id: "opt2", text: "Al centro" },
            { id: "opt3", text: "A la izquierda" }
        ],
        correctAnswer: "opt3",
        xpReward: 150
    },
    {
        id: 4,
        title: "Lección 4: Calculadora Básica",
        badge: "➕",
        theory: `
            <h3>Tu primera fórmula</h3>
            <p>Para hacer cálculos manuales, <strong>siempre</strong> debes empezar escribiendo el signo igual <code>=</code>.</p>
            <ul>
                <li>Sumar: <code>+</code></li>
                <li>Restar: <code>-</code></li>
                <li>Multiplicar: <code>*</code></li>
                <li>Dividir: <code>/</code></li>
            </ul>
            <p>Ejemplo: <code>=A1+B1</code></p>
        `,
        instruction: "Escribe la fórmula exacta para multiplicar la celda A2 por la celda C2:",
        type: "input",
        placeholder: "Ej: =A1*B1",
        correctAnswer: ["=A2*C2", "=C2*A2", "=a2*c2", "=c2*a2"],
        xpReward: 200
    },
    {
        id: 5,
        title: "Lección 5: Funciones Esenciales",
        badge: "🧮",
        theory: `
            <h3>Ahorrando tiempo con Funciones</h3>
            <p>Las funciones son fórmulas que Excel ya tiene programadas. Se usan con un <strong>rango</strong> (ej: <code>A1:A5</code> significa desde A1 hasta A5).</p>
            <ul>
                <li><code>=SUMA(rango)</code>: Suma todo.</li>
                <li><code>=PROMEDIO(rango)</code>: Saca el promedio.</li>
                <li><code>=MAX(rango)</code>: Encuentra el número más grande.</li>
            </ul>
        `,
        instruction: "Escribe la función exacta para encontrar el valor MÁS GRANDE (máximo) en el rango desde C1 hasta C10:",
        type: "input",
        placeholder: "Ej: =SUMA(A1:A5)",
        correctAnswer: ["=MAX(C1:C10)", "=max(c1:c10)"],
        xpReward: 250
    },
    {
        id: 6,
        title: "Lección 6: Contando Datos",
        badge: "🔢",
        theory: `
            <h3>CONTAR vs CONTARA</h3>
            <p>A veces necesitas saber cuántos elementos hay en una lista, no sumarlos.</p>
            <ul>
                <li><code>=CONTAR(rango)</code>: Cuenta <strong>solo</strong> las celdas que tienen números.</li>
                <li><code>=CONTARA(rango)</code>: Cuenta todas las celdas que <strong>no están vacías</strong> (textos, números, símbolos).</li>
            </ul>
        `,
        instruction: "Si tienes una lista de 5 nombres de personas, ¿qué función usarías para contarlos?",
        type: "radio",
        options: [
            { id: "opt1", text: "=CONTAR()" },
            { id: "opt2", text: "=CONTARA()" },
            { id: "opt3", text: "=SUMA()" }
        ],
        correctAnswer: "opt2",
        xpReward: 250
    },
    {
        id: 7,
        title: "Lección 7: Funciones Lógicas",
        badge: "⚖️",
        theory: `
            <h3>Tomando decisiones con SI()</h3>
            <p>La función <code>=SI()</code> permite que Excel tome decisiones automáticas basada en una condición.</p>
            <p>Estructura: <code>=SI(condición, qué_pasa_si_es_verdad, qué_pasa_si_es_falso)</code></p>
            <p>Ejemplo: <code>=SI(A1>=60, "Aprobado", "Reprobado")</code></p>
            <p><em>Nota: Los textos siempre van entre comillas "".</em></p>
        `,
        instruction: "Dada la fórmula =SI(B2>100, \"Caro\", \"Barato\"). Si B2 vale 50, ¿qué resultado dará Excel?",
        type: "radio",
        options: [
            { id: "opt1", text: "Caro" },
            { id: "opt2", text: "Barato" },
            { id: "opt3", text: "Dará un error" }
        ],
        correctAnswer: "opt2",
        xpReward: 300
    },
    {
        id: 8,
        title: "Lección 8: Manipulación de Textos",
        badge: "📝",
        theory: `
            <h3>Uniendo Palabras</h3>
            <p>Excel también puede jugar con palabras. La función más común es unir dos textos que están separados.</p>
            <p><code>=CONCATENAR(texto1, texto2)</code></p>
            <p>Ejemplo: Si A1 es "Juan" y B1 es "Pérez", <code>=CONCATENAR(A1, B1)</code> da como resultado "JuanPérez".</p>
        `,
        instruction: "Escribe la función exacta para concatenar las celdas A5 y B5:",
        type: "input",
        placeholder: "Escribe tu fórmula...",
        correctAnswer: ["=CONCATENAR(A5,B5)", "=CONCATENAR(A5;B5)", "=concatenar(a5,b5)", "=concatenar(a5;b5)", "=CONCATENAR(A5, B5)"],
        xpReward: 300
    },
    {
        id: 9,
        title: "Lección 9: Viaje en el Tiempo",
        badge: "📅",
        theory: `
            <h3>Fechas Dinámicas</h3>
            <p>Si quieres que un reporte siempre muestre la fecha o la hora del día en que se abre, no la escribas a mano.</p>
            <ul>
                <li><code>=HOY()</code>: Muestra la fecha de hoy.</li>
                <li><code>=AHORA()</code>: Muestra la fecha y la hora exactas de este momento.</li>
            </ul>
        `,
        instruction: "Escribe la función exacta (con paréntesis vacíos) que te devuelve la fecha de hoy:",
        type: "input",
        placeholder: "Ej: =AHORA()",
        correctAnswer: ["=HOY()", "=hoy()"],
        xpReward: 350
    },
    {
        id: 10,
        title: "Lección 10: Atajos de Maestro",
        badge: "⚡",
        theory: `
            <h3>Atajos de Teclado (Shortcuts)</h3>
            <p>Los profesionales no usan tanto el mouse, usan el teclado:</p>
            <ul>
                <li><strong>Ctrl + C:</strong> Copiar</li>
                <li><strong>Ctrl + V:</strong> Pegar</li>
                <li><strong>Ctrl + Z:</strong> Deshacer (¡salvavidas!)</li>
                <li><strong>F4:</strong> Fija una celda en una fórmula (convierte <code>A1</code> en <code>$A$1</code>).</li>
            </ul>
        `,
        instruction: "¿Qué combinación de teclas usas para deshacer un error si borraste algo por accidente?",
        type: "radio",
        options: [
            { id: "opt1", text: "Ctrl + C" },
            { id: "opt2", text: "Ctrl + Z" },
            { id: "opt3", text: "F4" }
        ],
        correctAnswer: "opt2",
        xpReward: 400
    }
];

// Estado de la aplicación
let state = {
    xp: 0,
    completedLevels: [],
    unlockedLevel: 1
};

// Elementos del DOM
const views = {
    landing: document.getElementById('landing-page'),
    level: document.getElementById('level-page')
};

const hud = {
    xp: document.getElementById('xp-counter'),
    badges: document.getElementById('badges-container'),
    progress: document.getElementById('overall-progress')
};

const elements = {
    btnStart: document.getElementById('btn-start'),
    btnBack: document.getElementById('btn-back'),
    btnSubmit: document.getElementById('btn-submit'),
    btnNext: document.getElementById('btn-next-level'),
    btnReset: document.getElementById('btn-reset'),
    
    levelsGrid: document.getElementById('levels-grid'),
    
    // Contenedores de pasos
    theoryStep: document.getElementById('theory-step'),
    practiceStep: document.getElementById('practice-step'),
    
    // Elementos internos
    theoryContent: document.getElementById('theory-content'),
    practiceArea: document.getElementById('interactive-area'),
    feedbackMsg: document.getElementById('feedback-message'),
    instruction: document.getElementById('practice-instruction'),
    currentTitle: document.getElementById('current-level-title'),
    currentBadge: document.getElementById('current-level-badge'),
    
    // Botones de pasos
    btnGoPractice: document.getElementById('btn-go-practice'),
    btnBackTheory: document.getElementById('btn-back-theory')
};

let currentPlayingLevel = null;

// Inicialización
function init() {
    loadProgress();
    renderMap();
    updateHUD();
    setupEventListeners();
}

function loadProgress() {
    const saved = localStorage.getItem('excelProData');
    if (saved) {
        state = JSON.parse(saved);
    } else {
        state = { xp: 0, completedLevels: [], unlockedLevel: 1 };
    }
}

function saveProgress() {
    localStorage.setItem('excelProData', JSON.stringify(state));
}

function updateHUD() {
    hud.xp.textContent = `${state.xp} XP`;
    
    const totalLevels = levelsData.length;
    const progressPercent = (state.completedLevels.length / totalLevels) * 100;
    hud.progress.style.width = `${progressPercent}%`;

    hud.badges.innerHTML = '';
    levelsData.forEach(lvl => {
        const isEarned = state.completedLevels.includes(lvl.id);
        const badgeEl = document.createElement('span');
        badgeEl.className = `badge ${isEarned ? 'earned' : ''}`;
        badgeEl.textContent = lvl.badge;
        badgeEl.title = isEarned ? lvl.title : 'Lección bloqueada';
        hud.badges.appendChild(badgeEl);
    });
}

function renderMap() {
    elements.levelsGrid.innerHTML = '';
    
    levelsData.forEach(lvl => {
        const isUnlocked = lvl.id <= state.unlockedLevel;
        const isCompleted = state.completedLevels.includes(lvl.id);
        
        const card = document.createElement('div');
        
        let statusClass = 'locked';
        let statusIcon = '🔒';
        
        if (isCompleted) {
            statusClass = 'completed';
            statusIcon = '✅';
        } else if (isUnlocked) {
            statusClass = 'unlocked';
            statusIcon = '▶️';
        }

        card.className = `level-card ${statusClass}`;
        card.innerHTML = `
            <span class="level-number">Lección ${lvl.id}</span>
            <h4>${lvl.title.split(': ')[1]}</h4>
            <div class="level-status">${statusIcon}</div>
        `;

        if (isUnlocked) {
            card.addEventListener('click', () => startLevel(lvl.id));
        }

        elements.levelsGrid.appendChild(card);
    });
}

function switchView(viewName) {
    Object.values(views).forEach(v => v.classList.remove('active'));
    Object.values(views).forEach(v => v.classList.add('hidden'));
    
    views[viewName].classList.remove('hidden');
    views[viewName].classList.add('active');
}

function showStep(stepName) {
    if (stepName === 'theory') {
        elements.practiceStep.classList.remove('active', 'slide-out-left');
        elements.practiceStep.classList.add('hidden');
        
        elements.theoryStep.classList.remove('hidden', 'slide-out-left');
        elements.theoryStep.classList.add('active');
    } else if (stepName === 'practice') {
        // Animación de salida para la teoría
        elements.theoryStep.classList.remove('active');
        elements.theoryStep.classList.add('slide-out-left');
        
        setTimeout(() => {
            elements.theoryStep.classList.add('hidden');
            elements.theoryStep.classList.remove('slide-out-left');
            
            elements.practiceStep.classList.remove('hidden', 'slide-out-left');
            elements.practiceStep.classList.add('active');
            
            // Focar input si existe
            const input = document.getElementById('levelAnswerInput');
            if(input) input.focus();
        }, 350); // Tiempo que coincida aprox con la animación CSS
    }
}

function setupEventListeners() {
    elements.btnStart.addEventListener('click', () => {
        let nextLevel = 1;
        for (let i = 1; i <= levelsData.length; i++) {
            if (!state.completedLevels.includes(i)) {
                nextLevel = i;
                break;
            }
        }
        if (nextLevel > state.unlockedLevel) nextLevel = state.unlockedLevel;
        startLevel(nextLevel);
    });

    elements.btnBack.addEventListener('click', () => {
        switchView('landing');
        renderMap();
    });

    elements.btnGoPractice.addEventListener('click', () => {
        showStep('practice');
    });

    elements.btnBackTheory.addEventListener('click', () => {
        showStep('theory');
    });

    elements.btnSubmit.addEventListener('click', checkAnswer);
    
    elements.btnNext.addEventListener('click', () => {
        if (currentPlayingLevel.id < levelsData.length) {
            startLevel(currentPlayingLevel.id + 1);
        } else {
            alert('¡Felicidades! Eres oficialmente un Maestro de Excel.');
            switchView('landing');
            renderMap();
        }
    });

    elements.btnReset.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que deseas reiniciar todo tu progreso? Perderás tus XP e insignias.')) {
            state = { xp: 0, completedLevels: [], unlockedLevel: 1 };
            saveProgress();
            updateHUD();
            renderMap();
            switchView('landing');
        }
    });
}

function startLevel(levelId) {
    const levelData = levelsData.find(l => l.id === levelId);
    if (!levelData) return;

    currentPlayingLevel = levelData;
    
    // Configurar encabezado
    elements.currentTitle.textContent = levelData.title;
    elements.currentBadge.textContent = levelData.badge;
    
    // Configurar teoría
    elements.theoryContent.innerHTML = levelData.theory;
    
    // Configurar práctica
    elements.instruction.textContent = levelData.instruction;
    elements.practiceArea.innerHTML = '';
    
    if (levelData.type === 'radio') {
        const radioGroup = document.createElement('div');
        radioGroup.className = 'radio-group';
        
        levelData.options.forEach(opt => {
            const label = document.createElement('label');
            label.className = 'radio-option';
            label.innerHTML = `
                <input type="radio" name="levelAnswer" value="${opt.id}">
                <span>${opt.text}</span>
            `;
            radioGroup.appendChild(label);
        });
        elements.practiceArea.appendChild(radioGroup);
    } else if (levelData.type === 'input') {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'levelAnswerInput';
        input.placeholder = levelData.placeholder;
        input.autocomplete = 'off';
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') checkAnswer();
        });
        
        elements.practiceArea.appendChild(input);
    }

    // Resetear feedback y botones
    elements.feedbackMsg.className = 'feedback hidden';
    elements.btnSubmit.classList.remove('hidden');
    elements.btnNext.classList.add('hidden');
    
    switchView('level');
    showStep('theory');
}

function showFeedback(isCorrect, message) {
    elements.feedbackMsg.textContent = message;
    elements.feedbackMsg.className = `feedback ${isCorrect ? 'success' : 'error'}`;
}

function checkAnswer() {
    if (!currentPlayingLevel) return;
    
    let isCorrect = false;
    let userAnswer = '';
    
    if (currentPlayingLevel.type === 'radio') {
        const selected = document.querySelector('input[name="levelAnswer"]:checked');
        if (!selected) {
            showFeedback(false, 'Por favor, selecciona una opción.');
            return;
        }
        userAnswer = selected.value;
        isCorrect = (userAnswer === currentPlayingLevel.correctAnswer);
    } else if (currentPlayingLevel.type === 'input') {
        const inputEl = document.getElementById('levelAnswerInput');
        userAnswer = inputEl.value.trim().replace(/\s+/g, ''); 
        
        if (!userAnswer) {
            showFeedback(false, 'Por favor, escribe una respuesta.');
            return;
        }
        
        isCorrect = currentPlayingLevel.correctAnswer.some(ans => 
            ans.replace(/\s+/g, '').toLowerCase() === userAnswer.toLowerCase()
        );
    }

    if (isCorrect) {
        showFeedback(true, '¡Correcto! Excelente trabajo.');
        elements.btnSubmit.classList.add('hidden');
        
        // Ganar recompensa
        if (!state.completedLevels.includes(currentPlayingLevel.id)) {
            state.completedLevels.push(currentPlayingLevel.id);
            state.xp += currentPlayingLevel.xpReward;
            
            if (state.unlockedLevel === currentPlayingLevel.id && currentPlayingLevel.id < levelsData.length) {
                state.unlockedLevel++;
            }
            
            saveProgress();
            updateHUD();
            
            setTimeout(() => {
                const badgeEarnedMsg = document.createElement('div');
                badgeEarnedMsg.style.cssText = "position:fixed; top:20px; right:20px; background:var(--primary-color); color:white; padding:15px; border-radius:8px; z-index:1000; box-shadow:0 4px 6px rgba(0,0,0,0.3); animation:fadeIn 0.5s; font-weight:bold;";
                badgeEarnedMsg.innerHTML = `🎉 ¡Ganaste ${currentPlayingLevel.xpReward} XP y la insignia ${currentPlayingLevel.badge}!`;
                document.body.appendChild(badgeEarnedMsg);
                setTimeout(() => badgeEarnedMsg.remove(), 3500);
            }, 500);
        }
        
        if (currentPlayingLevel.id < levelsData.length) {
            elements.btnNext.classList.remove('hidden');
        } else {
            elements.btnNext.classList.remove('hidden');
            elements.btnNext.textContent = '¡Ver resultados finales!';
        }
        
    } else {
        showFeedback(false, 'Incorrecto. Revisa la teoría e inténtalo de nuevo.');
        elements.btnSubmit.style.animation = 'none';
        setTimeout(() => elements.btnSubmit.style.animation = 'shake 0.4s', 10);
    }
}

document.addEventListener('DOMContentLoaded', init);
