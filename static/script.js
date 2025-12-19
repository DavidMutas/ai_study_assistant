// Globale Variablen
let currentMode = 'explain'; // Aktiver Modus
let history = [];            // Verlauf der Interaktionen

// Modus setzen
function setMode(mode) {
    currentMode = mode;
    document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`button[onclick="setMode('${mode}')"]`).classList.add('active');
}

// Anfrage an die KI senden
async function askAI() {
    const input = document.getElementById('user-input').value;
    const responseArea = document.getElementById('response-area');
    responseArea.innerHTML = '';

    if (!input) {
        responseArea.innerHTML = '<div class="error">⚠️ Bitte geben Sie eine Frage ein!</div>';
        return;
    }

    responseArea.innerHTML = '<div class="loading">🔮 AI is thinking...</div>';

    try {
        const response = await fetch('http://localhost:5000/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: input, mode: currentMode })
        });

        if (!response.ok) throw new Error(`HTTP-Fehler! ${response.status}`);
        
        const data = await response.json();
        responseArea.innerHTML = marked.parse(data.response);
        addToHistory(input, data.response);
    } catch (error) {
        responseArea.innerHTML = `<div class="error">❌ Fehler: ${error.message}</div>`;
    }
}

// Spoiler anzeigen/verstecken
function revealSpoiler(element) {
    element.classList.toggle('revealed');
}

// Eintrag zum Verlauf hinzufügen
function addToHistory(question, answer) {
    let formattedAnswer = answer;
    if (currentMode === 'quiz') {
        formattedAnswer = answer.replace(/<span class="spoiler[^>]*>([\s\S]*?)<\/span>/g, '$1');
    }

    history.push({
        timestamp: new Date().toLocaleTimeString(),
        question: question,
        answer: formattedAnswer.substring(0, 100) + '...'
    });
    
    updateHistoryDisplay();
}

// Verlauf aktualisieren
function updateHistoryDisplay() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = history
        .map(item => `
            <div class="history-item">
                <small>${item.timestamp}</small>
                <p><strong>Q:</strong> ${item.question}</p>
                <p><strong>A:</strong> ${marked.parse(item.answer)}</p>
            </div>
        `).join('');
}

// Starte mit dem Erklärungsmodus
setMode('explain');