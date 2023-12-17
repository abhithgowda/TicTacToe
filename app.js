let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-game");
let msgbtn = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let continuebtn=document.querySelector("#continue");
let playerO = true;
let icon=document.querySelector("#icon");
icon.addEventListener("click",()=>{
    document.body.classList.toggle("dark_theme")
    if(document.body.classList.contains("dark_theme")){
        icon.src="moon.png";
        document.body.querySelector(".box").style=backgroundColor="white";
    }
    else{
        icon.src="sun.png";
    }
})
let Ocount=0;
let Xcount=0;
let btnClick=0;
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML=""
    }
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        btnClick++;
        if(btnClick==9  ){
            msg.innerText="No one Wins, Its a Draw ..."
            msgbtn.classList.remove("hide");
        }
        console.log(btnClick);
        if (playerO) {
            box.innerHTML = "O";
            playerO = false;
        } else {
            box.innerHTML = "X";
            playerO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const showWinner = (winner) => {
    msg.innerText = `Congratulations, The Winner is ${winner}\n X-${Xcount}\n O-${Ocount}`
    msgbtn.classList.remove("hide");

}
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                if(pos1==="O"){
                    Ocount++;
                }
                else{
                    Xcount++;
                }
                showWinner(pos1);
            }
        }
    }
};
const resetGame=()=>{
    playerO=true;
    enableBoxes();
    msgbtn.classList.add("hide");
    btnClick=0;
}
const restartGame=()=>{
    playerO=true;
    enableBoxes();
    msgbtn.classList.add("hide");
    Xcount=0;
    Ocount=0;
    btnClick=0;
}
newGamebtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
continuebtn.addEventListener("click",restartGame);