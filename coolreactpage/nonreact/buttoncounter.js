const counterbutton = document.getElementById("counterbutton");
const countertext = document.getElementById("countertext");

let counter = 0;

counterbutton.addEventListener("click", function() {
    counter++
    countertext.textContent = `Button has been pressed ${counter} times`
});
