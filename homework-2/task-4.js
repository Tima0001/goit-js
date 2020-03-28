"use strict";

const test3 = [17, 13, 4, 15, 10, 12, 16, 21, 13, 8, 14, 18, 15, 20];
const minLevel = 16;

for (let i = 0; i < test3.length; i += 1) {
    if (test3[i] < minLevel) {
        continue;
    }
    console.log(`score3: `, test3[i]);
}