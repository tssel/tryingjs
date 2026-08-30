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
    <div id="habitviewer"></div>
    <input id="habitname">
    <button onclick="addHabit()">Add Habit</button>
    `
}


let habits: habit[] = [
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
]

function fetchHabits(): void {
    const habitviewer = document.getElementById("habitviewer") as HTMLDivElement
    habitviewer.innerHTML = habits
    .map(habit =>`
        <p>${habit.name}</p>
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
    fetchHabits()
}

function completeHabit(habitselected: number): void {
    const today = new Date().toISOString().split("T")[0]
    const completed = habits[habitselected - 1].completed


    habits[habitselected - 1].completed.push(today)
}

fetchHabits()