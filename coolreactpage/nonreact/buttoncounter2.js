function render() {
    root.innerHTML = app();
}

const state = new Proxy(
    {buttoncounter: 0},
    {
        set(target,key,value) {
            target[key] = value
            render()
        }
    
});

function app() {
    return `
    <h1>The page</h1>
    ${ButtonArea()}
    ${fruits()}
    `
};

function ButtonArea() {
    return `<div>
    <h2>Button Counter</h2>
    <p>The Button has been pressed ${state.buttoncounter} times.</p>
    <button onclick="state.buttoncounter++">Press Button</button>
    </div>`
};

function fruit(name) {
    return `
    <li>There is a ${name}</li>
    `
};

function fruits(){
    return `
    <h2>List of fruits:</h2>
    <ul>
        ${fruit("apple")}
        ${fruit("banana")}
    `
};

const root = document.getElementById("app");
render()
