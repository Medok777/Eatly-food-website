const loadMore = document.querySelector("#loadMore"); // btn
const productsLenght = document.querySelectorAll(".restaurant--cards").length; // li
let items = 3; // кол-во видимых card

loadMore.addEventListener("click", () => {
  items += 3;
  const array = Array.from(
    document.querySelector(".card--restaurants").children
  );

  const visItems = array.slice(0, items);
  visItems.forEach((element) => {
    element.classList.add("is-visible");
  });
  if (visItems.length === productsLenght) {
    loadMore.style.display = "none";
  }
});

//  Our Top Dishes

const viewAll = document.querySelector("#viewAll");
const lengthFood = document.querySelectorAll(".food-card").length;
let foodLenght = 5;

viewAll.addEventListener("click", () => {
  foodLenght += 5;
  const arrayFood = Array.from(document.querySelector(".foods-block").children);

  const visFood = arrayFood.slice(0, foodLenght);
  visFood.forEach((el) => {
    el.classList.add("is-visible__food");
  });
  if (visFood.length === lengthFood) {
    viewAll.style.display = "none";
  }
});
