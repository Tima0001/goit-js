"use strict";

// const homeworkIsDone = function (pass) {
//     pass = Number(prompt());
//     if (pass === 1) {
//         console.log("Homework is done, good job!");

//     } else {
//         console.log("You must to pass your homework!");
//     };
// }
// homeworkIsDone();

////////////////////////

// const homeworkIsDone2 = (pass2) => {
//     pass2 = Number(prompt());
//     pass2 === 1 ? console.log("Homework is done, good job!") : console.log("You must to pass your homework!")
// }
// homeworkIsDone2();

///////////////////////

const findLongestWord = function (strArrow) {
    strArrow = strArrow.split(' ');
    let longestWord = strArrow[0];

    for (let i = 0; i < strArrow.length; i += 1) {
        if (strArrow[i].length > longestWord.length) {
            longestWord = strArrow[i];

        }

    }
    return longestWord;
};
console.log(
    findLongestWord(
        "And by opposing end them. To die—to sleep, No more; and by a sleep to say we end"
    )
); // opposing

console.log(
    findLongestWord(
        "The heart-ache and the thousand natural shocks That flesh is heir to: 'tis a consummation"
    )
); // consummation

console.log(
    findLongestWord(
        "Devoutly to be wish'd. To die, to sleep; To sleep, perchance to dream—ay, there's the rub:"
    )
); // perchance

