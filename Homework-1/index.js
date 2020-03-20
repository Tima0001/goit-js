"use strict";

// let a;
// console.log(a);
// console.log(typeof a);

// a = 34;
// console.log(a);
// console.log(typeof a);

// let b = "JavaScript";
// b = 30
// console.log(b);
// console.log(typeof b);

// let c = false;
// c = true
// console.log(c);
// console.log(typeof c);

// var d = 20;
// console.log(d);
// console.log(typeof d);

// // const name = "Timo";
// // console.log(name);
// // console.log(typeof name);
// // name = "Kate";
// // console.log(name);
// // console.log(typeof name);

// // const isAuthenticad = true;
// // console.log(isAuthenticad);
// // console.log(typeof isAuthenticad);

// // const isModalOpen = false;
// // console.log(isModalOpen);
// // console.log(typeof isModalOpen);

// // const fe_group = null;
// // console.log(fe_group);
// // console.log(typeof fe_group);

// // const message = "Жопа!"
// // console.log(message);

// // let men = "ben"
// // console.log(men);
// // console.log(`${men}, ${message}`);

// // alert(`${men}, ${message}`);

// //  const isReady = confirm("Are you ready?");
// // console.log(isReady);

// // const enterName = prompt("Enter your name")
// // console.log(enterName);
// // console.log(typeof null)

// //операторы
// const x = 11;
// const y = 5;
// const z = 2;
// console.log(x + y); // 16
// console.log(x - y); // 6
// console.log(x * y); // 55
// console.log(x / y); // 2.2
// console.log(x % y); // 1

// console.log(y ** z); // 25

// console.log(x + y * z); // 21
// console.log((x + y) * z); // 32

// console.log(x + y ** z); // 36
// console.log((x + y) ** z); // 256

// let value = 100;
// value = value + 33;
// console.log(value); //133
// value = value + 33;
// console.log(value); //166

// value += 44;
// console.log(value); //210

// const p = 100;
// const r = 3;
// const s = 100;
// console.log("p > r", p > r); //true
// console.log("p < r", p < r); //false

// console.log(3 > 2 > 1);

// console.log("p === r", p === r); //false
// console.log("p == r", p == r); //false

// const num1 = 5;
// const num2 = 18;
// const str1 = "5";
// const str2 = "18";
// console.log("num === str", num1 === str1);
// console.log("num == str", num1 == str1);
// console.log(num1 + str1); //55
// console.log( typeof (num1 + str1)); //string

// console.log(str1 + num1 + str2); //5518
// console.log( typeof (str1 + num1 + str2)); //string

// console.log(num1 + num2 + str1 + str2);

// //числа
// // let userAge = prompt("Enter your age please")
// // console.log(userAge);
// // console.log(typeof userAge);
// // userAge = Number(userAge);
// // console.log(userAge);
// // console.log(typeof userAge);

// console.log(Number.parseInt("112px")); //112
// console.log(Number.parseInt("11abc22")); //11
// console.log(Number.parseInt("1.1xui9")); //1
// console.log(Number.parseInt("hgfiH112")); //NaN

// console.log(Number.parseFloat("112px")); //112
// console.log(Number.parseFloat("11abc22")); //11
// console.log(Number.parseFloat("1.1xui9")); //1
// console.log(Number.parseFloat("hgfiH112")); //NaN


// //проверка на число
// const validNumber = Number("1024");
// console.log(validNumber);
// console.log(Number.isNaN(validNumber));

// const invalidNumber = Number("ggg");
// console.log(invalidNumber);
// console.log(Number.isNaN(invalidNumber));

// //сложения чисел с плавающией точкой
// const V = 0.1;
// const W = 0.2;
// console.log("0.1 + 0.2 = ", V + W);
// console.log(V + W === 0.3); //false

// console.log((V * 10 + W * 10) / 10); //0.3

// //object Math
// console.log(Math.floor(1.1)); //1
// console.log(Math.floor(1.5)); //1
// console.log(Math.floor(1.99)); //1

// console.log(Math.ceil(1.99)); 
// console.log(Math.ceil(1.5)); //2
// console.log(Math.ceil(1.01));

// console.log(Math.round(1.4)); 
// console.log(Math.round(1.5)); 
// console.log(Math.round(1.01)); 

// console.log(Math.max(1, 3, 2, 0)); //3
// console.log(Math.min(1, 3, 2, 0)); //0
// console.log(Math.min(1, -3, 2, 0)); //-3

// console.log(Math.pow(3, 3)); //27

// console.log(Math.random());
//  //строки
//  let animal = "tiger";
//  console.log(animal.length);

//  animal = "pink panter";


