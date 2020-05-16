"use strict";

// //CALLBACK функция обратного вызова - передается аругментом в другую функцию
// //1//

// const highOrderFunc = function (callbackFunc) {
//     const message = "Вот так работает колбэк";
//     callbackFunc(message);
// };

// const showMessage = function (Vania) {
//     console.log(Vania);
// };

// highOrderFunc(showMessage);

// //2//
// const printMessage = function (message) {
//     console.log(message);
// };

// const higherOrderFunction = function (callback) {
//     const string = "HOCs are awesome";
//     callback(string);
// };

// higherOrderFunction(printMessage);

// //3//
// const showHeroes = function (heroes) {
//     console.log(heroes);
// };

// const mainFunc = function (callback) {
//   const heroes = ["Batman", "Robin"];
//   for (const hero of heroes) {
//       callback(hero);
//   }
// };
// mainFunc(showHeroes);

// //// АБСТРАГИРОВАГИЕ ПОВТОРЕНИЙ
// const repeatlog = function (n) {
//      let result;
//     for (let i = 0; i < n; i +=1) {
//         result = i;
//         console.log("каждая итерация i: ", i);
//         console.log("каждая итерация result: ", result);

//     }
//     console.log("последняя итерация", result);
// };

// repeatlog(5);

// //  ===1===
// // callback - функция обычная
// const showResult = function (result) {
//     console.log(result);
// };

// const showResultWithComment = function (value) {
//     console.log("коммент к результату: ", value);
// };

// const repeat = function (num, callback) {
//     for (let i = 0; i < num; i += 1) {
//         callback(i);
//     }
// }
// repeat(4, showResult);

// repeat(3, showResultWithComment);

// // // //
// const myArr = [];
// console.log("массив обьявлен", myArr);

// repeat(5, (value) => {
//     myArr.push(`element ${value + 1}`);
// });
// console.log("массив после функции", myArr);
 
// // ФИЛЬТР МАССИВА
// const filterFunc = function (array, cbFunc) {
//     const filteredArr = []; // новый массив для добавления отфильтрованных элементов
//     for (const el of array) {
//       const ok = cbFunc(el);
  
//       if (ok) {
//         filteredArr.push(el);
//       }
//     }
//     return filteredArr;
//   };

//   const fruits = [
//     { name: "apples", quantity: 200, isFresh: true },
//     { name: "grapes", quantity: 150, isFresh: false },
//     { name: "bananas", quantity: 100, isFresh: true },
//   ];

//   const freshFruits = filterFunc(fruits, (Tim) => Tim.isFresh);
//   console.log("только свежие: ", freshFruits);

//   const fruitsWithQuantity = filterFunc(fruits, (fruit) => fruit.quantity >= 120);
//   console.log("те что больше 120: ", fruitsWithQuantity);

//   const thirdChildFunc = function () {
//     console.log("выполнилась 3я вложенная функция");
//   };

//   const secondChilFunc = function () {
//     console.log("выполнилась 2я вложенная функция");
//     thirdChildFunc();
//   };
//   const firstChildFunc = function () {
//       console.log("выполнилась 1я вложенная функция");
//       secondChilFunc();
//   };

//   const parentFunc = function () {
//       console.log("начала выполняться родительская функция");
//       firstChildFunc(); 
//       console.log("закончила выполняться родительская функция");
//   };

//   parentFunc();

//   //=========LEXICAL ENVIRONMENT===========

//   const x = 10;
//   const y = 20;

//   const summ = function (z) {
//       const X = 100;
//       return console.log(x + y + z);
//   };
// //   console.log("значение х глобально", X);
//   summ(30);

//   //====CLOURSE=====(замыкание)

//   //==1==
//   const createCounter = function () {
//       let privateValue = 0;
//       const increment = function () {
//           privateValue += 1;
//           console.log(privateValue);
//       };
//       return {
//           increment,
//       };
//   };

//   const counterA = createCounter();
//   counterA.increment();
//   counterA.increment();
//   counterA.increment();

//   const counterB = createCounter();
//   counterB.increment();
//   counterB.increment();
//   counterB.increment();
//   counterB.increment();
//   counterB.increment();
//   counterB.increment();

// // this in global environment
function myFunc() {
    console.log(this);
}
myFunc(); //undefined

const tim = {
    name: "Tim",
    showThis() {
        console.log(this);
    },
    showName() {
        console.log(this.name);
    },
};

tim.showThis();
tim.showName();

///////
function showThis() {
    console.log("this is showThis", this);
}
showThis();

const user = {
    name: "Timo",
};

user.newMethod = function() {
    console.log("добавление метода с ссылкой на контекст", this);
};
user.newMethod();
user.showContext = showThis;
user.showContext();

//this in callback
//1//
const hotel = {
    name: "Hilton",
    showThis() {
        console.log(this);
    },
};

const fn = function (callback) {
    callback();
};

fn(hotel.showThis);

const arrowThis = () => {
    console.log("this in showThis: ", this);
};

arrowThis();

const newUser = { name: "Alex"};
newUser.showContext = arrowThis;
newUser.showContext();

//2//
const hotel2 = {
    name: "Holiday Inn",
    showThis() {
        const fn = () => {
            console.log("this is in fn: ", this);
        };

        fn();
        console.log("this is showThis",this);
    },
};

hotel2.showThis();

///call and apply
const greet = function() {
    return `Welcome to ${this.name} hotel!`;
}; 

const hotel4 = { name: "Resort Hotel" };
console.log(greet.call(hotel4));
console.log(greet.apply(hotel4));

const greet1 = function (guest, stars) {
    return `${guest}, welcome to ${stars}-star ${this.name}!`;
};

const hotel5 = { name: "Resort Hotel" };
const motel = { name: "Sunlight Motel" };
console.log(greet1.call(hotel5, "Mango", 5));
console.log(greet1.call(motel, "Poly", 4));

const greet2 = function (guest, stars) {
    return `${guest}, welcome to ${stars}-star ${this.name}`;
};

const hotel6 = { name: "Resort Hotel" };
const motel1 = { name: "Sunlight Motel"};

console.log(greet2.apply(hotel6, ["Mango", 5]));
console.log(greet2.apply(motel1, ["Poly", 4]));

//bind
const greet3 = function (guest) {
    return `${guest}, welcome to ${this.name}!`;
};

const hotel7 = { name: "Ромашка" };
const hotelGreeter = greet3.bind(hotel7, "Mango");
console.log(hotelGreeter());

const hotel8 = {
    name: "Rixos",
    showThis() {
        console.log(this);
    },
};

const fn1 = function (callback) {
    callback();
};

fn1(hotel8.showThis.bind(hotel8));
