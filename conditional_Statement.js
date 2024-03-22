
// let a = prompt("Hey whats your age?")

// console.log(typeof a)

// // const prompt = require('prompt-sync')();

const prompt = require('prompt-sync')();
let a = prompt("What is yoour age? ")
console.log(typeof a)
a = Number.parseInt(a)   //converting from string to number
console.log(typeof a)
if(a>18){
    prompt("This is a valid age");
}
else if(a<9){
    console.log("Bhul ja bache pil jayega")

}
else if(a<18 && a>9){
    prompt("You are a kid dont try to be smart")
}
else{
    prompt("This is not a valid age");
}


// Home Work Switch case form mdn 

// Switch Case statement 

let age = prompt("what is your age")

switch(age){
    case 12:
        console.log("Your age is 12")
    
}







// ternary Operator

console.log("you can drive")

console.log("You can", (a<18? "not drive":"drive"))
