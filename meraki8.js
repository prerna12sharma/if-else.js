let input=require("readline-sync")
var water=input.questionInt("enter  water level")
if (water<1){
    console.log("need to fill")
}
else if (water>1 && water<10){
    console.log("no need to fill water")
}
else{
    console.log("water will overflow")
}