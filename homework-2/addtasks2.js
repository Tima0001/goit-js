"use strict";

const homeworkIsDone = function(pass){
    pass = Number(prompt());
    if(pass === 1){
      console.log("Homework is done, well done!");
     
    }else{
      console.log("You must to pass homework!");
    };
  }
  homeworkIsDone();

