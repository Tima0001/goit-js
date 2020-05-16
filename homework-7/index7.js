"use strict";

console.log("html разметка", document);
console.dir(document);
const content = document.querySelector(".p"); //получаем доступ к узлу элементов
console.log(content);

console.dir(content);
content.textContent = "Hi, Tim!";
content.style.backgroundColor = "red";
content.style.fontSize = "32px";
console.log(content.classList);

console.log(content.classList.contains("js-list_content"));
console.log(content.classList.contains("p"));
console.log(content.classList.contains("text"));

content.classList.add("js-list_content");
console.log(content.classList);

console.log(content.classList.contains("js-list_content"));
content.classList.remove("text");
console.log(content.classList.contains("text"));
console.log(content.classList);

content.classList.replace("js-list_content", "js-item_tex");
console.log(content.classList.contains("js-list_content"));
console.log(content.classList);

content.classList.toggle("main-content");
console.log(content.classList);

content.classList.toggle("js-item_text");
console.log(content.classList);

const image = document.querySelector(".js-img");
console.log(image);

image.alt = "picture";
// image.width = image.width / 1.5;
// image.height = image.height / 1.5;
image.src = "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

image.setAttribute("src", "https://images.pexels.com/photos/4048182/pexels-photo-4048182.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");

image.name = "Boy"; //добавлен новый атрибут

console.log(image.attributes);

// const button = document.querySelector(".js-btn");
const button = document.querySelector('button[data-action="action"]');
console.log("дефолтный текст кнопки (из html): ", button.textContent);
button.textContent = "Hello";
console.log("новый текст кнопки: ", button.textContent);

button.addEventListener("click", () => {
    updateImage();
});

function updateImage() {
    image.setAttribute("src", "https://images.pexels.com/photos/4171211/pexels-photo-4171211.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
    content.style.backgroundColor = "black";
    content.style.color = "white";
}
