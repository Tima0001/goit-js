"use strict";

const test3 = [20, 12, 16, 22, 13, 8, 13, 4, 15, 10, 14, 18, 15, 22];
const score3 = 16;

for (let i = 0; i < test3.length; i += 1) {
  if (test3[i] < score3) {
    continue;
  }
  console.log("test-3", test3[i]);
}
