

"use strict";

// 1 

let toPassTests = function(a , b , c){
    alert(1);
}
toPassTests = () =>{
    alert(2);
}

toPassTests();

//2

let checkAge = function(checkAge){
    checkAge = prompt("What is yout age?");
    if(checkAge >= 18){
        alert("Here you are! You are got access!");
    }
    else{
        alert("Sorry, you can't to get access");
    }
}
checkAge = (checkAge) =>{
    checkAge = prompt("What is yout age?");
    if(checkAge >= 18){
        alert("Here you are! You are got access!");
    }
    else{
        alert("Sorry, you can't to get access");
    }
}

checkAge();

//3 
let toGetCost = function(message, pricePerWord){
    let message1 = message.split(" ");
    let wordscount = message1.length;
    price = pricePerWord * wordscount;
    console.log(price);
}

console.log(toGetCost("To be, or not to be, that is the question", 10)); // 100

console.log(toGetCost("Whether 'tis nobler in the mind to suffer", 20)); // 160

console.log(toGetCost("The slings and arrows of outrageous fortune,", 40)); // 280

console.log(toGetCost("Or to take arms against a sea of troubles", 20)); // 180

// 3.2

let toGetCost = (message, pricePerWord) =>{
    let message1 = message.split(" ");
    let wordscount = message1.length;
    price = pricePerWord * wordscount;
    console.log(price);
}


// 4 
const logItems= function(array) {
    let index = 1;
    for (const item of array) {
        console.log(`${index} - ${item}`);
        index += 1;
    }
}

logItems([

    "Wolverine",
    
    "Thor",
    
    "Iron Man",
    
    "Deadpool",
    
    "Nick Fury",
    
    "Colossus"
    
    ]);

logItems([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);

// 5

let checkTheWord = function(message) {
  let msg = message.split(" ");

  for (let i = 0; i < msg.length; i++) {
    let word = msg[i].toLowerCase();

    if (word === 'fly' || word === 'lose') {
      return true
    }

    
  }
   return false;
};

checkTheWord = (message) =>{
    let msg = message.split(" ");

    for (let i = 0; i < msg.length; i++) {
        let word = msg[i].toLowerCase();
  
      if (word === 'fly' || word === 'lose') {
        return true
      }
  
      
    }
     return false;
  };


console.log(checkTheWord("Than fly to others that we know not of?")); // true

console.log(checkTheWord("Thus conscience does make cowards of us all")); // false

console.log(checkTheWord("And enterprises of great pitch and moment")); // false

console.log(checkTheWord("And lose the name of action")); // true