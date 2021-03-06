"use strict";
// // // OBJECTS

// const frontend = {
//     language_1: "html",
//     language_2: "css",
//     language_3: "js"
// };
// console.log("frontend", frontend);

// const student = {
//     name: "Tim",
//     lastName: "Horbatch",
//     age: 16,
//     sex: "boy",
//     course: frontend,
//     passExam: true 
// };
// console.log("student", student )

// //Доступ к свойствам обьекта

// console.log(student.name);
// console.log(student.passExam);

// //2- object["key"]
// console.log(frontend["language_1"]);
// console.log(frontend["language_2"]);

// //изменение свойства обьекта

// student.lastName = "Kulik";
// console.log("student", student);

// //

// frontend["language_3"] = "javascript";
// console.log("frontend", frontend);

// //добавление

// student.adress = "Zhukova 24";
// console.log("student", student);

// //

// student["phone number"] = "0506590317";
// console.log("student", student);

// //удаление

// delete frontend.language_1;
// console.log(frontend.language_1);

// delete frontend["language_2"];
// console.log("front", frontend);

// //Kороткие свойства 

// const myTeacher = "Sasha";
// const course = "frontend";

// const group_4 = {
//     myTeacher,
//     course,
//     count: 9
// };
// console.log(group_4);

// //Вычесляемые свойства через переменную

// const key = "test";
// const name = "Lucy";
// const age = "age1";


// const testResult = {
//     key,
//     [key]: "2",
//     [name]: "my friend",
//     [age]: 32
// };

// //Методы обьекта
// const myProducts = {
//     milk: 0.5,
//     eggs: 10,
//     apples: 5,
//     toCheck() {
//         console.log("Проверь наличие")
//     },
//     oranges: 10
// };
// myProducts.toCheck();
// console.log("myProducts", myProducts);

// //создаем новый метод
// myProducts.toBuySweet = function() {
//     console.log("Купи что то сладкое");
// };

// myProducts.toBuySweet();
// console.log("myProducts with new method", myProducts);

// delete myProducts.toBuySweet;
// console.log("myProducts with new method", myProducts);

// //Доступ к обьекту через this

// const product = {
//     type: "wellness & spa",
//     category: "hair care",
//     productName: "shampoo",
//     price: 76.94,
//     showProductName() {
//       console.log(this.productName); // внутри объекта образаемся через this
//     },
//     changePrice(value) {
//       this.price = value; // внутри объекта образаемся через this
//     }
//   }; 

// product.showProductName(); //shampoo

// product.changePrice(89.5); //меняем цену
// console.log(product.price);

// // Перебор обьекта (не так, как массив)

// // цикл for...in

// const myCars = {
//     VW: "GolfR",
//     Bentley: "Continental GT",
//     MercedesBenz: "E63S AMG",
//     RR: "Cullinan"
// };

// for (const key in myCars) {
//     console.log("key: ", key);
// };
// for (const key in myCars) {
//     console.log("value: ", myCars[key]);
// }

// //методы конструктора Object

// const hero = {
//     name: "Black Cat",
//     power: 100,
//     lifes: 9,
//     speed: 45
// };
// console.log("My Hero", hero);
// const keysOfHero = Object.keys(hero);
// console.log("keysOfHero", keysOfHero);

// //for...of
// for  (const key of keysOfHero) {
//     console.log("key: ", key);
//     console.log("value: ", hero[key])
// }

// const entriesOfHero = Object.entries(hero);
// console.log("entries of hero", entriesOfHero);

// for (const entry of entriesOfHero) {
//     const key = entry[0];
//     const value = entry[1];
//     console.log(`${key}: ${value}`);
// }

// const valuesOfHero = Object.values(hero);
// console.log("values of hero", valuesOfHero);

// const testsScore = {
//     test1: 16,
//     test2: 21,
//     test3: 22,
//     test4: 23
// };
//  const arrValues = Object.values(testsScore);
//  console.log(arrValues);

//  let totalScore = 0;

// for (const value of arrValues) {
//     totalScore += value;
//     console.log("totalScore на каждой итерации", totalScore);
// }
// console.log(totalScore);

