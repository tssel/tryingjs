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
    <h1>To Do List
    <form onsubmit="addtask(event)">
        <input id="taskinput" placeholder='Enter your task here'></input>
        <button type="submit">Add task</button>
    </form>
    <p id="tasks"></p>
    `
}

function fetchtasks(): void {
    const taskstext = document.getElementById("tasks") as HTMLParagraphElement
    taskstext.innerHTML = tasks.map(task => `
        <div>
            <input type="checkbox" onchange ${task.completed ? "checked":""}>
            <span>${task.title}</span>
        </div>

    `).join("\n ")
}

function addtask(event: SubmitEvent): void {
    event.preventDefault()
    const input = document.getElementById("taskinput") as HTMLInputElement
    const title = input.value.trim()
    if (title == "") {
        return;
    }
    const newTask: Task = {
        id: tasks.length + 1,
        title: title,
        completed: false
    }
    tasks.push(newTask)
    input.value = ""
    fetchtasks()
}


render()
fetchtasks()