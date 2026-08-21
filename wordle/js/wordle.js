let words = [];
let word = "";

let lives = 6;

let currentGuess = "";
let currentRow = 0;
let guess = "";


async function loadWords() {
    const response = await fetch("words.txt");
    const text = await response.text();
    words = text.split("\n").map(word => word.trim().toLowerCase());
    
    word = words[Math.floor(Math.random() * words.length)];
    console.log(word);
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
    <p id="livestext">Lives remaining: ${lives}</p>
    
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
    }
    guess = guess.trim().toLowerCase()
    if (words.includes(guess) && guess.length === 5) {
        if (guess === word) {
            document.getElementById("result").innerHTML = "Correct! The word was " + word;
        } else {
            lives--;
            document.getElementById("livestext").innerHTML = "Lives remaining: " + lives;
            if (lives <= 0) {
                document.getElementById("result").innerHTML = "Game over! The word was " + word;
                return;
            };
            const result = document.getElementById("result");
            const used = [false, false, false, false, false];

            result.innerHTML = "Incorrect! Try again.";

            // Reserve correct-position letters first.
            for (let i = 0; i < guess.length; i++) {
                if (guess[i] === word[i]) {
                    used[i] = true;
                }
            }

            // Check the remaining letters against unused positions in the word.
            for (let i = 0; i < guess.length; i++) {
                if (guess[i] === word[i]) {
                    result.innerHTML += `<br> ${guess[i]} ✓`;
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
                        result.innerHTML += `<br> ${guess[i]} -`;
                    } else {
                        result.innerHTML += `<br> ${guess[i]} X`;
                    }
                }
            }
        }
    } else {
        console.log("Invalid guess: " + guess);
        document.getElementById("result").innerHTML = "Invalid guess.";
    }
};

let activetile = 0
document.addEventListener("keydown", function(event) {
    const tiles = document.querySelectorAll(".tile");
    if (/^[a-zA-Z]$/.test(event.key)) {
        const tiles = document.querySelectorAll(".tile");
        tiles[activetile].textContent = event.key;
        if (activetile >= 4) {
            activetile = 0;
        } else {
            activetile++;
        }
    } else if (event.key === "Enter") {
        guess = "";
        for (let i = 0; i < 5; i++) {
            guess += tiles[i].textContent
        }
        checkGuess();
        activetile = 0;
    }
});

loadWords();