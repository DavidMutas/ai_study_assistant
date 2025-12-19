from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import openai
import os
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/ask', methods=['POST'])
def ask_question():
    data = request.json
    prompt = data.get('prompt')
    mode = data.get('mode')

    system_messages = {
        'explain': "Erkläre dieses IT-Konzept in einfachen Worten. Verwende Markdown für Überschriften, Listen und Codeblöcke.",
        'quiz': '''Erstelle ein Quiz mit 3 Fragen. Verwende folgendes Format:
1. **Frage:** [Frage]
   <span class="spoiler" onclick="revealSpoiler(this)">**Antwort:** [Antwort]</span>

2. **Frage:** [Frage]
   <span class="spoiler" onclick="revealSpoiler(this)">**Antwort:** [Antwort]</span>

3. **Frage:** [Frage]
   <span class="spoiler" onclick="revealSpoiler(this)">**Antwort:** [Antwort]</span>''',
        'debug': "Hilf bei der Fehlerbehebung. Verwende Markdown für eine klare Darstellung."
    }

    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": system_messages.get(mode, "Du bist ein hilfreicher IT-Assistent.")},
                {"role": "user", "content": prompt}
            ]
        )
        return jsonify({"response": response['choices'][0]['message']['content']})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)