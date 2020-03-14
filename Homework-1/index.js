"use strict";

let a;
console.log(a);
console.log(typeof a);

a = 34;
console.log(a);
console.log(typeof a);

let b = "JavaScript";
b = 30
console.log(b);
console.log(typeof b);

let c = false;
c = true
console.log(c);
console.log(typeof c);

var d = 20;
console.log(d);
console.log(typeof d);

// const name = "Timo";
// console.log(name);
// console.log(typeof name);
// name = "Kate";
// console.log(name);
// console.log(typeof name);

// const isAuthenticad = true;
// console.log(isAuthenticad);
// console.log(typeof isAuthenticad);

// const isModalOpen = false;
// console.log(isModalOpen);
// console.log(typeof isModalOpen);

// const fe_group = null;
// console.log(fe_group);
// console.log(typeof fe_group);

// const message = "Жопа!"
// console.log(message);

// let men = "ben"
// console.log(men);
// console.log(`${men}, ${message}`);

// alert(`${men}, ${message}`);

//  const isReady = confirm("Are you ready?");
// console.log(isReady);

// const enterName = prompt("Enter your name")
// console.log(enterName);
// console.log(typeof null)

//операторы
const x = 11;
const y = 5;
const z = 2;
console.log(x + y); // 16
console.log(x - y); // 6
console.log(x * y); // 55
console.log(x / y); // 2.2
console.log(x % y); // 1

console.log(y ** z); // 25

console.log(x + y * z); // 21
console.log((x + y) * z); // 32

console.log(x + y ** z); // 36
console.log((x + y) ** z); // 256

let value = 100;
value = value + 33;
console.log(value); //133
value = value + 33;
console.log(value); //166

value += 44;
console.log(value); //210

const p = 100;
const r = 3;
const s = 100;
console.log("p > r", p > r); //true
console.log("p < r", p < r); //false

console.log(3 > 2 > 1);

console.log("p === r", p === r); //false
console.log("p == r", p == r); //false

const num1 = 5;
const num2 = 18;
const str1 = "5";
const str2 = "18";
console.log("num === str", num1 === str1);
console.log("num == str", num1 == str1);
console.log(num1 + str1); //55
console.log( typeof (num1 + str1)); //string

console.log(str1 + num1 + str2); //5518
console.log( typeof (str1 + num1 + str2)); //string

console.log(num1 + num2 + str1 + str2);

//числа
// let userAge = prompt("Enter your age please")
// console.log(userAge);
// console.log(typeof userAge);
// userAge = Number(userAge);
// console.log(userAge);
// console.log(typeof userAge);

console.log(Number.parseInt("112px")); //112
console.log(Number.parseInt("11abc22")); //11
console.log(Number.parseInt("1.1xui9")); //1
console.log(Number.parseInt("hgfiH112")); //NaN

console.log(Number.parseFloat("112px")); //112
console.log(Number.parseFloat("11abc22")); //11
console.log(Number.parseFloat("1.1xui9")); //1
console.log(Number.parseFloat("hgfiH112")); //NaN


//проверка на число
const validNumber = Number("1024");
console.log(validNumber);
console.log(Number.isNaN(validNumber));

const invalidNumber = Number("ggg");
console.log(invalidNumber);
console.log(Number.isNaN(invalidNumber));

//сложения чисел с плавающией точкой
const V = 0.1;
const W = 0.2;
console.log("0.1 + 0.2 = ", V + W);
console.log(V + W === 0.3); //false

console.log((V * 10 + W * 10) / 10); //0.3

//object Math
console.log(Math.floor(1.1)); //1
console.log(Math.floor(1.5)); //1
console.log(Math.floor(1.99)); //1

console.log(Math.ceil(1.99)); 
console.log(Math.ceil(1.5)); //2
console.log(Math.ceil(1.01));

console.log(Math.round(1.4)); 
console.log(Math.round(1.5)); 
console.log(Math.round(1.01)); 

console.log(Math.max(1, 3, 2, 0)); //3
console.log(Math.min(1, 3, 2, 0)); //0
console.log(Math.min(1, -3, 2, 0)); //-3

console.log(Math.pow(3, 3)); //27

console.log(Math.random());
 //строки
 let animal = "tiger";
 console.log(animal.length);

 animal = "pink panter";