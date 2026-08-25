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
    <p id="tasks"></p>
    <button onclick=>Click to fetch tasks</button>
    <form onsubmit=addtask(event)>
        <input id="taskinput" placeholder='Enter your task here'></input>
        <button type="submit">Add task</button>
    </form>
    `;
}
function fetchtasks() {
    const taskstext = document.getElementById("tasks");
    taskstext.innerText = tasks.map(task => task.title).join("\n ");
}
function addtask(event) {
    event.preventDefault();
    const input = document.getElementById("taskinput");
    const title = input.value.trim();
    const newTask = {
        id: tasks.length + 1,
        title: title,
        completed: false
    };
    tasks.push(newTask);
}
render();
fetchtasks();
