"use strict";

let oddResults = [];
let evenResults = [];
for (let i = 0; i < doubleResults.length; i += 1) {
  console.log(doubleResults[i]);
  if (doubleResults[i] % 2 === 0) {
    evenResults.unshift(doubleResults[i]);
  } else {
    oddResults.unshift(doubleResults[i]);
  }
}
console.log("нечетные числа", oddResults); // [611, 67, 3, 17, 15]
console.log("четные числа", evenResults); // [532, 98, 4]
