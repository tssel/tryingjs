const formulatext = document.getElementById("krabbypattyformulatext");
const logoutbutton = document.getElementById("logoutbutton")

if (localStorage.getItem("loggedin")=== "true"){
    formulatext.textContent = `•	Top Bun (with sesame seeds)
    •	Underhand Patty (vegetable or beef patty)
    •	Fresh Lettuce
    •	Crispy Pickles
    •	Sliced Tomatoes
    •	Sea Cheese (American cheese)
    •	Chopped Onions
    •	Ketchup & Mustard
    •	Secret Sauce (a blend of thousand island dressing, a dash of pickle juice, and a pinch of love)
    •	Bottom Bun`;
} else {
    window.location.href = "login.html"
};

logoutbutton.addEventListener("click",function(){
    localStorage.setItem("loggedin","false")
    window.location.href = "login.html"
});
