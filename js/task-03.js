// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const navElem = document.querySelector(".gallery");
// const galleryImg = (image) => {
//   return image.map((index) => {
//     const liElem = document.createElement("li");
//     liElem.classList = "gallary_item";
//     const imgElem = document.createElement("img");
//     imgElem.classList = "gallary_item__img";
//     imgElem.src = index.url;
//     imgElem.alt = index.alt;
//     liElem.appendChild(imgElem);
//     // navElem.append(liElem);
//     return liElem;
//   });
// };
// const gallery = galleryImg(images);
// navElem.append(...gallery);
const galleryImg = images
  .map(
    (value) =>
      `<li class="gallery_item"><img class = "gallery_item__img" src = " ${value.url} " alt = " ${value.alt} "></li>`
  )
  .join("");
navElem.insertAdjacentHTML("beforeend", galleryImg);
