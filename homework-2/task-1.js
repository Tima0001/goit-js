"use strict";


const fruits = ["яблоки", "бананы", "апельсины"];
console.log(fruits); // ["яблоки", "бананы", "апельсины"]

console.log(fruits[1]); // бананы
fruits[1] = "киви";
console.log(fruits); // ["яблоки", "киви", "апельсины"]

fruits[3] = "грушы";
fruits[4] = "виноград";
fruits[5] = "персики";
console.log(fruits); // ["яблоки", "киви", "апельсины", "грушы", "виноград", "персики"]