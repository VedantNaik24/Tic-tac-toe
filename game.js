let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetBtn");
let container  = document.querySelector(".container");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".winnerMessage");
let newGameBtn = document.querySelector(".newGame");

// container.classList.add("hide");
let turn = true;

const winningPattern = [[0,1,2],
                        [3,4,5],
                        [6,7,8],
                        [0,3,6],
                        [1,4,7],
                        [2,5,8],
                        [0,4,8],
                        [2,4,6]]


boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText = "X";
            turn = false;
            box.disabled = true;
        }
        else{
            box.classList.add("greenColor");
            box.innerText = "0";
            turn = true;
            box.disabled = true;
        }
        checkWinner();
    })
})
const resetGame = () =>{
    turn = true;
    enableBoxes();
}
const disableBoxes = () =>{
    for (box of boxes){
        box.disabled = true;
    }
}
const enableBoxes  = () => {
    for (box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
function showWinner(winner){  
    msg.innerText = `Congratulations, The winner is ${winner} `;   
    msgContainer.classList.remove("hide");
    disableBoxes();
}
let newGame = () =>{
    resetGame();
    msgContainer.classList.add("hide");
}
resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",newGame);
const checkWinner = () =>{
    for(let pattern of winningPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != ""){

            if (pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
        }
    }
}