console.log(Boolean(0)); //false
console.log( "0", typeof 0); //number
//NaN
console.log(Boolean(NaN)); //false
console.log("Nan", typeof NaN); //number
//null
console.log(Boolean(null)); //false
console.log(typeof null); //object
//undefined
console.log(Boolean(undefined)); //false
console.log(typeof undefined); //undefined
//false
console.log(Boolean("")); //false
console.log(typeof ""); //string

console.log(false == undefined); //false
console.log(false == null); //false
console.log(null === undefined); //false

const KPI = 30;
const fact = KPI > 20 && KPI < 31;
console.log(fact); //true 
console.log("cat" && "dog" && "parrot");

const fact2 = KPI > 20 && KPI < 29;
console.log(fact2); //false
console.log("cat" && false); //false

const fact1 = KPI > 31 && KPI < 32;
console.log(fact1); //false
console.log(false && "parrot"); //false

const age = 30;
const trueAge = age < 31 || age > 29;
console.log(trueAge); //true
console.log("cat" || "parrot"); //cat

const trueAge1 = age < 31 || age > 32;
console.log(trueAge1); // true - только левый истинный
console.log("cat" || false); // cat

const trueAge2 = age < 29 || age > 27;
console.log(trueAge2); // true - только правый истинный
console.log(false || "parrot"); // parrot

const trueAge3 = age < 29 || age > 31;
console.log(trueAge3); //false

// ! после приведения к булю, меняет его значение на противоположное
console.log(!true); // false
console.log(!false); // true

console.log(!true); //false
console.log(!false); //true

console.log(!1); // false
console.log(!!1); // true - двойное отрицание

console.log(!0); // true
console.log(!!0); // false - двойное отрицание

const quantity = 50;
console.log((false && true) || true); //true
console.log(false && (true || true)); // false

console.log((quantity > 39 && quantity < 49) || quantity > 48); // true
//                           (true && false) || true; // true
//                                     false || true; // true
console.log((true && false) || "parrot"); // parrot
//                    false || parrot; // parrot

console.log((quantity > 51 && quantity < 53) || quantity > 48); // true
//                             (false && true) || true; // true
//                                     false || true; // true
console.log((quantity > 51 && quantity < 49) || quantity > 49); // true
//                            false && false || true; // true
//                                     false || true; // true

// если || - false, то && вычисляется
// при этом, если && тоже false - возвращается значение ||
// при этом, если && тоже true - возвращается значение &&
console.log((quantity > 51 && quantity < 51) || quantity > 52); // false
//                             false && true || false; // false
//                                     false || false; // false

console.log((quantity > 39 && quantity < 49) || quantity > 51); // false
//                             true && false || false; // false
//                                     false || false; // false
console.log((quantity > 39 && quantity > 49) || quantity > 51); // false
//                              true && true || false; // true
//                                      true || false; // true
console.log((quantity > 51 && quantity < 49) || quantity > 52); // false
//                            false && false || false; // false
//                                     false || false; // false

console.log((false && true) || NaN); // NaN
//                    false || NaN; // NaN
console.log((false && false) || NaN); // NaN
//                     false || NaN; // NaN
console.log((true && true) || NaN); // true
//                    true || NaN; // true
console.log(NaN || (true && true)); // true
//                  Nan || true; // true

// IF
// если условие выполняется (true), то код внутри {} выполнится

let cost;
const subscription = "pro";

if (subscription === "pro") {
  cost = 100;
}

if (subscription === "pr") {
  cost = 0;
}

if (subscription === "pro") {
  cost = 34;
}

console.log(cost); // 100 || 0

//exemple1

// // IF ELSE
// let day = prompt("Enter today day please");
// let weekday;

// if (day === String("Saturday") || day === String("Sunday")) {
//   weekday = "holiday";
// } else {
//   weekday = "workday";
// }
// console.log(day);
// console.log(weekday);

// //exemple2
// let value = prompt("Boolean value");
// let bool;

// if (value === "true" || value === "false") {
//   bool = "Boolean";
// } else {
//   bool = "It's not a Boolean";
// }
// console.log(value);
// console.log(bool);

// ELSE IF
// example 1 ---------
// let day = prompt("Enter today day please");
// let weekday;

// if (day === "Saturday" || day === "Sunday") {
//   weekday = "holiday";
// } else if (
//   day === "Monday" ||
//   day === "Tuesday" ||
//   day === "Wednesday" ||
//   day === "Thursday" ||
//   day === "Friday"
// ) {
//   weekday = "workday";
// } else {
//   weekday = "Invalid entered data";
// }
// console.log(day);
// console.log(weekday);

