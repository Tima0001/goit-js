"use strict";

// ///// 1 /////

// const Account = function (login, email) {
//     this.login = login;
//     this.email = email;
// }
// Account.prototype.getInfo = function () {
//     console.log(`Login: ${this.login} Email: ${this.email}`)
// }

// const mango = new Account('Mangozedog', 'mango@dog.woof');

// mango.getInfo();

// const poly = new Account('Poly', 'poly@mail.com');

// poly.getInfo();

///// 1(2) /////

// class User {
//     constructor(name, age, followers) {
//         this.name = name;
//         this.age = age;
//         this.followers = followers;
//     }
//     getInfo() {
//         console.log(`ser ${this.name} is ${this.age} years old and has ${this.followers} followers`);
//     }
// }

// const mango = new User('Mango', 2, 20);
// mango.getInfo();

// ///// 2 /////

// class Storage {
//     constructor(items) {
//         this.items = items;
//     }
//     getItems() {
//         return this.items;
//     }
//     addItem(item) {
//         return this.items.push(item);
//     }
//     removeItem(item) {
//         for (let i = 0; i < this.items.length; i += 1) {
//             if (this.items[i] === item) {
//                 return this.items.splice(i, 1);
//             }
//         }
//     }
// }

// const storage = new Storage([

//     'Нанитоиды',

//     'Пролонгер',

//     'Железные жупи',

//     'Антигравитатор',

// ]);

// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem('Дроид');

// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem('Пролонгер');

// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" 

// ///// 3 /////

// class StringBuilder {
//     constructor(str) {
//         this._value = str;
//     }
//     value() {
//         return this._value;
//     }
//     append(str) {
//         this._value += str;
//     }
//     prepend(str) {
//         this._value = str + this._value;
//         return this._value;
//     }
//     pad(str) {
//         this._value = str + this._value + str;
//         return this._value;
//     }
// }

// const builder = new StringBuilder('.');

// builder.append('^');

// console.log(builder._value); // '.^'

// builder.prepend('^');

// console.log(builder._value); // '^.^'

// builder.pad('=');

// console.log(builder._value); // '=^.^='

///// 4 /////

class Car {
    static getSpecs(car) {
        return console.log(`Max speed: ${car.maxSpeed}, Speed: ${car.speed}, IsOn: ${car.isOn}, Distance: ${car.distance}, Price: ${car.price}`);
    }
    constructor(maxSpeed, price) {
        this.speed = 0;
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = false;
        this.distance = 0;
    }
    set price(price) {
        return this._price = price;
    }
    get price() {
        return this._price;
    }
    turnOn() {
        return this.isOn = true;
    }
    turnOff() {
        return (this.isOn = false), (this.speed = 0);
    }
    accelerate(value) {
        if (this.speed <= this.maxSpeed) {
            return this.speed += value;
        }
    }
    decelerate(value) {
        if (this.speed >= 0) {
            return this.speed -= value;
        }
    }
    drive(hours) {
        if (this.isOn === true) {
            return this.distance = hours * this.speed;
        }
    }
}

const mustang = new Car(200, 2000);


mustang.turnOn();

mustang.accelerate(50);

mustang.drive(2);


Car.getSpecs(mustang);

// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000


mustang.decelerate(20);

mustang.drive(1);

mustang.turnOff();


Car.getSpecs(mustang);

// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000


console.log(mustang.price); // 2000

mustang.price = 4000;

console.log(mustang.price); // 4000