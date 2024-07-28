let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let turn0=true;
let newGamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
const winpattern=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];
const resetGame=()=>{
  turn0=true;
   enableboxes();
msgContainer.classList.add("hide");

};
disableboxes=()=>{
  for(let box of boxes)
    box.disabled=true;
};
enableboxes=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
};

boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
      if(turn0==true)
        {
          box.innerText="O";
          turn0=false;
          box.style.color="Pink";
        }
        else{
          box.innerText="X";
          turn0=true;
          box.style.color="black";
        }
        box.disabled=true;
        checkwinner();
  });
});
const showwinner=(winner)=>{
  msg.innerText=`Congratulation,winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableboxes();
};

const checkwinner=()=>{
  for(let pattern of winpattern)
    {
      let pos1val=boxes[pattern[0]].innerText;
      let pos2val=boxes[pattern[1]].innerText;
      let pos3val=boxes[pattern[2]].innerText;
      if(pos1val !="" && pos2val!="" && pos3val!="" )
        {
        if(pos1val==pos2val && pos2val==pos3val)
          {
             showwinner(pos1val);
          }
        }
      
    }
}

newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);