const btnOpenModal = document.querySelector(".btn__login");
const loginModal = document.querySelector(".login-block");
const showLogin = document.querySelector(".login-show");
const btnCloseModal = document.querySelector("#login-сlose");
const logoClose = document.querySelector(".login-logo");
const btnSignUp = document.querySelector(".btn__signUp");

btnOpenModal.addEventListener("click", function () {
  if (loginModal.style.display === "flex") {
    loginModal.style.display = "none";
  } else {
    loginModal.style.display = "flex";
  }

  if (showLogin.style.display === "flex") {
    showLogin.style.display = "none";
  } else {
    showLogin.style.display = "flex";
  }
});

btnSignUp.addEventListener("click", function () {
  if (loginModal.style.display === "flex") {
    loginModal.style.display = "none";
  } else {
    loginModal.style.display = "flex";
  }

  if (showLogin.style.display === "flex") {
    showLogin.style.display = "none";
  } else {
    showLogin.style.display = "flex";
  }
});

logoClose.addEventListener("click", function () {
  showLogin.style.display = "none";
  loginModal.style.display = "none";
});

btnCloseModal.addEventListener("click", function () {
  showLogin.style.display = "none";
  loginModal.style.display = "none";
});