// // // ... - SPREAD (распыление аргументов)
// // // Во время вызова функции, для передачи массива элементов отдельными аргументами
const test1 = [18, 14, 12, 21, 17, 29];
const minTest1 = Math.min(test1);
console.log(minTest1); // NaN

const test2 = [18, 14, 12, 21, 17, 29];
const minTest2 = Math.min(...test2);
console.log(minTest2); // 12

// ... - spread (распыление массивов) - альтернатива slice() - копирование массива
// В литерале массива, при создании нового массив
const marvelHeroes = [
  "Captain Marvel",
  "Thanos",
  "Black Panter",
  "Goose the Cat",
  "Black Widow",
  "Captain America"
];
console.log("marvelHeroes", marvelHeroes);

// ДОБАВЛЕНИЕ ЭЛЕМЕНТОВ ПРИ РАСПЫЛЕНИИ
const copyOfMarvelHeroes = [...marvelHeroes, "Hulk", "Spider-Man"];
// можно добавить элементы при кописаровании
console.log("copyOfMarvelHeroes", copyOfMarvelHeroes);
// ["Captain Marvel", "Thanos", "Black Panter", "Goose the Cat", "Black Widow", "Captain America", "Hulk", "Spider-Man"]

// КОНКАТЕНАЦИЯ МАССИВОВ ПРИ РАСПЫЛЕНИИ полностью
const firstNum = [1, 2, 3];
const secondNum = [4, 5, 6];

const allNums = [...firstNum, ...secondNum];
// const allNums = [...secondNum, ...firstNum];
// const allNums = firstNum.concat(secondNum); // альтернатива concat()

console.log(allNums); // [1, 2, 3, 4, 5, 6]

// КОНКАТЕНАЦИЯ МАССИВОВ ПРИ РАСПЫЛЕНИИ частично
const notAllNums = [...firstNum.slice(0, 1), ...secondNum.slice(-1)];
console.log("notAllNums", notAllNums); // [1, 6]

// КОНКАТЕНАЦИЯ МАССИВОВ ПРИ РАСПЫЛЕНИИ с добавлением элемента извне
const updatedNums = [
  ...firstNum.slice(0, 2),
  "Js is the best",
  ...secondNum.slice(-2)
];
console.log("updatedNums", updatedNums); // [1, 2, "Js is the best", 5, 6]

// ... - spread (распыление объектов) как альтернатива Object.assign()
// В литерале объекта, при создании нового объекта
const mod_1 = { test: 2, hw: 3, addit: 2 };
const mod_2 = { test: 4, hw: 6 };

// const mod_3 = Object.assign({}, mod_1, mod_2);
// console.log("mod_3", mod_3); // {test: 4, hw: 6, addit: 2}

// ... - spread
const mod_3 = { ...mod_1, ...mod_2 };
console.log("mod_3", mod_3); // {test: 4, hw: 6, addit: 2}

// !!! ВНИМАТЕЛЬНО !!! если свойства (ключи) перед распылением совпадают
const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

// const c = { x: 5, j: 10, ...a, z: 15, ...b };
// console.log(c); // {x: 0, j: 10, y: 2, z: 3}

const c = { ...a, ...b, x: 5, j: 10, z: 15 };
console.log(c); //
// // // ... - REST (сбор аргументов) - немного затронули в функциях (модуль 2)
// // const add1 = function(...args) {
// //   console.log("add1 args", args); // массив всех аргументов
// // };

// // add1(1, 2, 3);
// // add1(1, 2, 3, 4, 5);

// // const add2 = function(value, ...args) {
// //   console.log("add2 value", value); // первый аргумент
// //   console.log("add2 args", args); // массив всех остальных аргументов
// // };

// // add2(10, 1, 2, 3);
// // add2(15, 1, 2, 3, 4, 5);

// // // Д Е С Т Р У К Т У Р И З А Ц И Я объектов {object}

// // // Если имя переменной и ключ объекта совпадают, то происходит присваивание.
// // // Если для переменной не нашлось подходящего ключа то будет присвоен undefined.

