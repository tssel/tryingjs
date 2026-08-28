"use strict";
let tasks = [
    {
        id: 1,
        title: 'Buy Milk',
        completed: false,
    }
];
const root = document.getElementById("app");
function render() {
    root.innerHTML = app();
}
function app() {
    return `
    <form onsubmit="addtask(event)">
        <input id="taskinput" placeholder='Enter your task here'></input>
        <button type="submit">Add task</button>
    </form>
    <p id="tasks"></p>
    `;
}
function fetchtasks() {
    const taskstext = document.getElementById("tasks");
    taskstext.innerHTML = tasks.map(task => `
        <div>
            <input type="checkbox" onchange ${task.completed ? "checked" : ""}>
            <span ${task.completed ? "text-decoration: line-through" : ""}>${task.title}</span>
        </div>

    `).join("\n ");
}
function addtask(event) {
    event.preventDefault();
    const input = document.getElementById("taskinput");
    const title = input.value.trim();
    if (title == "") {
        return;
    }
    const newTask = {
        id: tasks.length + 1,
        title: title,
        completed: false
    };
    tasks.push(newTask);
    input.value = "";
    fetchtasks();
}
render();
fetchtasks();
