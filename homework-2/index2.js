"use strict";

///Массивы

// const arr = [];
// console.log(arr);

// const students =["Den", "Nick", "Dave", "Helen"];
// console.log(students); 

// //Доступ к элементам
// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);
// console.log(students[4]);

// //Переопределение
// //замена
// students[0] = "Roy";
// console.log(students[0]);
// console.log(students);

// //длинна массива
// //текущее к-ство элементов
// console.log(students.length);

// //добавить элемент/ы
// students.length = 10;
// console.log(students.length);
// console.log(students);
// console.log(students[7]);

// //убрать элементы
// students.length = 4;
// console.log(students.length);
// console.log(students);

// //интерация по массиву

// //перебор массива
// for (let i = 1; i < students.length; i +=2) {
//     console.log("students item: ", students[i]);
// }

// //заполние данными 
// for (let i = 1; i < 6; i +=2) {
//     students.push(`The best student - ${i}`);
// }
// console.log("students list: ", students);
// console.log(students.length);

// //FOR...OF альтернатива циклу FOR
// //по массиву
// for (const student of students) {
//     console.log(student);
// }

// const house = ["flat1", "flat2", "flat3", "flat4", "flat5"];
// for (const aFlat of house) {
//     console.log(aFlat);
// }
// const week = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
// for (const aDay of week) {
//   console.log(aDay);
// }

// // по строке
// const name = "Aleksandra is a teacher!";
// console.log(name);

// for (const character of name) {
//   console.log(character);
// }

// // BREAK & CONTINUE
// // // найти совпадение или не совпадение и вывести сообщение об этом
// let studentName;
// console.log("имя студента", studentName);
// // studentName = prompt("Enter your name please");
// const studentsNew = [
//   "Roy",
//   "Nick",
//   "Dave",
//   "Helen",
//   "Mary",
//   "Sarah",
//   "Charly",
//   "Bob"
// ];
// console.log("список студентов", studentsNew);

// const studentsNotNew = [
//   "Roy",
//   "Nick",
//   "Dave",
//   "Dick",
//   "Mary",
//   "Olga",
//   "Charly",
//   "Bob"
// ];
// studentName = studentsNotNew[Math.floor(studentsNotNew.length * Math.random())];

// // console.log("имя студента", studentName);

// let message;

// for (const student of studentsNew) {
//   if (student === studentName) {
//     message = "A student with this name already is in the database";
//     break;
//   }
//   message = "Welcome in our database of unique names!";
// }
// console.log(`${studentName}, ${message}`);
// // console.log(message);


// // continue
// const nums = [1, 5, 13, 45, 467, 99, 3, 23];
// const numMore = 34;

// for (let i = 0; i < nums.length; i += 1) {
//   if (nums[i] < numMore) {
//     continue;
//   }
//     console.log(`This number is more then ${numMore}: ${nums[i]}`);
// }

// const test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
// const minLevel = 12;

// for (let i = 0; i < test1.length; i += 1) {
//     if (test1[i] < minLevel) {
//         continue;
//     }
//     console.log(`student: `, test1[i]);
// }

// // многомерные массивы
// const matrix = [
//   [1, 2, 3], // [0]
//   [11, 22, 33], // [1]
//   [111, 222, 333] // [2]
// ];
// console.log(matrix);
// console.log(matrix[0][0]); // 1
// console.log(matrix[0][1]); // 2
// console.log(matrix[0][2]); // 3

// console.log(matrix[1][0]); // 11
// console.log(matrix[1][1]); // 22
// console.log(matrix[1][2]); // 33

// console.log(matrix[2][0]); // 111
// console.log(matrix[2][1]); // 222
// console.log(matrix[2][2]); // 333

// // вложенные циклы для перебора вложенных массивов
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//   console.log("Вложенный массив ", matrix[i]);
//   for (let j = 0; j < matrix.length; j += 1) {
//     console.log("Элемент вложенного массива", matrix[i][j]);
//     total += matrix[i][j];
//   }
// }
// console.log(total);


// ========занятие2========
// let a = 5;
// let b = a;
// console.log(a); //5
// console.log(b); //5

// a = 10;
// console.log(a) //10
// console.log(b) //5

// //ex2

// let lastName = "Horbatch";
// let newLastName = lastName;

// console.log(lastName);
// console.log(newLastName);

// lastName = "Kulik";
// console.log(lastName);
// console.log(newLastName);

// //присовение по ссылке (для сложных типов)
// const units = ["alfa", "beta", "gamma"];
// const newUnits = units;

// console.log("units", units) //["alfa", "beta", "gamma"]
// console.log("newUnits", newUnits); //["alfa", "beta", "gamma"]

// units[0] = "1";
// console.log("units", units) //["1", "beta", "gamma"]
// console.log("newUnits", newUnits); //["1", "beta", "gamma"]

