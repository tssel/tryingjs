"use strict";
const root = document.getElementById("app");
root.innerHTML = app();
function app() {
    return `
    <h1>Habits Tracker</h1>
    <div id="habitviewer"></div>
    <input id="habitname">
    <button onclick="addHabit()">Add Habit</button>
    `;
}
let habits = [
    {
        id: 1,
        name: "Go to gym",
        completed: false
    },
    {
        id: 2,
        name: "Eat healthy",
        completed: true
    }
];
function fetchHabits() {
    const habitviewer = document.getElementById("habitviewer");
    habitviewer.innerHTML = habits
        .map(habit => `
        <p>${habit.name} - ${habit.completed ? "not yet completed" : "completed"}</p>
        `).join("");
}
function addHabit() {
    const input = document.getElementById("habitname");
    const habitname = input.value.trim();
    const newHabit = {
        id: habits.length + 1,
        name: habitname,
        completed: false
    };
    habits.push(newHabit);
    input.value = "";
    fetchHabits();
}
fetchHabits();
