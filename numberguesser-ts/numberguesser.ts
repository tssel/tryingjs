const thenumber: number = Math.floor(Math.random() * 10) + 1;

const root = document.getElementById('App')
function render(): void {
    if (root) {
        root.innerHTML = app()
    }
}

function app(): string {
    return `
    <h1>Number Guessing Game</h1>
    <form onsubmit="event.preventDefault(); checkguess()">
        <input type=number min=0 max=10 id="userguess" required placeholder=""></input>
        <button>Submit Guess</button>
    </form>
    <p id="result">Enter a number from 1-10</p>
    `
}

function checkguess(): void {
    const input = document.getElementById("userguess") as HTMLInputElement
    const result = document.getElementById("result") as HTMLParagraphElement

    const guess = Number(input.value)

    if (guess === thenumber) {
        result.innerText = "you got it!"
    } else {
        result.innerText = "try another number"
    } 
}

render()