// // // МЕТОДЫ МАССИВОВ

// // Добавление элементов

// // .push - в конец массива

// units.push("delta");
// console.log("units", units);
// console.log("newUnits", newUnits);

// // .unshift() добавляет новый элемент в начало

// newUnits.unshift("epsilon");
// console.log("newUnits", newUnits);
// console.log("units", units);

// //

// units.pop();
// console.log("units", units);
// console.log("newUnits", newUnits);

// newUnits.pop();
// console.log("newUnits", newUnits);
// console.log("units", units);

// //

// units.shift();
// console.log("units", units);
// console.log("newUnits", newUnits);

// // // СОБРАТЬ ЭЛЕМЕНТЫ
// // .join() массив в строку
// console.log(units.join("")); //1beta
// console.log(units.join(", ")); //1, beta
// console.log(units.join("-"));
// console.log(units.join(" - "));
// console.log(units.join("x"));

// // // РАЗБИТЬ ЭЛЕМЕНТЫ
// // .split() строку в массив
// const msg = "Welcome to my world!"
// console.log(msg.split(" "));
// console.log(msg.split(""));

// const msg1 = "Welcome, to, my, world!"
// console.log(msg1.split(","));

// // НАЙТИ ЭЛЕМЕНТЫ по инедксу

// console.log(units.indexOf("beta")); //1
// console.log(units.indexOf("b")); //-1

// // .includes() указывает наличие или отсутствие элемента в массиве
// console.log(msg.includes("to")); // true
// console.log(msg.includes("WORLD")); // false
// console.log(msg.includes("world")); // true
// console.log(msg.includes("!")); // true
// console.log(msg.includes("t")); // true

// // проверка множества условий
// // const fruit = "apple";
// // if (fruit === "apple" || fruit === "strawberry") {
// //   console.log("it`s a red fruit");
// // }

// // const redFruits = ["apple", "strawberry", "cherry", "cranberry"];
// // const fruit = prompt("Enter a fruit please");

// // if (redFruits.includes(fruit)) {
// //   console.log("its a red fruit");
// // } else {
// //   console.log("its a not a red fruit");
// // }

// //СКОПИРОВАТЬ МАССИВ

// const numList = [0, 1, 2, 3, 4, 5, 6, 7];
// console.log("numList", numList.slice(0, 3)); // [0, 1, 2]
// console.log("numList", numList.slice(1, 2)); // [1]
// console.log("numList", numList.slice(1, 5)); // [1, 2, 3, 4]
// console.log("numList", numList.slice(1)); // [1, 2, 3, 4, 5, 6, 7]
// console.log("numList", numList.slice(3));
// console.log("numList", numList.slice(4));
// console.log("numList", numList.slice());
// console.log("numList", numList.slice(-1)); //[7]
// console.log("numList", numList.slice(-2)); //[6, 7]
// console.log("numList", numList.slice(-3)); //[5, 6, 7]

// const newNumList = numList.slice(-4);
// console.log("newNumList", newNumList);

// // .splice //

// console.log("numList", numList);
// let spliceArr = numList.splice(0, 2);
// console.log("spliceArr", spliceArr);
// console.log("numList", numList);

// // вставляет (нач. индекс, всегда 0, el1, el2, ...)
// spliceArr = numList.splice(0, 0, 1); 
// console.log("spliceArr", spliceArr); //[]
// console.log("numList",numList); // [1, 2, 3, 4, 5, 6, 7] еще раз измененный массив
// spliceArr = numList.splice(7, 0, "8", "9");
// console.log("spliceArr", spliceArr); //[]
// console.log("numList", numList);
// spliceArr = numList.splice(3, 0, 9889); //[]
// console.log("spliceArr", spliceArr);
// console.log("numList", numList);

// console.log(numList.splice(4, 0, "a"));
// console.log("numList", numList); //[1, 2, 3, 9889, "a", 4, 5, 6, 7, "8", "9"]

// //обьединение массивов
// // .concat()

// const arr1 = ["Hello"];
// const arr2 = ["world!"];
// const lang = arr1.concat(arr2);
// console.log(lang.join(", "));


// FUNCTION

// function expression (with veriable)

//обьявление функции
     //(paraments)
const add = function(a, b, c) {
  return a + b + c;
};

//вызов функции 
     //(arguments)
const result = add(1, 2, 3);
console.log(result); //6

console.log(add(5, 10, 15)); //30

//  ПОРЯДОК ВЫПОЛНЕНИЯ КОДА
//  обьявление
const fn1 = function() {
  console.log("1я функия начала выполняться");
  // // вызов
  fn2();
  console.log("продолжение выполнения 1й функции после выхода")
};

const fn2 = function() {
  console.log("выполняеться 2я функция")
};

//вызов
console.log("начато выполнение основного кода");
fn1();
console.log("продолжение выполнения основоного кода после выхода из 1й функции");










