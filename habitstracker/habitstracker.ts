type habit = {
    id: number,
    name: string,
    completed: string[]
}

const root = document.getElementById("app") as HTMLDivElement
root.innerHTML = app()

function app(): string {
    return `
    <h1>Habits Tracker</h1>
    <button onclick="saveHabits()">Save Habits</button>
    <div id="habitviewer"></div>
    <input id="habitname">
    <button onclick="addHabit()">Add Habit</button>
    `
}

const storedHabits = localStorage.getItem("habits")

let habits: habit[]

if (storedHabits) {
    habits = JSON.parse(storedHabits)
} else {
    habits = [
        {
            id: 1,
            name: "go to gym",
            completed: ["2026-08-29"]
        }
    ]
}


function fetchHabits(): void {
    const habitviewer = document.getElementById("habitviewer") as HTMLDivElement
    habitviewer.innerHTML = habits
    .map(habit =>`
        <p>${habit.name} - ${habit.completed.join(", ")}</p>
        <button onclick="completeHabit(${habit.id})">Done</button>
        `
    ).join("")
}

function addHabit() {
    const input = document.getElementById("habitname") as HTMLInputElement
    const habitname = input.value.trim()
    const newHabit: habit = {
        id: habits.length + 1,
        name: habitname,
        completed: []
    }
    habits.push(newHabit)
    input.value = ""
    saveHabits()
    fetchHabits()
}

function completeHabit(habitselected: number): void {
    const today = new Date().toISOString().split("T")[0]
    const completed = habits[habitselected - 1].completed

    if (completed.includes(today)) {
        completed.splice(completed.indexOf(today), 1)
    } else {
        completed.push(today)
    }
    fetchHabits()
}

function saveHabits() {
    localStorage.setItem("habits",JSON.stringify(habits))
}

fetchHabits()