type habit = {
    id: number,
    name: string,
    completed: boolean
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
        completed: false
    },
    {
        id: 2,
        name: "Eat healthy",
        completed: true
    }
]

function fetchHabits(): void {
    const habitviewer = document.getElementById("habitviewer") as HTMLDivElement
    habitviewer.innerHTML = habits
    .map(habit => `
        <p>${habit.name} - ${habit.completed ? "not yet completed" : "completed"}</p>
        `
    ).join("")
}

function addHabit() {
    const input = document.getElementById("habitname") as HTMLInputElement
    const habitname = input.value.trim()
    const newHabit: habit = {
        id: habits.length + 1,
        name: habitname,
        completed: false
    }
    habits.push(newHabit)
    input.value = ""
    fetchHabits()
}

fetchHabits()