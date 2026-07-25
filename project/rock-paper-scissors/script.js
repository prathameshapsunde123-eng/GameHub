let userscore =0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const us = document.querySelector("#us");
const cs = document.querySelector("#cs");

const showWinner = (userwin)=>{
    if(userwin){
        console.log("User win");
        msg.innerText = "You are Winner 🏆";
        userscore++;
        us.innerText = userscore;
    }
    else{
        console.log("computer win");
        msg.innerText = "Computer are winner";
        computerscore++;
        cs.innerText = computerscore;
    }
    
}
const drawgame =()=>{
    console.log("game was draw");
    msg.innerText = "Game was Draw";
}
const gencomputerchoice = () =>{
    const options = ["rock","paper","scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

const playgame = (userchoice) =>{
        console.log("user choice",userchoice);

        const computerCh = gencomputerchoice();
        console.log("computer choice",computerCh);

        if(computerCh===userchoice){
            drawgame();
        }
        else{
            let userwin = true;
            if(userchoice==="rock"){
                if(computerCh==="paper"){
                    userwin = false;
                }
                else{
                    userwin = true;
                }
            }

            else if(userchoice==="paper"){
                if(computerCh==="rock"){
                    userwin = true;
                }
                else{
                    userwin = false;
                }
            }
            else{
                if(computerCh==="rock"){
                    userwin = false;
                }
                else{
                    userwin = true;
                }
            }
            showWinner(userwin);
        }

};
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});