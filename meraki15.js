let input=require("readline-sync")
var num=input.questionInt("enter any num")
if (num%3==0 && num%7==0){
    console.log("chocholate")
}
else if (num%3==0 ||num%7!=0){
    console.log("chocho")
}
else if (num%7==0 ||num%3!=0){
    console.log("late")
}
else{
    console.log("not divisble by 3 or 7")
}