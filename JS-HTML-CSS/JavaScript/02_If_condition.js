// if condition is used to perform different actions based on different conditions. 
// It is a fundamental control structure in programming that allows you to execute certain blocks of code only when specific conditions are met. 
// The basic syntax of an if statement in JavaScript is as follows:
// if (condition) {
//     // code to be executed if the condition is true
// } else {
//     // code to be executed if the condition is false
// }



// 1st condition
const a= 85

if (a>=90){
    console.log("A")
}
else if  (a>=75){
    console.log("B")
}
else if(a>=50){
    console.log("C")
}
else{
    console.log("FAIL")
}


// 2nd condition
const code =1

if(code===1){
    console.log("mobile")
}
else if(code===2){
    console.log("laptop")
}
else if(code===3){
    console.log("tablet")
}
else if(code===4){
    console.log("desktop")
}
else if(code===5){
    console.log("smartwatch")
}
else if (code==="1"){
    console.log("swift")
}
else if (code==="2"){
    console.log("Frauri")
}   
else if (code==="3"){
    console.log("audi")
}
else if (code==="4"){
    console.log("BMW")
}
else if(code==="5"){
    console.log("TATA neu")
}