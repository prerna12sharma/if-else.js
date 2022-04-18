let input=require("readline-sync")
var varx=input.questionInt("enter a num1")
var vary=input.questionInt("enter a num2")
if (varx%vary==0){
    console.log("its divisible")
}
else{
    console.log("not divisble")
}