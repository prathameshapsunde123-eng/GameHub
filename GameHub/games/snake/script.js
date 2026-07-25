const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const box = 20;
const rows = canvas.width / box;

let snake;
let food;
let score;
let direction;
let game;
let paused = false;

const scoreText = document.getElementById("score");
const highScoreText = document.getElementById("highScore");

let highScore = localStorage.getItem("snakeHigh") || 0;
highScoreText.innerHTML = highScore;

function initialize(){

snake = [
    {x:9,y:9}
];

food = randomFood();

score = 0;
direction = "RIGHT";

scoreText.innerHTML = score;

}

initialize();

function randomFood(){

return{

x:Math.floor(Math.random()*rows),

y:Math.floor(Math.random()*rows)

};

}

document.addEventListener("keydown",changeDirection);

function changeDirection(e){

const key = e.key.toLowerCase();

if((key==="arrowleft"||key==="a") && direction!="RIGHT")
direction="LEFT";

if((key==="arrowup"||key==="w") && direction!="DOWN")
direction="UP";

if((key==="arrowright"||key==="d") && direction!="LEFT")
direction="RIGHT";

if((key==="arrowdown"||key==="s") && direction!="UP")
direction="DOWN";

}

function draw(){

if(paused) return;

ctx.fillStyle="#111";
ctx.fillRect(0,0,400,400);

ctx.fillStyle="red";
ctx.fillRect(food.x*box,food.y*box,box,box);

for(let i=0;i<snake.length;i++){

ctx.fillStyle=i==0?"lime":"green";

ctx.fillRect(snake[i].x*box,snake[i].y*box,box,box);

}

let head={...snake[0]};

if(direction=="LEFT") head.x--;

if(direction=="RIGHT") head.x++;

if(direction=="UP") head.y--;

if(direction=="DOWN") head.y++;

if(

head.x<0||

head.y<0||

head.x>=rows||

head.y>=rows||

collision(head,snake)

){

clearInterval(game);

alert("Game Over!");

return;

}

if(head.x==food.x && head.y==food.y){

score++;

scoreText.innerHTML=score;

food=randomFood();

}else{

snake.pop();

}

snake.unshift(head);

if(score>highScore){

highScore=score;

localStorage.setItem("snakeHigh",highScore);

highScoreText.innerHTML=highScore;

}

}

function collision(head,array){

for(let i=0;i<array.length;i++){

if(head.x==array[i].x && head.y==array[i].y)

return true;

}

return false;

}

function startGame(){

clearInterval(game);

game=setInterval(draw,120);

}

function pauseGame(){

paused=!paused;

}

function restartGame(){

clearInterval(game);

initialize();

startGame();

}