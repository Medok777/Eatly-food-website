const openBurger = document.querySelector("#button-burger");
const burgerMenu = document.querySelector("#burger-window");
const burgerClose = document.querySelector("#burger-close");

openBurger.addEventListener("click", () => {
  burgerMenu.style.display = "flex";
});

burgerClose.addEventListener("click", () => {
  burgerMenu.style.display = "none";
});
