const passbox = document.getElementById("passbox");
const passbutton = document.getElementById("passbutton");
const resulttext = document.getElementById("resulttext");
const password = "ilovemoney"
const loginform = document.getElementById("loginform")

function checkpassword() {
    event.preventDefault();
    if (passbox.value == password) {
        resulttext.textContent = "Correct password!"
        localStorage.setItem("loggedin","true")
        window.location.href = "theformula.html";
    } else {
        resulttext.textContent = "Incorrect password. Try again!"
    }
};

loginform.addEventListener("submit", checkpassword)
