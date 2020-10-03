const categoriesList = document.querySelector("#categories");
// console.dir(categoriesList);
console.log(`В списке ${categoriesList.children.length} категории`);
const categoriesItems = document.getElementsByClassName("item");
// console.log(categoriesItems);
const item = Array.from(categoriesItems).forEach((element) => {
  console.log(`Категория: ${element.children[0].textContent}`);
  console.log(`Количество: ${element.children[1].children.length}`);
});
