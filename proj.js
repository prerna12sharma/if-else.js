let readlineSync = require("readline-sync");
 
var computerMoves = ['rock', 'paper', 'scissors'];
var computer = computerMoves[Math.floor(Math.random() * computerMoves.length)];
 
var name= readlineSync.question("What is your name: ")
console.log("hi "+ name )
console.log("choose any move in rock paper scissors")
var user = readlineSync.question("Which move you want to do? ");
 
if (user ==computer){
   console.log("Match Draw");
}
else if(user=="rock" && computer == "paper"){
   console.log("computer won the match");
}
else if(user=="rock" && computer == "scissors"){
   console.log(playerName+" Won the match");
}
else if(user=="scissors" && computer == "rock"){
   console.log("computer won the match");
}
else if(user=="scissors" && computer == "paper"){
   console.log(name+" Won the match");
}
else if(user=="paper" && computer == "rock"){
   console.log(name+" Won the match");
}
else if(user=="paper" && computer == "scissors"){
   console.log("computer won the match");
}