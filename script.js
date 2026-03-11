// --- GRAMMAR DATA ---
const grammarData = [
    { 
        title: "Passiv", 
        desc: "The Passive Voice focuses on the action being done rather than who is doing it. It is formed using 'werden' + the Past Participle.", 
        ex: "Das Auto wird von dem Mechaniker repariert. (The car is being repaired by the mechanic.)" 
    },
    { 
        title: "Relativsätze", 
        desc: "Relative clauses provide more information about a noun. The relative pronoun usually matches the gender of the noun but takes the case of its role in the clause.", 
        ex: "Das ist die Frau, die ich gestern gesehen habe. (That is the woman whom I saw yesterday.)" 
    },
    { 
        title: "Akkusativ", 
        desc: "The Accusative case is for the direct object. Only the masculine articles change (der becomes den, ein becomes einen).", 
        ex: "Ich habe einen Hund. (I have a dog.)" 
    },
    { 
        title: "Dativ", 
        desc: "The Dative case is used for indirect objects (to whom/for whom) and after specific prepositions like 'mit', 'bei', and 'nach'.", 
        ex: "Ich helfe dem Kind. (I am helping the child.)" 
    }
];

// --- LOGIC ---
function initGrammar() {
    const container = document.getElementById('grammar-tiles');
    container.innerHTML = '';

    grammarData.forEach((item) => {
        const btn = document.createElement('button');
        btn.className = 'tile';
        btn.innerText = item.title;
        
        btn.onclick = () => {
            // UI Update: Active Button
            document.querySelectorAll('.tile').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // UI Update: Content
            document.getElementById('g-title').innerText = item.title;
            document.getElementById('g-desc').innerText = item.desc;
            document.getElementById('g-ex').innerText = "Beispiel: " + item.ex;
        };
        
        container.appendChild(btn);
    });

    // Load first topic by default
    if (container.firstChild) container.firstChild.click();
}

// Start the app
initGrammar();
