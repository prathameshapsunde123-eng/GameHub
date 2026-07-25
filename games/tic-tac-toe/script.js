let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameMode = "friend";
let gameOver = false;

let xScore = 0;
let oScore = 0;

const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");

const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];


// -------------------------
// MODE SELECTION
// -------------------------
function setMode(mode){

    gameMode = mode;

    document.getElementById("friendBtn").style.backgroundColor = "white";
    document.getElementById("computerBtn").style.backgroundColor = "white";

    if(mode==="friend"){
        document.getElementById("friendBtn").style.backgroundColor="#aeca8f";
    }else{
        document.getElementById("computerBtn").style.backgroundColor="#aeca8f";
    }

    restart();
}


// -------------------------
// CELL CLICK
// -------------------------
cells.forEach((cell,index)=>{

    cell.addEventListener("click",()=>{

        if(board[index]!=="" || gameOver) return;

        playerMove(index);

    });

});


// -------------------------
// PLAYER MOVE
// -------------------------
function playerMove(index){

    board[index]=currentPlayer;
    cells[index].textContent=currentPlayer;

    if(checkWinner(board,currentPlayer)){
        finish(currentPlayer);
        return;
    }

    if(boardFull(board)){
        statusText.textContent="Draw!";
        gameOver=true;
        return;
    }

    if(gameMode==="computer"){

        currentPlayer="O";
        statusText.textContent="Computer Thinking...";

        setTimeout(computerMove,500);

    }else{

        currentPlayer=currentPlayer==="X" ? "O" : "X";
        statusText.textContent="Player "+currentPlayer+" Turn";

    }

}


// -------------------------
// COMPUTER MOVE
// -------------------------
function computerMove(){

    let bestScore=-Infinity;
    let move=-1;

    for(let i=0;i<9;i++){

        if(board[i]==""){

            board[i]="O";

            let score=minimax(board,0,false);

            board[i]="";

            if(score>bestScore){
                bestScore=score;
                move=i;
            }

        }

    }

    board[move]="O";
    cells[move].textContent="O";

    if(checkWinner(board,"O")){
        finish("O");
        return;
    }

    if(boardFull(board)){
        statusText.textContent="Draw!";
        gameOver=true;
        return;
    }

    currentPlayer="X";
    statusText.textContent="Player X Turn";

}


// -------------------------
// MINIMAX
// -------------------------
function minimax(board,depth,isMax){

    if(checkWinner(board,"O")) return 10-depth;
    if(checkWinner(board,"X")) return depth-10;
    if(boardFull(board)) return 0;

    if(isMax){

        let best=-Infinity;

        for(let i=0;i<9;i++){

            if(board[i]==""){

                board[i]="O";

                best=Math.max(best,minimax(board,depth+1,false));

                board[i]="";

            }

        }

        return best;

    }else{

        let best=Infinity;

        for(let i=0;i<9;i++){

            if(board[i]==""){

                board[i]="X";

                best=Math.min(best,minimax(board,depth+1,true));

                board[i]="";

            }

        }

        return best;

    }

}


// -------------------------
// WINNER CHECK
// -------------------------
function checkWinner(board,player){

    return winPatterns.some(pattern=>

        pattern.every(index=>board[index]===player)

    );

}


// -------------------------
// BOARD FULL
// -------------------------
function boardFull(board){

    return !board.includes("");

}


// -------------------------
// FINISH GAME
// -------------------------
function finish(player){

    gameOver=true;

    statusText.textContent=player+" Wins!";

    if(player==="X"){

        xScore++;
        document.getElementById("xScore").textContent=xScore;

    }else{

        oScore++;
        document.getElementById("oScore").textContent=oScore;

    }

}


// -------------------------
// RESTART
// -------------------------
function restart(){

    board=["","","","","","","","",""];

    currentPlayer="X";

    gameOver=false;

    statusText.textContent="Player X Turn";

    cells.forEach(cell=>cell.textContent="");

}