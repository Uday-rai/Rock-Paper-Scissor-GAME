let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const usersscore = document.querySelector("#userscore");
const compsscore = document.querySelector("#compscore")


const draw= () =>{
    console.log("draw");
    msg.innerText = "Draw Try Again";
    msg.style.backgroundColor ="green"
      

}
const showwin=(userwin) =>{
      if(userwin){
        console.log("You Win");
        msg.innerText = "You win";
        userScore++;
        usersscore.innerText = userScore
        msg.style.backgroundColor ="black"
      }else{
        console.log("You Lose");
        msg.innerText = "You Lose";
        compScore++;
        compsscore.innerText = compScore
        msg.style.backgroundColor ="purple"
      }
    }


const compchoice = () =>{
    const option =["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
}

const play=(choiceid) =>{
    console.log("user choice =",choiceid);
    const compChoice = compchoice() ;
    console.log("computerchoise =",compChoice);

    if(choiceid === compChoice){
      draw();
    }else{
        let userwin=true;
        if(choiceid === "rock"){
            userwin = compChoice ==="paper" ? false : true;
        } else if(choiceid === "paper"){
            userwin = compChoice ==="scissor" ? false : true;
        }else{
            userwin = compChoice ==="rock" ? false : true;
        }
        showwin(userwin);
        }

};

choices.forEach((choice) => {
    console.log(choice)
    choice.addEventListener("click",() =>{
    const choiceid=choice.getAttribute("id");
    play(choiceid);
      })    
})