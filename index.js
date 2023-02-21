var signArray=["rock","paper","scissors"];
var randomChoice="";
function getComputerChoice(){
var randomNumber=Math.floor(Math.random()*signArray.length);
randomChoice=signArray[randomNumber];
  return randomChoice;
}
getComputerChoice();

//compare the playerselection & computerselection


var playerSelection=prompt("choose rock or paper or scissors pls");
var computerSelection=randomChoice;
//var playResult="";
function playRound(playerSelection,computerSelection){
  if(playerSelection==computerSelection){ 
   return("equal with computer!")；
  } else if( playerSelection=="rock" && computerSelection=="paper" || playerSelection=="paper" && computerSelection="scissors" || playerSelection="scissors" && computerSelection="rock"){
   // rock win s; paper win rock; s win paper 
    return("You lose!"+ computerSelection+" beat "+playerSelection);
  } else { 
    return("You Win!"+ playerSelection+" beat "+computerSelection);
  }
  return playResult;
}
