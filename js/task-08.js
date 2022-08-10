// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const elemSubmit = document.querySelector(".login-form");
const userData = {};
const onSubmit = (event) => {
  event.preventDefault();
  if (!elemSubmit.elements.email.value || !elemSubmit.elements.password.value) {
    alert("Email or Password is empty!");
    return false;
  }

  userData[elemSubmit.elements.email.name] = elemSubmit.elements.email.value;
  userData[elemSubmit.elements.password.name] =
    elemSubmit.elements.password.value;
  console.log(userData);

  elemSubmit.reset();
};
elemSubmit.addEventListener("submit", onSubmit);
