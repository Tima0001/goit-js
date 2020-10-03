"use strict";
// let breakfast;
// // console.log(breakfast);
// breakfast = "fruits";
// // console.log(breakfast);

// const goToSchool = {
//   books: [],
//   dress: [],
//   breakfast: {
//     coffee: "black",
//     sandwich: "salmon",
//   },

//   toHaveBreakfast() {
//     console.log(`I ate ${this.breakfast.sandwich} sandwich and a cup of
//     ${this.breakfast.coffee} coffee`);
//   },
// };

// goToSchool.toHaveBreakfast();

// //////
// //element NODE
// const body = document.querySelector("body");
// body.style.background = "cyan";

// const mainTitle = document.getElementById("main-title");
// const mainTitle1 = document.querySelector("#main-title");

// // console.log(body);
// // console.log(mainTitle);
// // console.log(mainTitle1);

// const box = document.querySelector(".box-container");

// //создание элементов

// const image = document.createElement("img");
// // console.log(image);
// //добавление свойств/атрибутов
// image.src = "https://pbs.twimg.com/profile_images/958999796144132096/v-ZoiEvx_400x400.jpg";
// // console.dir(image);
// // console.log(image);

// image.setAttribute("alt", "alien");
// // console.dir(image);
// // console.log(image);

// const link = document.createElement("a");
// link.setAttribute("href", "https://ru.wikipedia.org/wiki/Rolls-Royce");
// // console.dir(link);
// // console.log(link);

// //встраиваем элемент в родительський элемент
// link.appendChild(image);
// // console.dir(link);
// // console.log(link);

// //создаем элемент
// const item = document.createElement("li");
// //добавляем класс элементу
// item.classList.add("images-item");
// // console.dir(item);
// // console.log(item);
// //встраиваем элемент в родительскьий элемент
// item.appendChild(link);
// // console.dir(item);
// // console.log(item);

// //создаем элемент
// const imagesList = document.createElement("ul");
// // console.dir(imagesList);
// // console.log(imagesList);

// // imagesList.appendChild(item);
// box.appendChild(imagesList);

// //клонирование элементов
// const cloneItem1 = item.cloneNode(true);
// // console.dir(cloneItem1);
// // console.log(cloneItem1);

// imagesList.append(item, cloneItem1);

// imagesList.classList.add("images-list");

// const images = [
//   "https://cdn.motor1.com/images/mgl/v1ykb/s1/mercedes-amg-gt-73-four-door-spy-photos.jpg",
//   "https://static.cartimes.ru/cache/625x404c/news/9916/main.jpg",
//   "https://auto.ironhorse.ru/wp-content/uploads/2015/11/GLE-63-AMG.jpg",
// ];
// // console.log(images.length);

// images.map((elem) => {
//   // console.log(elem)
//   const i = document.createElement("img");
//   // console.log(i)

//   i.src = elem;
//   i.setAttribute("width", "200px");
//   i.setAttribute("height", "150px");
//   // console.log(i)
//   // // arr.push(img)
//   imagesList.insertAdjacentElement("beforebegin", i);
// });
// const content = `<p>Welcome!</p>`;
// // console.log(content);
// // console.dir(content);
// box.insertAdjacentHTML("afterbegin", content);
// const p = document.querySelector("p");
// // console.log(p.textContent);
// // console.dir(p);

// const newContent = document.createElement("p");
// newContent.textContent = "Welcome again";
// // console.log(content.textContent);
// // console.dir(newContent);
// box.prepend(newContent);

// //события
// box.addEventListener("click", (event) => {
//   console.log("target", event.target);
//   console.log("currentTarget", event.currentTarget);
// });

////////////////

let breakfast;
// console.log(breakfast)
breakfast = "fruits";
// console.log(breakfast)

