let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

function play(player){

const computer =
choices[Math.floor(Math.random()*3)];

document.getElementById("playerChoice").innerHTML =
"Player : " + emoji(player);

document.getElementById("computerChoice").innerHTML =
"Computer : " + emoji(computer);

let winner="";

if(player===computer){

winner="Draw 🤝";

}

else if(

(player==="rock" && computer==="scissors") ||

(player==="paper" && computer==="rock") ||

(player==="scissors" && computer==="paper")

){

winner="You Win 🎉";

playerScore++;

}

else{

winner="Computer Wins 💻";

computerScore++;

}

document.getElementById("winner").innerHTML=winner;

document.getElementById("playerScore").innerHTML=playerScore;

document.getElementById("computerScore").innerHTML=computerScore;

localStorage.setItem("rpsPlayer",playerScore);
localStorage.setItem("rpsComputer",computerScore);

}

function emoji(choice){

if(choice==="rock") return "✊ Stone";

if(choice==="paper") return "✋ Paper";

return "✌️ Scissors";

}

window.onload=()=>{

playerScore=parseInt(localStorage.getItem("rpsPlayer"))||0;
computerScore=parseInt(localStorage.getItem("rpsComputer"))||0;

document.getElementById("playerScore").innerHTML=playerScore;
document.getElementById("computerScore").innerHTML=computerScore;

}

function resetGame(){

playerScore=0;
computerScore=0;

localStorage.removeItem("rpsPlayer");
localStorage.removeItem("rpsComputer");

document.getElementById("playerScore").innerHTML=0;
document.getElementById("computerScore").innerHTML=0;

document.getElementById("winner").innerHTML="Choose your move!";
document.getElementById("playerChoice").innerHTML="Player :";
document.getElementById("computerChoice").innerHTML="Computer :";

}