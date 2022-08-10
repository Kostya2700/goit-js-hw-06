// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.
const allCategoryItem = document.querySelectorAll("li.item");
console.log("Number of categories: " + allCategoryItem.length);
for (let i = 0; i < allCategoryItem.length; i++) {
  let list = allCategoryItem[i].firstElementChild;
  console.log("Category: " + list.innerHTML);
  console.log(
    "Elements: " +
      allCategoryItem[i].lastElementChild.querySelectorAll("li").length
  );
}
