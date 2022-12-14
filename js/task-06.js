// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
const inputEl = document.querySelector("#validation-input");
function onChangeInput(event) {
  inputEl.classList.forEach((item) => inputEl.classList.remove(item));
  inputEl.value.length != inputEl.getAttribute("data-length")
    ? inputEl.classList.add("invalid")
    : inputEl.classList.add("valid");
}

inputEl.addEventListener("blur", onChangeInput);
