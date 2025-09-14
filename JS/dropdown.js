const dropdownButton = document.querySelector(".dropdown-button");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownButton.addEventListener("click", () => {
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
});

const allOptionBtn = document.querySelectorAll(".allOptions");

allOptionBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const currentContainer = button.closest(".pricing-mobile__options");
    const allOptions = currentContainer.querySelector(".options");

    if (
      allOptions.style.display === "none" ||
      allOptions.style.display === ""
    ) {
      allOptions.style.display = "flex";
    } else {
      allOptions.style.display = "none";
    }
  });
});
