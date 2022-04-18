let input=require("readline-sync")
var num1=input.questionInt("enter a num1")
var num2=input.questionInt("enter a num2")
if (num1>num2){
    console.log("num1 is greater then num2")
}
else if (num2>num1){
    console.log("num2 is greater than num1")
}
else{
    console.log("num1 and num2 is are equal")
}