// // example 2 ---------
// let studentAge = prompt("Enter your age please");
// let group;

// if (studentAge > 11 && studentAge < 15) {
//   group = "Junior";
// } else if (studentAge > 14 && studentAge < 18) {
//   group = "Middle";
// } else {
//   group = "Your age is not valid for children group. Please apply to manager.";
// }
// console.log(studentAge);
// console.log(group); 

// ТЕРНАРНЫЙ ОПЕРАТОР == IF ELSE
// example 1 ---------
// let answer;
// let question = confirm("Are you student?");

// // if (question === true) {
// //   answer = "yes";
// // } else {
// //   answer = "no";
// // }

// answer = question === true ? "yes" : "no";

// console.log(answer);

// SWITCH для множества вариантов ответов

// let day = prompt("Enter today day please");
// let weekday;

// switch (day) {
//   case "Monday":
//     weekday = "the worst workday at week";
//     break;

//   case "Tuesday":
//     weekday = "a bit better workday";
//     break;

//   case "Wednesday":
//     weekday = "a workday and so it`s a small Friday)";
//     break;

//   case "Thursday":
//     weekday = "a strange workday";
//     break;

//   case "Friday":
//     weekday = "the best workday";
//     break;

//   case "Saturday":
//     weekday = "holiday";
//     break;

//   case "Sunday":
//     weekday = "holiday";
//     break;

//   default:
//     alert("Invalid entered data");
//     weeekday = "Invalid data"
// }
// console.log(`${day} is ${weekday}`); // undefined, если ввели невалидный день
     

// ОБЛАСТЬ ВИДИМОСТИ === VARIABLE SCOPE
// 1. GLOBAL SCOPE (default)
// 2. BLOCK SCOPE
// example 1 ---------
// let myFirstName = "Timo";

// if (true) {
//   console.log("BLOCK scope:", myFirstName); // BLOCK scope: Timo
// }
// console.log("GLOBAL scope:", myFirstName); // GLOBAL scope: Timo

// if (true) {
//   let mySecondName = "Horbatch";
//   console.log("BLOCK scope:", mySecondName); // BLOCK scope: Horbatch
// }
// console.log("GLOBAL scope:", mySecondName); // GLOBAL scope: Uncaught ReferenceError: mySecondName is not defined

// // example 2 ---------
// const global = "global";

// if (true) {
//   const blockA = "block A";
//   console.log(blockA); // block A
//   console.log(global); // global
        
//   //   console.log(blockB); // Uncaught ReferenceError: blockB is not defined at module1.js:463
//   //   console.log(blockC); // Uncaught ReferenceError: blockB is not defined at module1.js:464

//   if (true) {
//     const blockB = "block B";
//     console.log(global); // global
//     console.log(blockA); // block A
//     console.log(blockB); // block B
//     // console.log(blockC); // Uncaught ReferenceError: blockB is not defined at module1.js:471
//   }
// }

// if (true) {
//   const blockC = "block C";
//   console.log(blockC); // block C
//   console.log(global); // global
//   //   console.log(blockA); // ReferenceError: blockA is not defined
//   //   console.log(blockB); // ReferenceError: blockB is not defined
// }

// console.log(global); // global
// console.log(blockA); // ReferenceError: blockA is not defined
// console.log(blockB); // ReferenceError: blockB is not defined
// console.log(blockC); // ReferenceError: blockC is not defined

// ЦИКЛЫ

// WHILE выполняется пока истинно условие, которое проверяется до выполнения тела цикла,
// если условие ложно изначально, тело цикла не выполнится ни разу
// example 1 ---------
// let counter = 0;

// while (counter <= 10) {
//   console.log("counter: ", counter);
//   counter += 1;
// }

// example 2 ---------
// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter <= maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// // DO WHILE условие проверяется после выполнения тела цикла, всегда минимум 1 итерация
// let password = "";

// do {
//   password = prompt("Введите пароль длиннее 4-х символов", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// FOR цикл со счетчиком
// example 1 ---------
// const max = 100;

// for (let i = 10; i <= max; i += 5) {
//   console.log(i);
// }

// example 2 ---------
// посчитаем сумму чисел до определенного значения
// const target = 4;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   console.log(i);
//   sum += i;
// }
// console.log(sum);

// example 3 ---------
// выведем остаток от деления
// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// // BREAK полностью выходит из цикла
// for (let i = 0; i < 10; i += 1) {
//   if (i === 5) {
//     console.log("Дошли до 5-й итерации, прерываем цикл!");
//     break;
//   }
// }

// CONTINUE только прерывает исполнение текущей итерации
const number = 10;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log("Нечетное i: ", i); // 1, 3, 5, 7, 9
}