var signArray=["rock","paper","scissors"];
var computerSelection="";

function getComputerChoice(){
var randomNumber=Math.floor(Math.random()*signArray.length);
computerSelection=signArray[randomNumber];
  return computerSelection;
}


function playRound(playerSelection,computerSelection){
var playerSelection=prompt("choose rock or paper or scissors pls");
  
  if(playerSelection==computerSelection){ 
    return("equal with computer!");
  } else if( playerSelection=="rock" && computerSelection=="paper" || playerSelection=="paper" && computerSelection=="scissors" || playerSelection=="scissors" && computerSelection=="rock"){
    return("You lose!"+ computerSelection+" beat "+playerSelection);
  } else { 
    return("You Win!"+ playerSelection+" beat "+computerSelection);
  } 
}

function game(){
  for(let i=1; i<=5; i++){
  getComputerChoice(); 
  playRound(playerSelection,computerSelection);
  console.log(playRound(playerSelection,computerSelection));
  }
}
game();
