let input=require("readline-sync")
var num=input.questionInt("enter a num")
if (num%5==0 && num%15==0){
    console.log("divisble")
}
else{
    console.log("not divisble")
}