let words = [];
let word = "";

let lives = 6;

let guess = "";
let gameover = false;

async function loadWords() {
    const response = await fetch("words.txt");
    const text = await response.text();
    words = text.split("\n").map(word => word.trim().toLowerCase()).filter(word => word !== "" && word.length === 5);
    word = words[Math.floor(Math.random() * words.length)];
    //console.log('word is: '+ word);
    render();
}


const root = document.getElementById("app");
function render() {
    root.innerHTML = app();
};


function app() {
    
    return `
    <h1>Wordle</h1>
    ${WordleGame()}
    `
};

function WordleGame() {
    return `
    
    <div class="row">
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
    </div>
    <div class="row">
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
    </div>
    <div class="row">
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
    </div>
    <div class="row">
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
    </div>
    <div class="row">
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
    </div>
    <div class="row">
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
    </div>

    <p id="result"></p>
    `
};

function checkGuess() {
    if (lives <= 0) {
        return;
    } else if (gameover === true) {
        return;
    }
    guess = guess.trim().toLowerCase()
    if (words.includes(guess) && guess.length === 5) {
        const row = document.querySelectorAll(".row");
        const tiles = row[activerow].querySelectorAll(".tile");
        if (guess === word) {
            document.getElementById("result").innerHTML = "Correct! The word was " + word.toUpperCase();
            for (let i = 0; i < guess.length; i++) {
                tiles[i].style.backgroundColor = 'green'
            }
            gameover = true;
        } else {
            lives--;

            const result = document.getElementById("result");
            const used = [false, false, false, false, false];

            result.innerHTML = "Incorrect! Try again.";

            // Reserve correct position letters
            for (let i = 0; i < guess.length; i++) {
                if (guess[i] === word[i]) {
                    used[i] = true;
                }
            }

            // Check the remaining letters against unused positions in the word
            for (let i = 0; i < guess.length; i++) {
                if (guess[i] === word[i]) {
                    tiles[i].style.backgroundColor = 'green'
                } else {
                    let found = false;

                    for (let j = 0; j < word.length; j++) {
                        if (guess[i] === word[j] && used[j] === false) {
                            found = true;
                            used[j] = true;
                            break;
                        }
                    }

                    if (found) {
                        tiles[i].style.backgroundColor = 'yellow'
                    } else {
                        tiles[i].style.backgroundColor = 'red'
                    }
                }
            }
            if (lives <= 0) {
                document.getElementById("result").innerHTML = "Game over! The word was " + word;
                gameover = true;
                return;
            };
            activetile = 0;
            activerow++;
        }
    } else {
        console.log("Invalid guess: " + guess);
        document.getElementById("result").innerHTML = "Invalid guess.";
    }
};

let activerow = 0;
let activetile = 0
document.addEventListener("keydown", function(event) {
    if (gameover === true) {
        return;
    }

    const row = document.querySelectorAll(".row");
    const tiles = row[activerow].querySelectorAll(".tile");
    
    if (/^[a-zA-Z]$/.test(event.key)) {
        if (activetile >= 5) {
            document.getElementById("result").innerHTML = "You can only enter 5 letters.";
            return;
        }
        tiles[activetile].textContent = event.key.toUpperCase();
        activetile++;
        
    } else if (event.key === "Enter") {
        guess = "";
        for (let i = 0; i < 5; i++) {
            guess += tiles[i].textContent
        }
        checkGuess();
    } else if (event.key === "Backspace") {
        if (activetile > 0) {
            activetile--;
            tiles[activetile].textContent = ''
        }
    }
});

loadWords();