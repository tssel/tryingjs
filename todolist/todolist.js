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
    <button onclick=fetchtasks()>Click to fetch tasks</button>
    <form onsubmit=addtask()>
        <input placeholder='Enter your task here'></input>
    </form>
    `;
}
function fetchtasks() {
    const taskstext = document.getElementById("tasks");
    taskstext.textContent = tasks.map(task => task.title).join(", ");
}
function addtask() {
}
render();
