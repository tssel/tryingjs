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
        completed: []
    },
    {
        id: 2,
        name: "Eat healthy",
        completed: []
    }
];
function fetchHabits() {
    const habitviewer = document.getElementById("habitviewer");
    habitviewer.innerHTML = habits
        .map(habit => `
        <p>${habit.name}</p>
        <button onclick="completeHabit(${habit.id})">Done</button>
        `).join("");
}
function addHabit() {
    const input = document.getElementById("habitname");
    const habitname = input.value.trim();
    const newHabit = {
        id: habits.length + 1,
        name: habitname,
        completed: []
    };
    habits.push(newHabit);
    input.value = "";
    fetchHabits();
}
function completeHabit(habitselected) {
    const today = new Date().toISOString().split("T")[0];
    const completed = habits[habitselected - 1].completed;
    habits[habitselected - 1].completed.push(today);
}
fetchHabits();
