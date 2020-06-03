// "use strict";

// ///// 1 /////

// const user = {
//     name: "Semen",
//     age: 15,
//     hobby: "html",
//     premium: true,
// };

// const toShowUpdatedUser = function (obj) {
//     obj.mood = "happy";
//     obj.hobby = "coding";
//     obj.premium = false;

//     const keys = Object.keys(obj);
//     const values = Object.values(obj);

//     for (let i = 0; i < keys.length; i++) {
//         console.log(`${keys[i]}: ${values[i]}`);
//     }
// };
// toShowUpdatedUser(user);


// ///// 2 /////

// const countProps = function (obj) {
//     return Object.keys(obj).length;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ name: "Mango", age: 2 })); // 2

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

// ///// 3 /////

// function countTotalSalary(employees) {
//     let employer = Object.values(employees);
//     let sum = 0;
//     for (let val of employer) {
//         sum += val;
//     }
//     return sum;
// };

// console.log(
//     countTotalSalary({
//         mango: 100,
//         poly: 150,
//         alfred: 80,
//     })
// ); // 330
// console.log(
//     countTotalSalary({
//         kiwi: 200,
//         lux: 50,
//         chelsy: 150,
//     })
// ); // 400

///// 4 /////

const products = [
    { name: "Радар", price: 1300, quantity: 4 },
    { name: "Сканер", price: 2700, quantity: 3 },
    { name: "Дроид", price: 400, quantity: 7 },
    { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (Allproducts, productName) {
    for (let oneProduct of Allproducts) {
        if (oneProduct.name === productName)
            return oneProduct.price * oneProduct.quantity;
    }
};

console.log(calculateTotalPrice(products, "Радар"));
console.log(calculateTotalPrice(products, "Дроид")); 
