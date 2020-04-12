"use strict";

const results = [12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42];


const removeFromStart = results.splice(0, 2);
const removeFromEnd = results.splice(-3);


console.log(removeFromStart); // [12, 32]
console.log(removeFromEnd); // [7, 100, 42]
console.log(results); // [15, 17, 3, 4, 98, 67, 532, 611]
