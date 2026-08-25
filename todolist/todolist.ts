interface Task {
    id: number;
    title: string;
    completed: boolean;

}

let tasks: Task[] = [
    {
        id: 1,
        title: 'Buy Milk',
        completed: false,
    }
]

const root = document.getElementById("app") as HTMLDivElement
function render(): void {
    root.innerHTML = app()
}

function app(): string {
    return `
    <p id="tasks"></p>
    <button onclick=fetchtasks()>Click to fetch tasks</button>
    <form onsubmit=addtask()>
        <input placeholder='Enter your task here'></input>
    </form>
    `
}

function fetchtasks(): void {
    const taskstext = document.getElementById("tasks") as HTMLParagraphElement
    taskstext.textContent = tasks.map(task => task.title).join(", ")
}

function addtask(): void {
    
}

render()