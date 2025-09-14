const showLoader = document.querySelector(".show-loader");

window.addEventListener("load", () => {
  showLoader.classList.add("show-loader");
  setTimeout(() => {
    showLoader.remove(".loader");
  }, 3000);
});
