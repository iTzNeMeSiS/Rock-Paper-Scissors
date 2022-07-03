function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let functions = [showLeftRock, showLeftPaper, showLeftScissors];

function randomNumber(n) {
    return Math.floor(Math.random() * 3);
}
function tie() {
    if (usersPlay == computerPlay) {
        document.getElementById('winner') = "Tie!"
    }
}

globalThis.computerPlay = functions[randomNumber(functions.length)]();

function showRock(){
    document.getElementById('right-rock').style.display = "block";
    document.getElementById('rock').style.display = "none";
    document.getElementById('paper').style.display = "none";
    document.getElementById('scissors').style.display = "none";
    functions[randomNumber(functions.length)]();
    globalThis.usersPlay = "rock";
    return "rock";
}

function showPaper() {
    document.getElementById('right-paper').style.display = "block";
    document.getElementById('rock').style.display = "none";
    document.getElementById('paper').style.display = "none";
    document.getElementById('scissors').style.display = "none";
    functions[randomNumber(functions.length)]();
    globalThis.usersPlay = "paper";
    return "paper";
}
function showScissors() {
    document.getElementById('right-scissors').style.display = "block";
    document.getElementById('rock').style.display = "none";
    document.getElementById('paper').style.display = "none";
    document.getElementById('scissors').style.display = "none";
    functions[randomNumber(functions.length)]();
    globalThis.usersPlay = "scissors";
    return "scissors";
}


function showLeftRock(){
    document.getElementById('left-rock').style.display = "block";
    document.getElementById('rock').style.display = "none";
    return "rock";
}
function showLeftPaper() {
    document.getElementById('left-paper').style.display = "block";
    document.getElementById('paper').style.display = "none";
    return "paper";
}
function showLeftScissors() {
    document.getElementById('left-scissors').style.display = "block";
    document.getElementById('scissors').style.display = "none";
    return "scissors";
}

function startRock() {
    play();
    setTimeout(function(){ showRock(); }, 2000);
    setTimeout(function(){ end(); }, 2000);
    setTimeout(function(){ tie(); }, 2000);
    setTimeout(function(){ hide(); }, 4000);
}
function startPaper() {
    play();
    setTimeout(function(){ showPaper(); }, 2000);
    setTimeout(function(){ end(); }, 2000);
    setTimeout(function(){ hide(); }, 4000);
}
function startScissors() {
    play();
    setTimeout(function(){ showScissors(); }, 2000);
    setTimeout(function(){ end(); }, 2000);
    setTimeout(function(){ hide(); }, 4000);
}

function end() {
    document.getElementById('start').style.display = "none";
    document.getElementById('right-start').style.display = "none";
}
function hide() {
    document.getElementById('right-rock').style.display = "none";
    document.getElementById('right-paper').style.display = "none";
    document.getElementById('right-scissors').style.display = "none";
    document.getElementById('left-rock').style.display = "none";
    document.getElementById('left-paper').style.display = "none";
    document.getElementById('left-scissors').style.display = "none";
    document.getElementById('rock').style.display = "block";
    document.getElementById('paper').style.display = "block";
    document.getElementById('scissors').style.display = "block";
    document.getElementById('winner').style.display = "none";
}
function play() {
    document.getElementById('rock').style.display = "none";
    document.getElementById('paper').style.display = "none";
    document.getElementById('scissors').style.display = "none";
    document.getElementById('start').style.display = "block";
    document.getElementById('start').style.animation = "spin .5s 3";
    document.getElementById('right-start').style.display = "block";
    document.getElementById('right-start').style.animation = "spin .5s 3";
}