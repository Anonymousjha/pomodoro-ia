let time = 25 * 60;
let timer;
let isRunning = false;

const timerDisplay = document.getElementById("timer");
const messageDisplay = document.getElementById("message");

const frasesIA = [
    "¡Buen trabajo! Recuerda respirar profundamente.",
    "Sigue así, estás haciendo un gran progreso.",
    "Cada minuto cuenta, ¡ánimo!",
    "Tómate tu descanso, lo mereces.",
    "Eres más productivo de lo que crees."
];

function updateDisplay() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        if (time > 0) {
            time--;
            updateDisplay();
        } else {
            clearInterval(timer);
            isRunning = false;
            time = 5 * 60; // Descanso
            updateDisplay();
            const frase = frasesIA[Math.floor(Math.random() * frasesIA.length)];
            messageDisplay.textContent = frase;
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    time = 25 * 60;
    updateDisplay();
    messageDisplay.textContent = "";
}

updateDisplay(); // Mostrar tiempo inicial
