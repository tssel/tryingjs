"use strict";
const root = document.getElementById("app");
root.innerHTML = app();
function app() {
    return `
    <h1>Habits Tracker</h1>
    <button onclick="saveHabits()">Save Habits</button>
    <div id="habitviewer"></div>
    <input id="habitname">
    <button onclick="addHabit()">Add Habit</button>
    `;
}
const storedHabits = localStorage.getItem("habits");
let habits;
if (storedHabits) {
    habits = JSON.parse(storedHabits);
    console.log("Loaded Habits from local storage");
}
else {
    habits = [
        {
            id: 1,
            name: "go to gym",
            completed: ["2026-08-29"]
        }
    ];
    console.log("No Habits found in local storage");
}
function fetchHabits() {
    const habitviewer = document.getElementById("habitviewer");
    habitviewer.innerHTML = habits
        .map(habit => `
        <p>${habit.name} - ${habit.completed.join(", ")}</p>
        <button onclick="completeHabit(${habit.id})">Done</button>
        <button onclick="deleteHabit(${habit.id})">Delete</button>
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
    saveHabits();
    fetchHabits();
}
function completeHabit(habitselected) {
    const index = habits.findIndex(habit => habit.id === habitselected);
    if (index == -1)
        return;
    const today = new Date().toISOString().split("T")[0];
    const completed = habits[index].completed;
    if (completed.includes(today)) {
        completed.splice(completed.indexOf(today), 1);
    }
    else {
        completed.push(today);
    }
    saveHabits();
    fetchHabits();
}
function deleteHabit(habitselected) {
    const index = habits.findIndex(habit => habit.id === habitselected);
    habits.splice(index, 1);
    saveHabits();
    fetchHabits();
}
function saveHabits() {
    localStorage.setItem("habits", JSON.stringify(habits));
}
fetchHabits();
