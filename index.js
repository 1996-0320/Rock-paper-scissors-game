var signArray=["rock","paper","scissors"];
var computerSelection="";

function getComputerChoice(){
var randomNumber=Math.floor(Math.random()*signArray.length);
computerSelection=signArray[randomNumber];
  return computerSelection;
}

//compare the playerselection & computerselection

var playerSelection=prompt("choose rock or paper or scissors pls");
getComputerChoice(); 

function playRound(playerSelection,computerSelection){
  
  if(playerSelection==computerSelection){ 
    return("equal with computer!");
  } else if( playerSelection=="rock" && computerSelection=="paper" || playerSelection=="paper" && computerSelection=="scissors" || playerSelection=="scissors" && computerSelection=="rock"){
   // rock win s; paper win rock; s win paper 
    return("You lose!"+ computerSelection+" beat "+playerSelection);
  } else { 
    return("You Win!"+ playerSelection+" beat "+computerSelection);
  } 
}
// const playerSelection="rock";
// const computerSelection=getComputerChoice();
// console.log(playRound(playerSelection,computerSelection));

function game(){
  for(let i=1; i<=5; i++){
  playRound(playerSelection,computerSelection);
  console.log(playRound(playerSelection,computerSelection));
  }
}
game();

