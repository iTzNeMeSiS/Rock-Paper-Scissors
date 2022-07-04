let userChoice = ''
let computerChoice = ''

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function showRock() {
  document.getElementById('right-rock').style.display = "block";
  document.getElementById('rock').style.display = "none";
  document.getElementById('paper').style.display = "none";
  document.getElementById('scissors').style.display = "none";
}

function showPaper() {
  document.getElementById('right-paper').style.display = "block";
  document.getElementById('rock').style.display = "none";
  document.getElementById('paper').style.display = "none";
  document.getElementById('scissors').style.display = "none";
}
function showScissors() {
  document.getElementById('right-scissors').style.display = "block";
  document.getElementById('rock').style.display = "none";
  document.getElementById('paper').style.display = "none";
  document.getElementById('scissors').style.display = "none";
}


function showLeftRock(){
  document.getElementById('left-rock').style.display = "block";
  document.getElementById('rock').style.display = "none";
}
function showLeftPaper() {
  document.getElementById('left-paper').style.display = "block";
  document.getElementById('paper').style.display = "none";
}
function showLeftScissors() {
  document.getElementById('left-scissors').style.display = "block";
  document.getElementById('scissors').style.display = "none";
}

function winner() {
  document.getElementById('winner').style.display = "block";
  document.getElementById('winner').innerHTML = "You Won!"
}
function tie() {
  document.getElementById('tie').style.display = "block";
  document.getElementById('tie').innerHTML = "Tie!"
}
function loss() {
  document.getElementById('loser').style.display = "block";
  document.getElementById('loser').innerHTML = "You lost!"
}
function startRock() {
  startAnimation();
  setTimeout(function(){ showRock(); }, 2000);
  setTimeout(function(){ end(); }, 2000);
  setTimeout(function(){ hide(); }, 4000);
}
function startPaper() {
  startAnimation();
  setTimeout(function(){ showPaper(); }, 2000);
  setTimeout(function(){ end(); }, 2000);
  setTimeout(function(){ hide(); }, 4000);
}
function startScissors() {
  startAnimation();
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
  document.getElementById('loser').style.display = "none";
  document.getElementById('tie').style.display = "none";
}
function startAnimation() {
  document.getElementById('rock').style.display = "none";
  document.getElementById('paper').style.display = "none";
  document.getElementById('scissors').style.display = "none";
  document.getElementById('start').style.display = "block";
  document.getElementById('start').style.animation = "spin .5s 3";
  document.getElementById('right-start').style.display = "block";
  document.getElementById('right-start').style.animation = "spin .5s 3";
}


const play = (id) => {
  userChoice = id;
  computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    computerChoice = "rock";
  } else if (computerChoice === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  if (userChoice === "rock" && computerChoice === "scissors") 
  {
    startAnimation();
    setTimeout(function(){ showRock(); }, 2000);
    setTimeout(function(){ showLeftScissors(); }, 2000);
    setTimeout(function(){ end(); }, 2000);
    setTimeout(function(){ winner(); }, 2000);
    setTimeout(function(){ hide(); }, 4000);
  }
  else if (userChoice === "rock" && computerChoice === "paper")
  {
    startAnimation();
    setTimeout(function(){ showRock(); }, 2000);
    setTimeout(function(){ showLeftPaper(); }, 2000);
    setTimeout(function(){ end(); }, 2000);
    setTimeout(function(){ loss(); }, 2000);
    setTimeout(function(){ hide(); }, 4000);
  }
  else if (userChoice === "rock" && computerChoice === "rock")
  {
    startAnimation();
    setTimeout(function(){ showRock(); }, 2000);
    setTimeout(function(){ showLeftRock(); }, 2000);
    setTimeout(function(){ end(); }, 2000);
    setTimeout(function(){ tie(); }, 2000);
    setTimeout(function(){ hide(); }, 4000);
  }
  else if (userChoice === "paper" && computerChoice === "scissors") 
  {
    startAnimation();
    setTimeout(function(){ showPaper(); }, 2000);
    setTimeout(function(){ showLeftScissors(); }, 2000);
    setTimeout(function(){ end(); }, 2000);
    setTimeout(function(){ loss(); }, 2000);
    setTimeout(function(){ hide(); }, 4000);
  }
  else if (userChoice === "paper" && computerChoice === "rock")
  {
    startAnimation();
    setTimeout(function(){ showPaper(); }, 2000);
    setTimeout(function(){ showLeftRock(); }, 2000);
    setTimeout(function(){ end(); }, 2000);
    setTimeout(function(){ winner(); }, 2000);
    setTimeout(function(){ hide(); }, 4000);
  }
  else if (userChoice === "paper" && computerChoice === "paper")
  {
    startAnimation();
    setTimeout(function(){ showPaper(); }, 2000);
    setTimeout(function(){ showLeftPaper(); }, 2000);
    setTimeout(function(){ end(); }, 2000);
    setTimeout(function(){ tie(); }, 2000);
    setTimeout(function(){ hide(); }, 4000);
  }
  else if (userChoice === "scissors" && computerChoice === "paper") 
  {
    startAnimation();
    setTimeout(function(){ showScissors(); }, 2000);
    setTimeout(function(){ showLeftPaper(); }, 2000);
    setTimeout(function(){ end(); }, 2000);
    setTimeout(function(){ winner(); }, 2000);
    setTimeout(function(){ hide(); }, 4000);
  }
  else if (userChoice === "scissors" && computerChoice === "rock")
  {
    startAnimation();
    setTimeout(function(){ showScissors(); }, 2000);
    setTimeout(function(){ showLeftRock(); }, 2000);
    setTimeout(function(){ end(); }, 2000);
    setTimeout(function(){ loss(); }, 2000);
    setTimeout(function(){ hide(); }, 4000);
  }
  else if (userChoice === "scissors" && computerChoice === "scissors")
  {
    startAnimation();
    setTimeout(function(){ showScissors(); }, 2000);
    setTimeout(function(){ showLeftScissors(); }, 2000);
    setTimeout(function(){ end(); }, 2000);
    setTimeout(function(){ tie(); }, 2000);
    setTimeout(function(){ hide(); }, 4000);
  }
};


document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('rock').addEventListener('click', () => {
     play('rock')
          });
});
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('paper').addEventListener('click', () => {
     play('paper')
          });
});
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('scissors').addEventListener('click', () => {
     play('scissors')
          });
});