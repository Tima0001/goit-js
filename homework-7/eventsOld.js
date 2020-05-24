"use strict";

const menu = document.querySelector(".menu");
console.log(menu);

const news = '<li class = "menu-item">news</li>';
menu.insertAdjacentHTML("afterbegin", news);

const cart = '<li class = "menu-item">cart</li>';
// menu.insertAdjacentHTML("afterend", cart); // добавляет после конца списка
// menu.insertAdjacentHTML("beforebegin", cart); //добавляет перед списком
menu.insertAdjacentHTML("beforeend", cart);// в конце списка

const logo = document.createElement("a");
console.log(logo);

logo.textContent = "logo";
logo.style.textTransform = "uppercase";
logo.classList.add("logo");
// menu.insertAdjacentHTML("beforebegin", logo);

const container = document.querySelector(".container");
container.insertBefore(logo, menu);

const article = document.querySelector(".article");
const text = document.querySelector(".text1");
const link = document.querySelector(".link");
article.removeChild(text);
// article.removeChild(link);
link.remove();

const parent = document.querySelector(".parent");
const article1 = document.querySelector(".article1");
const cloneArticle = article1.cloneNode(true);
parent.appendChild(cloneArticle);

const cloneArticle1 = article1.cloneNode(false); //клонирует пустую оболочку без вложенных элементов
parent.appendChild(cloneArticle1);


const divInnerHTML = document.querySelector(".innerHTML");
const string = `<p class="innerHTMLtext">Lorem, ipsum dolor sit amet consectetur</p><a class="innerHTMLlink" href="#">Read More</a>`;

divInnerHTML.innerHTML += string;

const firstBtn = document.querySelector(".btn");
console.log(firstBtn);

const secondBtn = document.querySelector(".btn1")
console.log(secondBtn);

const handleClick = () => alert("Вы кликнули по кнопке!");
firstBtn.addEventListener("click", handleClick);

const firstClick = () => alert("Первый клик");
const secondClick = () => alert("Второй клик");
const thirdClick = () => alert("Третий клик");

secondBtn.addEventListener("click", firstClick);
secondBtn.addEventListener("click", thirdClick);
secondBtn.addEventListener("click", secondClick);

secondBtn.removeEventListener("click", firstClick);

// secondBtn.addEventListener("click", () => {
//     firstClick();
//     secondClick();
//     thirdClick();
// })

const eventHandler = event => {
    console.log(event);
    console.log(event.type);
    console.log(event.target);
    console.log(this);
};

const eventHandler = function(event) {
    console.log(this);
};

firstBtn.addEventListener("click", eventHandler);


