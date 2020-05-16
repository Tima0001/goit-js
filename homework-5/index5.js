"use strict";
// //Процедурный(не связанный) код
// const test1 = 16;
// //=======
// const test2 = 22;
// //=======
// const test3 = 23;
// //=======
// const score = (test1, test2, test3) => {
//     //  с указаниями параметров
//     return console.log(test1 + test2 + test3);
// };

// score(test1, test2, test3);

// const totalScore = {
//     test1: 16,
//     test2: 22,
//     test3: 23,
//     toGetSum() {
//         //без указания параметров
//         return this.test1 + this.test2 + this.test3;
//     },
// };
// console.log(totalScore.toGetSum());

// //КЛАССЫ - структура, описывающая состояние и поведение сущности

// //ЭКЗЕМПЛЯРЫ - обьекти-представители сущности

// //ИНТЕРФЕЙС - набор свойств и методов класса

// //ПАРАДИГМЫ: инкапсуляция, абстракция, наследование, полиморфизм

// //ИНКАПСУЛЯЦИЯ - сокрытие деталей реализации от пользователя

// //АБСТРАКЦИЯ - выделение значимых характеристик

// //НАСЛЕДОВАНИЕ - создание новой сущности на базе существующей

// //ПОЛИМОРФИЗМ - переопределение методов базового класса  в наследниках

const Project = function (title, theme, clients) {
    this.title = title;
    this.theme = theme;
    this.clients = clients;
}; //обьявление

//вызовы
const project = new Project("habits manager", "human", "all types");
console.log(project);

//2//
const Human = function (arms, legs, head, body = 1) {
    this.arms = arms;
    this.legs = legs;
    this.head = head;
    this.body = body;
};
const Ilia = new Human(2,2,1);
console.log(Ilia);

const Dima = new Human();
console.log(Dima);

// Процедурный (не связанный) код
const test1 = 16;
// ==========================
const test2 = 22;
// ==========================
const test3 = 23;
// ==========================
const score = (test1, test2, test3) => {
  // с указаниями параметров
  return console.log(test1 + test2 + test3);
};

score(test1, test2, test3);

// Объектно-ориентированное программирование (ООП)
const totalScore = {
  test1: 16,
  test2: 22,
  test3: 23,
  toGetSum() {
    // без указания параметров
    return this.test1 + this.test2 + this.test3;
  },
};
console.log(totalScore.toGetSum());

// КЛАССЫ - структура, описывающая состояние и поведение сущности

// ЭКЗЕМПЛЯРЫ - объекты-представители сущности

// ИНТЕРФЕЙС - набор свойств и методов класса

// ПАРАДИГМЫ: инкапсуляция, абстракция, наследование, полиморфизм

// ИНКАПСУЛЯЦИЯ - сокрытие деталей реализации от пользователя

// АБСТРАКЦИЯ - выделение значимых характеристик

// НАСЛЕДОВАНИЕ - создание новой сущности на базе существующей

// ПОЛИМОРФИЗМ - переопределение методов базового класса в наследниках

// КОНСТРУКТОРЫ
// Функции - конструкторы (оператор new), !кроме стрелочных!
// именуются с Заглавной буквы
// встроенные в Js конструкторы: Object, Array, Number, String, Boolean

const Project1 = function (title, theme, clients) {
  this.title = title;
  this.theme = theme;
  this.clients = clients;
}; 
// объявление

// вызовы
const project1 = new Project1("habit`s manager", "human", "all types");
console.log(project); // {title: "habit`s manager", theme: "human", clients: "all types"}

const project_fe = new Project1("App", "to do list", "all types");
console.log(project_fe); // {title: "App", theme: "to do list", clients: "all types"}

// внутренние методы
// [[Call]] - при вызове функции без new, просто выполнится тело функции
// [[Construct]] - при вызове функции c new, создастся новый объект

// Добавление методов
const Movie = function (name, rate, category) {
  this.name = name;
  this.rate = rate;
  this.category = category;
  this.countUser = 0;

  this.greet = function (userName) {
    console.log(`Hello ${userName}, welcome to ${this.name}`);
  };

  this.addUser = function (newUser) {
    this.countUser += newUser;
    console.log(this.countUser);
  };

  this.removeUser = function (newUser) {
    this.countUser -= newUser;
    console.log(this.countUser);
  };
};

const movie = new Movie("Hero", 9, 100, 1);
console.log(movie);

movie.greet("ALeks");
movie.addUser(40);
movie.removeUser(30);

