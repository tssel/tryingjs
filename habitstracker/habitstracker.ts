const root = document.getElementById("app") as HTMLDivElement

root.innerHTML = app()
function app(): string {
    return `
    <h1>Habits Tracker</h1>
    `
}