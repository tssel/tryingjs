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
    if (habits.length === 0) {
        console.log("Habits array not found");
    }
    console.log("Loaded Habits from local storage");
}
else {
    habits = [
        {
            id: 1,
            name: "Eat healthy",
            completed: ["2026-08-29", "2026-08-22"]
        }
    ];
    console.log("No Habits found in local storage");
}
function fetchHabits() {
    const habitviewer = document.getElementById("habitviewer");
    habitviewer.innerHTML = habits
        .map(habit => `
        <p class="habitName">${habit.name} - ${habit.completed.join(", ")}</p>
        <button onclick="completeHabit(${habit.id})">Done</button>
        <button onclick="deleteHabit(${habit.id})">Delete</button>
        <div class="heatmap">
            ${createHeatmap(habit)}
        </div>
        `).join("");
}
function addHabit() {
    const input = document.getElementById("habitname");
    const habitname = input.value.trim();
    if (habitname == "")
        return;
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
//trying this out
function createHeatmap(habit) {
    const days = [];
    for (let i = 34; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dateString = date.toISOString().split("T")[0];
        const completed = habit.completed.includes(dateString);
        days.push(`
      <div 
        class="heatmap-day ${completed ? "completed" : ""}"
        title="${dateString}"
      ></div>
    `);
    }
    return days.join("");
}
fetchHabits();
