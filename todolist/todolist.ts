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
    <button onclick=>Click to fetch tasks</button>
    <form onsubmit=addtask(event)>
        <input id="taskinput" placeholder='Enter your task here'></input>
        <button type="submit">Add task</button>
    </form>
    `
}

function fetchtasks(): void {
    const taskstext = document.getElementById("tasks") as HTMLParagraphElement
    taskstext.innerText = tasks.map(task => task.title).join("\n ")
}

function addtask(event: SubmitEvent): void {
    event.preventDefault()
    const input = document.getElementById("taskinput") as HTMLInputElement
    const title = input.value.trim()

    const newTask: Task = {
        id: tasks.length + 1,
        title: title,
        completed: false
    }
    tasks.push(newTask)

}


render()
fetchtasks()