const goToSchool = {
  books: [],
  dress: [],
  breakfast: {
    coffee: "black",
    sandwich: "salmon",
  },

  toHaveBreakfast() {
    console.log(`I ate ${this.breakfast.sandwich} sandwich and a cup of
    ${this.breakfast.coffee} coffee`);
  },
};

// goToSchool.toHaveBreakfast();

// DOCUMENT OBJECT MODEL - DOM
// доступ к элементам HTML
// element NODE
const body = document.querySelector("body");
body.style.background = "cyan"; // ИНЛАЙНОВЫЕ СТИЛИ

const mainTitle = document.getElementById("main-title");
const mainTitle1 = document.querySelector("#main-title");

// console.dir(body)
// console.dir(mainTitle)
// console.dir(mainTitle1)

// получаем доступ к элементу html, куда будем втсраивать
// динамически сгенерированные свои элементы
const box = document.querySelector(".box-container");

// создание (генерация) элементов

const image = document.createElement("img");
// добавление свойств/атрибутов
image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGYsclqfoAoutPsl8WgoiZmzZO6rwn0sA0wQ&usqp=CAU";

image.setAttribute("alt", "alien");
// console.dir(image)
// console.log(image)

// создаем элемент
const link = document.createElement("a");
link.setAttribute(
  "href",
  "https://ru.wikipedia.org/wiki/%D0%A7%D1%83%D0%B6%D0%BE%D0%B9_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC)"
);

// встраиваем элемент в родительский элемент
link.appendChild(image);

// console.dir(link)
// console.log(link)

// создаем элемент
const item = document.createElement("li");
// добавляем класс элементу
item.classList.add("images-item");

// встраиваем элемент в родительский элемент
item.appendChild(link);

// console.dir(item)
// console.log(item)

// создаем элемент
const imagesList = document.createElement("ul");

// console.dir(imagesList)
// console.log(imagesList)

// встраиваем элемент в родительский элемент
// imagesList.appendChild(item)

box.appendChild(imagesList);

// клонирование элементов
const cloneItem1 = item.cloneNode(true);
const cloneItem2 = item.cloneNode(true);
const cloneItem3 = item.cloneNode(true);
const cloneItem4 = item.cloneNode(true);
const cloneItem5 = item.cloneNode(true);
const cloneItem6 = item.cloneNode(true);
const cloneItem7 = item.cloneNode(true);

// console.dir(cloneItem1)
// console.log(cloneItem1)

imagesList.append(item, cloneItem1, cloneItem2, cloneItem3, cloneItem4, cloneItem5, cloneItem6, cloneItem7);

imagesList.classList.add("images-list");

const images = [
  "https://images.pexels.com/photos/4932184/pexels-photo-4932184.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/5041858/pexels-photo-5041858.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/3354887/pexels-photo-3354887.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/3112898/pexels-photo-3112898.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
];
// console.log(images.length)

images.map((elem) => {
  // console.log(elem)
  const i = document.createElement("img");
  // console.log(i)

  i.src = elem;
  i.setAttribute("width", "200px");
  i.setAttribute("height", "150px");
  // console.log(i)
  // // arr.push(img)
  imagesList.insertAdjacentElement("beforebegin", i);
});

const content = `<p>Welcome!</p>`;
// console.log(content)
// console.log(newContent)

box.insertAdjacentHTML("afterbegin", content);
const p = document.querySelector("p");
// console.log(p.textContent)
// console.dir(p)

const newContent = document.createElement("p");
newContent.textContent = "Welcome again";

// console.log(newContent.textContent)
// console.dir(newContent)

box.prepend(newContent);

// события
box.addEventListener("click", eventHandler);

function eventHandler(e) {
  console.log(e);
  console.log("target", e.target.children);
  console.log("target", e.target.children.length);

  // console.log("target", e.target)
  // console.log("currentTarget", e.currentTarget)
}

const rangeInput = document.getElementById("rangeInput");
rangeInput.addEventListener("input", () => {
  console.log(rangeInput.value);
});