// 2
const House = function (a, b) {
    this.color = a;
    this.floors = b;
    this.windows = 20;
    this.doors = 2;
    this.walls = 2.8;
};

const myHouse = new House("red", 6);
console.log("на момент создания", myHouse);

myHouse.windows = 15;
console.log("измененный", myHouse);

//3//
const salesManager_1 = {
    name: "Olena",
    sales: 5,
    sell(product) {
        this.sales += 1;
        return `Manager ${this.name} sold ${product}`;
    },
};

console.log(salesManager_1.sales);
console.log(salesManager_1.sell("Club Card"));
console.log(salesManager_1.sell("Training Card"));
console.log(salesManager_1.sales);

const salesManager_2 = {
    name: "Kostya",
    sales: 10,
    sell(product) {
        this.sales += 1;
        return `Manager ${this.name} sold ${product}`;
    },
};

console.log(salesManager_2.sales);
console.log(salesManager_2.sell("Club Card"));
console.log(salesManager_2.sell("Training Card"));
console.log(salesManager_2.sales);

//3
const Manager = function (name = "manager", sales = 0) {
    this.name = name;
    this.sales = sales;

    this.sell = function (product) {
        this.sales += 1;
        return `Manager ${this.name} sold ${product}`;
    };
};

const manager_1 = new Manager("Sasha");
console.log(manager_1.name);
console.log(manager_1.sales);

console.log(manager_1.sell("Club card"));
console.log(manager_1.sell("Training card"))

console.log(manager_1.sales);

const manager_2 = new Manager("Sasha", 5);
console.log(manager_2.sales);
console.log(manager_2.sell("Club card"));
console.log(manager_2.sell("Training card"))

console.log(manager_2.sales);

 //ПРОТОТИПЫ
 // в консоли __proto__
 //object
 const teacher = { lang_1: "HTML" };
 const child = { lang_2: "CSS"};

child.__proto__ = teacher;

 console.log(child.lang_1); //HTML
 console.log(child.lang_2); //CSS

 const child2 = { lang_1: "Js", lang_2: "CSS"};
 console.log(child2.lang_1);

 child2.__proto__ = teacher;
 console.log(child2.lang_1);

 // prototype chain - цепочка
 const main_object = {key1: 1};
 console.log("main_object", main_object);

 const first_object = {key2: 2};
 console.log("first_object", first_object);
first_object.__proto__ = main_object;

 const second_object = {key3: 3};
 console.log("second_object", second_object);
 second_object.__proto__ = first_object;

 const third_object = { key4: 4};
 console.log("third_object", third_object);
 third_object.__proto__ = second_object;

 console.log(third_object.key1);
 console.log(third_object.key2);
 console.log(third_object.key3);

 for (const key in third_object) {
     console.log(key);
 };

 const animal = { eats: true };

 const cat = Object.create(animal);
 console.log(cat);

 cat.barks = true;
 console.log(cat);

 const parentProd = { color: "red", count: 7 };
 const childProd = Object.create(parentProd);
childProd.price = 30;

 for (const key in childProd) {
    console.log("__proto__ key: ", key);
 };

for (const key in childProd) {
    if (!childProd.hasOwnProperty(key)) continue;
    console.log("own property: ", key);
}

const childProdKeys = Object.keys(childProd);
console.log(childProdKeys);

//свойства функции prototype

const Guest = function (name, room) {
    this.name = name;
    this.room = room;
};
console.log("обьект с методом constructor", Guest.prototype);

const newGuest = new Guest ("Aleks", 30);
console.log("newGuest", newGuest);

Guest.prototype.newMethod = function () {
    console.log(
        `метод функции-конструктора - name: ${this.name}, room: ${this.room}`
    );
};

newGuest.newMethod();

//наследование и конструткор
const Hero = function (name, xp) {
    this.name = name;
    this.xp = xp;
};

Hero.prototype.gairXp = function (amount) {
    console.log(`${this.name} gained ${amount} experience points`);
    this.xp += amount;
};

const mango = new Hero("Mango", 1000);
console.log(mango);
mango.gairXp(500);

const Warrior = function (name, xp, weapon) {
    Hero.call(this, name, xp);
    this.weapon = weapon;
};
Warrior.prototype.attack = function () {
    console.log(`${this.name} attacks with ${this.weapon}`);
};

const poly = new Warrior("Poly", 200, "sword");
console.log("poly", poly);
poly.attack();


