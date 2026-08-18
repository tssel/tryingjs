const words = ["apple", "grape", "lemon", "peach"] //must be 5 letters long
const word = words[Math.floor(Math.random() * words.length)]

const root = document.getElementById("app");

function render() {
    root.innerHTML = app();
};

function app() {
    return `
    <h1>Wordle</h1>
    <input type="text" id="guess" maxlength="5" placeholder="Enter your guess">
    <button onclick="checkGuess()">Submit Guess</button>
    <p id="result"></p>
    `
};

function checkGuess() {
    const guess = document.getElementById("guess").value.trim().toLowerCase();
    if (words.includes(guess) && guess.length === 5) {
        if (guess === word) {
            document.getElementById("result").innerHTML = "Correct! The word was " + word;
        } else {
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
