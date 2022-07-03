let functions = [showLeftRock, showLeftPaper, showLeftScissors];

function randomNumber(n) {
    return Math.floor(Math.random() * n);
}


function showRock(){
    document.getElementById('right-rock').style.display = "block";
    document.getElementById('rock').style.display = "none";
    let usersPlay = "rock";
    functions[randomNumber(functions.length)]();
}
function showPaper() {
    document.getElementById('right-paper').style.display = "block";
    document.getElementById('paper').style.display = "none";
    let usersPlay = "paper";
    functions[randomNumber(functions.length)]();
}
function showScissors() {
    document.getElementById('right-scissors').style.display = "block";
    document.getElementById('scissors').style.display = "none";
    let usersPlay = "scissors";
    functions[randomNumber(functions.length)]();
}


function showLeftRock(){
    document.getElementById('left-rock').style.display = "block";
    document.getElementById('rock').style.display = "none";
    let computerPlay = "rock";
}
function showLeftPaper() {
    document.getElementById('left-paper').style.display = "block";
    document.getElementById('paper').style.display = "none";
    let computersPlay = "paper";
}
function showLeftScissors() {
    document.getElementById('left-scissors').style.display = "block";
    document.getElementById('scissors').style.display = "none";
    let computersPlay = "scissors";
}




