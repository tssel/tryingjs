const passbox = document.getElementById("passbox");
const passbutton = document.getElementById("passbutton");
const resulttext = document.getElementById("resulttext");
const password = "password"


passbutton.addEventListener("click", function() {
    if (passbox.value == password) {
        resulttext.textContent = "Correct password!"
    } else {
        resulttext.textContent = "Incorrect password. Try again!"
    }
});