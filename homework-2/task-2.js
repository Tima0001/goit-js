"use strict";

const test1 = [4, 12, 6, 16, 13, 8, 13, 4, 15, 11, 14, 10, 15, 12];
const score1 = 12;

for (let i = 0; i < test1.length; i += 1) {
  if (test1[i] < score1) {
    continue;
  }
  console.log("test-1", test1[i]);
}