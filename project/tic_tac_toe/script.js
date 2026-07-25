let boxs = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msg1 = document.querySelector("#msg");
let msgc2 = document.querySelector(".msg-container");
let turn0 = true;

const winpattern =[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

const resetGame = () =>{
    turn0 = true;
    enableboxes();
    msgc2.classList.add("hide");
};

boxs.forEach((boxs) =>{
    boxs.addEventListener("click", ()=>{
        console.log("box is clicked");
        if(turn0){
            boxs.innerText = "X";
            turn0=false;
        }
        else{
            boxs.innerText = "O";
            turn0 = true;
        }
        boxs.disabled = true;

        checkwinner();
    });
});

const disableboxes = ()=>{
    for(let box of boxs){
        box.disabled = true;
    }
}
const enableboxes = ()=>{
    for(let box of boxs){
        box.disabled = false;
        box.innerText ="";
    }
    
}
const showwinner=(winner) => {
    msg1.innerText = `Congratulations, Winner is ${winner} `;
    msgc2.classList.remove("hide");
    disableboxes();
 };
const checkwinner = () =>{
    for(let pattern of winpattern){
            let p1 = boxs[pattern[0]].innerText;
            let p2 = boxs[pattern[1]].innerText;
            let p3 = boxs[pattern[2]].innerText;
    
    if (p1 != "" && p2 != "" && p3 != "") {
        if(p1 === p2 && p2 === p3){
            console.log("winner",p1);
            showwinner(p1);
        }    
     }
    }
};

newbtn.addEventListener("click" , resetGame);
reset.addEventListener("click" , resetGame);
