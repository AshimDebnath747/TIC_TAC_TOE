let boxes = document.querySelectorAll(".box");
let state = document.querySelector(".state");
let reset = document.querySelector(".reset");
let warn = document.querySelector(".reset_warning"); 
const winPatters = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];
let turnX = true;
state.innerHTML = "player 1's turn";
boxes.forEach((box)=>{
   box.addEventListener("click", ()=>{
       if(turnX){
        box.innerHTML = "X";
        turnX = false;
        state.innerHTML = "player 2's turn";
       }
       else if (turnX == false){
        box.innerHTML = "O";
        turnX = true;
        state.innerHTML = "player 1's turn";
       }
       box.disabled = true;  
       winner();
   });
});

function winner(){
    for(let pattern of winPatters){
       let val1 = boxes[pattern[0]].innerHTML;
       let val2 = boxes[pattern[1]].innerHTML;
       let val3 = boxes[pattern[2]].innerHTML;
       if(val1 == "X" &&  val2 == "X" && val3 == "X"){
         console.log("win");
         state.innerHTML = "player 1 won";
         turnX = undefined;
         warning();
       }
       else if(val1 == "O" &&  val2 == "O" && val3 == "O"){
        console.log(" win");
        state.innerHTML = "player 2 won";
        turnX = undefined;
        warning();
      }
    } 
}
reset.addEventListener("click", reset1())
function warning(){
    function func1(){
         warn.innerHTML = "The game will be restarted after 5 seconds" ;
        setTimeout(reset1, 5000);
    }
    setTimeout(
       func1,3000);
}
function reset1(){
        boxes.forEach((box)=>{
            box.innerHTML= "";
            turnX = true;
            state.innerHTML = "player 1's turn";
            box.disabled = false;
        })
    }