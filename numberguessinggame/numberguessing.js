const guessbutton = document.getElementById("guessbutton");
const messagebox = document.getElementById("messagebox");
const usersguess = document.getElementById("usersguess");

const randomnumber = Math.floor(Math.random() * 10);

guessbutton.addEventListener('click', function() {
    console.log("Button got clicked sir")

    let userguess = Number(usersguess.value);

    if (userguess == randomnumber) {
        messagebox.textContent = "You got it!"
    } else {
        messagebox.textContent = "try again!"
    }
});