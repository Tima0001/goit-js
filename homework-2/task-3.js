"use strict";

const test2 = [17, 13, 4, 15, 10, 12, 16, 21, 13, 8, 14, 18, 15, 20];
const score2 = 15;

for (let i = 0; i < test2.length; i += 1) {
  if (test2[i] < score2) {
    continue;
  }
  console.log("test-2", test2[i]);
}