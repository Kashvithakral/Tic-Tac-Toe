let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");

let msgContainer = document.querySelector(".msg");
let turnO =  true;
let count = 0;
let winPatterns = [
    [0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];



boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turnO == true){
         box.innerText = "X";
        turnO = false;
        }
        else{
             box.innerText = "O";
        turnO = true;
        }
        box.disabled = true;
count++;

 let isWinner = checkWinner();

 
  if (count === 9 && !isWinner) {
      gameDraw();
    }
       
        
    });
})



const enablebtn = ()=>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const disablebtn = ()=>{
    for (let box of boxes){
        box.disabled = true;
    }
};
const checkWinner = ()=>{
    for(let pattern of winPatterns){
let pos1 = boxes[pattern[0]].innerText;
let pos2 = boxes[pattern[1]].innerText;
let pos3 = boxes[pattern[2]].innerText;


if (pos1 != ""&&pos2 != ""&&pos3 != ""){
    if(pos1==pos2 && pos2 ==pos3){
        disablebtn();
          msgContainer.classList.remove("hide");
       document.querySelector("#msg").innerText = `Congratulations! Winner : ${pos1}`; 
       reset.innerText = ("New Game")
    }
}
    }

};


const gameDraw = () => {
 document.querySelector("#msg").innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const resetGame = ()=>{
   enablebtn();
    msgContainer.classList.add("hide");
reset.innerText = ("Reset Game")
count = 0;
};

reset.addEventListener("click",resetGame);