// // const hotel = {
// //   name: "Resort Hotel",
// //   stars: 5,
// //   capacity: 100
// // };

// // // Объявим переменные и присвоим им значения из объекта
// // const { name, stars, status } = hotel;

// // console.log(name, stars, status); // "Resort Hotel", 5, undefined

// // // == Присвоения undefined можно избежать, задав переменным значения по умолчанию,
// // // в случае если такого свойства в объекте нет.
// // const hotel2 = {
// //   name2: "Resort Hotel",
// //   stars2: 5,
// //   capacity2: 100
// // };

// // const { name2 = "hotel", stars2 = 3, status2 = "empty" } = hotel2;

// // console.log(name2, stars2, status2); // "Resort Hotel", 5, "empty"

// // // == можно переопределить имена в процессе присвоения.
// // // Сначала пишем имя свойства из которого мы хотим получить значение,
// // // после чего ставим двоеточие и пишем имя переменной в которую хотим поместить
// // // значение этого свойства.

// // const hotel3 = {
// //   name3: "Resort Hotel",
// //   stars3: 5,
// //   capacity3: 100
// // };

// // const { name3: hotelName3, stars3, status3: hotelStatus3 = "empty" } = hotel3;

// // console.log(hotelName3, stars3, hotelStatus3); // "Resort Hotel", 5, "empty"

// // // == можно делать частичную деструктуризацию, взяв из объекта необходимые поля,
// // // а остальное собрать в переменную под именем rest (имя переменной произвольное),
// // // это будет объект с теми полями, которые мы явно не деструктуризировали
// // // в переменные.
// // const hotel4 = {
// //   name4: "Resort Hotel",
// //   stars4: 5,
// //   capacity4: 100
// // };

// // const { name4, ...rest } = hotel4;

// // console.log(name4); // "Resort Hotel"
// // console.log(rest); // {stars: 5, capacity: 100}

// // // Д Е С Т Р У К Т У Р И З А Ц И Я массивов [array]

// // // В результате такой записи будут созданы 3 переменные и в них будут помещены
// // // элементы в нумерованом порядке, от 0 до конца массива.

// // const rgb = [200, 255, 100];

// // const [red, green, blue] = rgb;

// // console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);
// // // Red: 200, Green: 255, Blue: 100

// // // При деструктуризации массивов переменной может быть присвоено значение
// // // отдельно от ее объявления.
// // const rgb1 = [200, 255, 100];
// // let red1, green1, blue1;

// // [red1, green1, blue1] = rgb1;

// // console.log(`Red: ${red1}, Green: ${green1}, Blue: ${blue1}`);
// // // Red: 200, Green: 255, Blue: 100

// // // Если переменных больше чем элементов массива, им будет присвоено undefined,
// // // поэтому можно указывать значения по умолчанию.
// // const rgb2 = [200, 100, 255];

// // const [red2, green2, blue2, alfa2 = 0.3] = rgb2;

// // console.log(`Red: ${red2}, Green: ${green2}, Blue: ${blue2}, Alfa: ${alfa2}`);
// // // Red: 200, Green: 100, Blue: 255, Alfa: 0.3

// // // можно распаковать и присвоить оставшуюся часть элементов массива переменной
// // const rgb3 = [200, 255, 100];

// // const [red3, ...colors] = rgb3;

// // console.log(`Red: ${red3}, Colors: ${colors}`);
// // // Red: 200, Colors: [255, 100]

// // // Элементы можно пропускать. Допустим из массива rgb необходимо взять только последнее значение.
// // // Используется это крайне редко.
// // const rgb4 = [200, 100, 255];

// // const [, , blue4] = rgb4;

// // console.log(`Blue: ${blue4}`); // Blue: 255

const hotel = {
  hotelName: "Resort Hotel",
  stars: 5,
  capacity: 100
};
console.log(hotel);
// Объявим переменные и присвоим им значения из объекта
const { hotelName, stars, status = 5 } = hotel;

console.log(`hotelName - ${hotelName}, stars - ${stars}, status - ${status}`); // "Resort Hotel", 5, undefined

// let myProducts1 = { fruits: "apples", vegan: "tomato"};
