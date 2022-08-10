// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
const bodyEl = document.querySelector("body");
const bthEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(getRandomHexColor);
const onBodyColor = () => {
  const colorRandom = getRandomHexColor();
  bodyEl.style.backgroundColor = colorRandom;
  spanEl.innerHTML = colorRandom;
};
bthEl.addEventListener("click", onBodyColor);
