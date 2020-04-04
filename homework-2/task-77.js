"use strict";

const AllResults = oddResults.concat(evenResults);
console.log("AllResults", AllResults); // [611, 67, 3, 17, 15, 532, 98, 4]


let includesOne = [];


for (let i = 0; i < AllResults.length; i += 1) {
  let item = AllResults[i] + "";
  console.log(item);
  if (item.includes(1)) {
    includesOne.push(+item);
  }
}
console.log("includesOne", includesOne); // [611, 17, 15]

