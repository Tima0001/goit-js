"use strict";

import * as allUsers from "./users.js";

let users = allUsers.default;

console.log("массив объектов пользователей", users);
console.log(Object.entries(users));

///// 1 /////

const getUserNames = (users) => {
    return users.map((user) => user.name);
}
console.log(getUserNames(users));

///// 2 /////

const getUsersWithEyeColor = (users, color) => {
    return users
        .filter((user) => user.eyeColor === color)
        .map((user) => user.name);
};

console.log(getUsersWithEyeColor(users, "blue"));

///// 3 /////

const getUsersWithGender = (users, gender) => {
    return users
        .filter((user) => user.gender === gender)
        .map((user) => user.name);
};

console.log(getUsersWithGender(users, "male"));

///// 4 /////

const getInactiveUsers = (users) => {
    return users
        .filter((user) => user.isActive === false)
        .map((user) => user.name);
};

console.log(getInactiveUsers(users));

///// 5 /////

const getUserWithEmail = (users, email) => {
    return users
        .filter((user) => user.email === email)
        .map((user) => user.name);
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
console.log(getUserWithEmail(users, "elmahead@omatom.com"));

///// 6 /////

const getUsersWithAge = (users, min, max) => {
    return users
        .filter((user) => user.age > min && user.age < max)
        .map((user) => user.name);
};

console.log(getUsersWithAge(users, 20, 30));

///// 7 /////

const calculateTotalBalance = (users) => {
    return users.reduce((acc, user) => acc + user.balance, 0);
};

console.log(calculateTotalBalance(users));

///// 8 /////

const getUsersWithFriend = (users, friendName) => {
    return users.filter(
        user => user.friends.indexOf(friendName) !== -1
    ).map(user => user.name);
};


console.log(getUsersWithFriend(users, "Briana Decker"));

///// 9 /////

const getNamesSortedByFriendsCount = (users) => {
    return users.sort((a, b) => a.friends.length - b.friends.length).map((user) => user.name);
};

console.log(getNamesSortedByFriendsCount(users));

///// 10 /////

const getSortedUniqueSkills = users => {
    return users
        .reduce((allSkills, user) => {
            allSkills.push(...user.skills);
            return allSkills;
        }, [])
        .filter((user, index, arr) => arr.indexOf(user) === index)
        .sort();
};
console.log(getSortedUniqueSkills(users));