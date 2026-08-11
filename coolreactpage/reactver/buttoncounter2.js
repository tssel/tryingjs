function app() {
    return `
    <h1>The page</h1>
    `
};

function fruits(){
    return `
    <h2>List of fruits:</h2>
    `
};

const root = document.getElementById("app");
root.innerHTML = app();