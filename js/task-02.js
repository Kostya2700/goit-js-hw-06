// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// const elemArr = [];
// const elem = document.querySelector("#ingredients");
// document.createElement("li");
const elemMass = [];
const elem = document.querySelector("#ingredients");
for (let i = 0; i < ingredients.length; i++) {
  let itemLi = document.createElement("li");
  itemLi.classList.add("item");
  itemLi.textContent = ingredients[i];
  elemMass.push(itemLi);
}

elem.append(...elemMass);
