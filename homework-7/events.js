"use strict";

const btn1 = document.querySelector("#single");
console.log(btn1);

const btn2 = document.querySelector("#multiple");
console.log(btn2);

function onClick() {
    alert("Вы нажали на кнопку!");
}

btn1.addEventListener("click", onClick);

function firstClick() {
    btn2.style.color = "red";
}

function secondClick() {
    btn2.style.border = "1px solid red";
}

function thirdClick() {
    alert("Вы нажали на вторую кнопку!");
}

// btn2.addEventListener("click", firstClick);

// btn2.addEventListener("click", secondClick);

// btn2.addEventListener("click", thirdClick);

btn2.addEventListener("click", () => {
    firstClick();
    secondClick();
    thirdClick();
});

//СЛУШАТЕЛЬ СОБЫТИЙ В КОНТЕКСТЕ this

const user = {
    name: "Tim",
    showName() {
        console.log(this);
        alert(`my Name is ${this.name}`);
    },
};
// user.showName();

btn2.addEventListener("click", user.showName.bind(user));

//ОТМЕНА ДЕЙСТВИЙ БРАУЗЕРА ПО УМОЛЧАНИЮ

const form = document.querySelector(".form");
const loginInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');

console.log(form, loginInput, passwordInput);

function getForm(formSubmit) {
    formSubmit.preventDefault();

    console.dir("Разметка инпута", loginInput);
    console.log("Значение из инпута:", loginInput.value);
    console.log("Значение из инпутов без пробелов", loginInput.value.trim());

    const login = loginInput.value.trim(); //убирает пробелы
    const password = passwordInput.value.trim();

    if (login === "" || password === "") {
        return alert("Заполните оба поля!");
    };
    form.reset();
    alert("Спасибо за рег!");
    console.log(login, password);
};

form.addEventListener("submit", getForm);

// СВОСЙСТВА key(значение клавиши) и code(имя клавиши)

const btn3 = document.querySelector('button[data-action="clear"]');
const logList = document.querySelector(".log-list");

function logMsg({ type, key, code }) {
    const msg = document.createElement("div");

    const title = document.createElement("h2");
    title.textContent = `${type} событие`;
    const content = document.createElement("p");
    content.textContent = `значение key ${key}, а значение code ${code}`;

    msg.append(title, content);
    logList.append(msg);
};

btn3.addEventListener("click", (e) => {
    logList.innerHTML = "";
});

window.addEventListener("keydown", logMsg);
window.addEventListener("keyup", logMsg);
console.log(btn3, logList);

//ЗАГРУЗКА ДОКУМЕНТА
const modalGreet = document.createElement("h2");
modalGreet.textContent = "Добро пожаловать!";

modalGreet.classList.add("modalGreet");

function showGreet() {
    // const modalGreet = document.createElement("h2");
    // modalGreet.textContent = "Добро пожаловать!";
    // modalGreet.classList.add("modalGreet");
    alert("Добро пожаловать!");
};

// document.addEventListener("DOMContentLoaded", showGreet);

//load, unload

//распостранение событий

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const innerChild = document.querySelector("#inner-child");

function parentClickHandler() {
    alert("parent click");
};

function childClickHandler() {
    alert("child click");
};

function innerChildClickHandler() {
    alert("innerChild click");
};

// parent.addEventListener("click", parentClickHandler);
// child.addEventListener("click", childClickHandler);
// innerChild.addEventListener("click", innerChildClickHandler);

//обьект события

// const objectClick = (event) => {
//     console.log(event);
//     console.log(event.type);
//     console.log(this);
//     console.log(event.target);
//     console.log(event.currentTarget);
// };

parent.addEventListener("click", objectClick);

function objectClick(event) {
    console.log(event);
    console.log(event.type);
    console.log(this);
    console.log(event.target);
    console.log(event.currentTarget);
};

//прекращение всплытия
// метод stopPropogation

const innerChildStop = (event) => {
    event.stopPropagation();
    alert("innerChildClick");
};

parent.addEventListener("click", parentClickHandler);
child.addEventListener("click", childClickHandler);
innerChild.addEventListener("click", innerChildStop);

const innerChildStopImmediate = (event) => {
    event.stopImmediatePropagation();
    // alert("immediateStopClick");
};

// innerChild.addEventListener("click", innerChildStopImmediate);

// //stopPropagation тормозит всплытие но произойдет на текущем элементе
// //stopImmediate даже на текущем элемнте не произойдет, все заблокируется

//Дилегирование

const teamList = document.querySelector(".js-nav");
teamList.addEventListener("click", memberClick);

function memberClick(event) {
    event.preventDefault();

    const target = event.target;
    console.log(event.target);

    //проверка узла где прозоишел клик
    if (target.nodeName !== "A") return;
    setActiveMember(target);
};

function setActiveMember(nextActiveMember) {
    const currentActiveMember = teamList.querySelector("a.active");
    if (currentActiveMember) {
        currentActiveMember.classList.remove("active");
    };
    nextActiveMember.classList.add("active");
};


