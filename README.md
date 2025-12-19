# AI Study Assistant  
#### Author: David Mutas 
#### Video: https://youtu.be/SL-C-pSgTeA

---

### Beschreibung:  
Der **AI Study Assistant** ist eine webbasierte Anwendung, die mithilfe von künstlicher Intelligenz (KI) Lernende bei der Vorbereitung auf IT-bezogene Themen unterstützt. Die Anwendung bietet drei Hauptfunktionen:  
1. **Erklärungen**: Verständliche Erklärungen von IT-Konzepten in einfacher Sprache.  
2. **Quiz**: Generierung von Übungsfragen mit versteckten Antworten, die aufgedeckt werden können.  
3. **Debugging-Hilfe**: Unterstützung bei der Fehlerbehebung in Code oder technischen Problemen.  

Die Anwendung nutzt die OpenAI GPT-3.5-Turbo-API, um intelligente und kontextbezogene Antworten zu generieren. Die Benutzeroberfläche ist benutzerfreundlich gestaltet und ermöglicht es Nutzern, Fragen zu stellen, Antworten in Echtzeit zu erhalten und ihre Interaktionshistorie einzusehen.  

---

### Projektstruktur:  
Das Projekt besteht aus folgenden Dateien und Komponenten:  

1. **index.html**:  
   - Die Haupt-HTML-Datei, die die Benutzeroberfläche der Anwendung definiert.  
   - Enthält die Struktur für die Modusauswahl (Erklären, Quiz, Debuggen), das Eingabefeld für Fragen und den Bereich für die Anzeige von Antworten.  
   - Integriert externe Bibliotheken wie **Marked.js** für die Formatierung von Markdown-Texten.  

2. **script.js**:  
   - Enthält die gesamte Client-seitige Logik der Anwendung.  
   - Verarbeitet Benutzerinteraktionen, sendet Anfragen an das Backend und aktualisiert die Benutzeroberfläche dynamisch.  
   - Implementiert Funktionen wie die Modusauswahl, die Anzeige von Antworten und die Verwaltung der Interaktionshistorie.  

3. **style.css**:  
   - Definiert das Design und Layout der Anwendung.  
   - Enthält Stile für Buttons, Eingabefelder, Antwortbereiche und die Historie.  
   - Implementiert spezielle Effekte wie Spoiler (versteckte Antworten im Quiz-Modus).  

4. **app.py**:  
   - Das Backend der Anwendung, implementiert mit Flask.  
   - Verarbeitet Anfragen an die OpenAI-API und gibt formatierte Antworten zurück.  
   - Unterstützt drei Modi (Erklären, Quiz, Debuggen) mit spezifischen Systemnachrichten, um das Verhalten der KI zu steuern.  

5. **.env**:  
   - Speichert die OpenAI API-Key als Umgebungsvariable.  

6. **requirements.txt**:  
   - Listet die Python-Abhängigkeiten auf, die für die Ausführung des Projekts erforderlich sind (Flask, OpenAI, etc.).  

---

### Designentscheidungen:  
- **Benutzerfreundlichkeit**: Die Anwendung wurde so gestaltet, dass sie intuitiv und einfach zu bedienen ist. Die drei Modi sind klar gekennzeichnet, und die Antworten werden in gut lesbarer Form dargestellt.  
- **Markdown-Formatierung**: Antworten werden in Markdown formatiert, um Überschriften, Listen und Codeblöcke klar darzustellen.  
- **Interaktionshistorie**: Die Historie ermöglicht es Benutzern, frühere Fragen und Antworten einzusehen, was das Lernen erleichtert.  
- **Spoiler für Quiz-Antworten**: Im Quiz-Modus sind die Antworten zunächst versteckt, um den Lernenden die Möglichkeit zu geben, selbst nachzudenken.  

---

### Installation und Nutzung:  
1. **Voraussetzungen**:  
   - Python 3.x  
   
2. **Installation**:  
   - Installieren Sie die erforderlichen Abhängigkeiten mit:  
     ```bash
     pip install -r requirements.txt
     ```  

3. **Starten der Anwendung**:  
   - Führen Sie das Backend mit folgendem Befehl aus:  
     ```bash
     python app.py
     ```  
   - Öffnen Sie im Browser die URL `http://localhost:5000`.  

4. **Nutzung**:  
   - Wählen Sie einen Modus (Erklären, Quiz, Debuggen).  
   - Geben Sie Ihre Frage ein und klicken Sie auf "Ask".  
   - Sehen Sie sich die Antwort an und nutzen Sie die Historie, um frühere Interaktionen zu überprüfen.  

---

### Fazit:  
Der **AI Study Assistant** ist ein leistungsstarkes Werkzeug für IT-Studierende, das durch die Nutzung von KI das Lernen effizienter und interaktiver gestaltet. Die Anwendung demonstriert die Integration moderner Technologien wie OpenAI GPT-3.5 und Flask in eine benutzerfreundliche Webanwendung.  

Für Fragen oder Feedback kontaktieren Sie mich gerne unter [Ihre E-Mail-Adresse].  
