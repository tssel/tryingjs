let words = [];
let word = "";
fetch('words.txt') //must be 5 letters long words
    .then(response => response.text())
    .then(data => {
        words = data.split(/\r?\n/).map(word => word.trim().toLowerCase()).filter(word => word.length === 5);
        console.log("Words loaded: " + words.length);

    word = words[Math.floor(Math.random() * words.length)];
    console.log(word); //debugging only
    render();
    });

const root = document.getElementById("app");

function render() {
    root.innerHTML = app();
};

let lives = 6;

function app() {
    return `
    <h1>Wordle</h1>
    ${WordleGame()}
    `
};

function WordleGame() {
    return `
    <p id="livestext">Lives remaining: ${lives}</p>
    <form onsubmit="event.preventDefault(); checkGuess();">
        <input type="text" id="guess" maxlength="5" placeholder="Enter your guess">
        <button type="submit">Submit Guess</button>
    </form>
    <p id="result"></p>
    `
};

function checkGuess() {
    const guess = document.getElementById("guess").value.trim().toLowerCase();
    if (words.includes(guess) && guess.length === 5) {
        if (guess === word) {
            document.getElementById("result").innerHTML = "Correct! The word was " + word;
            document.getElementById("guess").disabled = true;
        } else {
            lives--;
            document.getElementById("livestext").innerHTML = "Lives remaining: " + lives;
            if (lives <= 0) {
                document.getElementById("result").innerHTML = "Game over! The word was " + word;
                document.getElementById("guess").disabled = true;
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


render()
