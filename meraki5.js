// var x = require("readline-sync")
// var y =x.questionInt("enter ur num")
// var x=2;
// console.log(x);

let input =require("readline-sync");
var number=input.questionInt("enter a number");
if (number<10){
    console.log("num is less than 10")
}
else if (number>10 && number<20){
    console.log("num is greater than 10")
}
else{
    console.log("num is greater than  20")
}
