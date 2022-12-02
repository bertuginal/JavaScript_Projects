const word_el = document.getElementById('word');
const popup = document.getElementById('popup-container');
const successMessage_el = document.getElementById('success-message');
const wrongMessage_el = document.getElementById('wrong-message');
const wrongLetters_el = document.getElementById('wrong-letters');
const trueWord = document.getElementById('true-word');
const items = document.querySelectorAll('.item');
const remessage = document.getElementById('message');
const playAgainBtn = document.getElementById('play-again');
const changeWordBtn = document.getElementById('change-word');


const correctLetters = [];
const wrongLetters = [];
let selectedWord = getRandomWord();

function getRandomWord() {
    const words = ["javascript", "python", "html", "css", "computer", "java", "programmer", "frontend", "backend"];
    return words[Math.floor(Math.random() * words.length)];
}

function displayWord() {    
    word_el.innerHTML = `
        ${selectedWord.split('').map(letter => `
            <div class="letter">
                ${correctLetters.includes(letter) ? letter: ''}
            </div>
        `).join('')}    
    `;

    const w = word_el.innerText.replace(/\n/g,'');
    if (w === selectedWord) {
        popup.style.display = 'flex';
        successMessage_el.innerText = '**Tebrikler**';
        trueWord.innerText = 'Kelimeniz: ' + selectedWord;
        wrongMessage_el.innerText = '';
    }
}

function updateWrongLetters() {
    wrongLetters_el.innerHTML = `
        ${wrongLetters.length > 0 ?'<h3>Hatalı harfler</h3>' : ''}
        ${wrongLetters.map(letter => `<span>${letter}<span>`)}
    `;

    items.forEach((item, index) => {
        const errorCount = wrongLetters.length;

        if (index<errorCount) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })

    if(wrongLetters.length === items.length) {
        popup.style.display = 'flex';
        successMessage_el.innerText = '';
        wrongMessage_el.innerText = '**Kaybettiniz**';
        trueWord.innerText = 'Kelimeniz : ' + selectedWord;
    }
}

function displayMessage() {
    remessage.classList.add('show');

    setTimeout(function() {
        remessage.classList.remove('show');
    }, 2000);
}

playAgainBtn.addEventListener('click', function() {
    correctLetters.splice(0);
    wrongLetters.splice(0);
    selectedWord = getRandomWord();
    displayWord();
    updateWrongLetters();

    popup.style.display = 'none';
});

changeWordBtn.addEventListener('click', function() {
    correctLetters.splice(0);
    wrongLetters.splice(0);
    selectedWord = getRandomWord();
    displayWord();
    updateWrongLetters();
});

window.addEventListener('keydown', function(e) {
    if(e.keyCode >=65 && e.keyCode <=90 || e.keyCode == 220 || e.keyCode == 219 || e.keyCode == 222 || e.keyCode == 191 || e.keyCode == 221 || e.keyCode == 186) {        
        const letter = e.key;

        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWord();
            } else {
                displayMessage();
               
            }
        } else {
            if(!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
                updateWrongLetters();
            }else {
                displayMessage();
            }
        }
    }
});

displayWord()
