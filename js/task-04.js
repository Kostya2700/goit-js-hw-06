// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
const elemDecrement = document.querySelector('[data-action="decrement"]');
const elemIncrement = document.querySelector('[data-action="increment"]');
const elemValue = document.querySelector("#value");
let counterValue = 0;
const onDecrement = () => {
  counterValue -= 1;
  elemValue.innerHTML = counterValue;
};
elemDecrement.addEventListener("click", onDecrement);

const onIncrement = () => {
  counterValue += 1;
  elemValue.innerHTML = counterValue;
};
elemIncrement.addEventListener("click", onIncrement);
