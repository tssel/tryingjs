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
    const guess = document.getElementById("guess").value;
    if (guess === word) {
        document.getElementById("result").innerHTML = "Correct! The word was " + word;
    } else {
        document.getElementById("result").innerHTML = "Incorrect! Try again.";
        for (let i = 0; i < guess.length; i++) {
            if (guess[i] === word[i]) {
                document.getElementById("result").innerHTML += `<br> ${guess[i]} ✓`;
            } else if (word.includes(guess[i])) {
                document.getElementById("result").innerHTML += `<br> ${guess[i]} -`;
            } else {
                document.getElementById("result").innerHTML += `<br> ${guess[i]} X`;
            }
        }
    }
};


render()