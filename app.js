let userScore=0;
let compScore=0;

const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")
const choices=document.querySelectorAll(".choice");

choices.forEach(element => {
     element.addEventListener("click",()=>{
        const userChoice=element.getAttribute("id");
        playGame(userChoice);
     })
getCompCHoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const playGame=(userChoice)=>{
    console.log("userChoice is =",userChoice);
    const compChoice=getCompCHoice();
    console.log("compChoice is =",compChoice);

 const msg=document.getElementById("msg");    


    if(userChoice===compChoice){
        drawGame();
        msg.innerText="game draw";
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;

        }
    
    showWinner(userWin);
    }

}
const drawGame=()=>{
    console.log("game was draw");
}
const showWinner=( userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("user win");
        msg.innerText="you win"
        msg.style.backgroundColor="green";

    } 
    else{
        compScore++;
        console.log("computer win");
        msg.innerText='computer win';
        msg.style.backgroundColor="Red";
        compScorePara.innerText=compScore;
    }
}



});