const faqs = document.querySelectorAll(".faq-title");

faqs.forEach(function (item) {
  item.addEventListener("click", function () {
    const faqClose = this.closest(".faq");
    let text = faqClose.querySelector(".faq-text");
    let icon = this.querySelector("img");

    text.classList.toggle("hidden");

    if (text.classList.contains("hidden")) {
      icon.src = "./img/menu/main/faqs plus.svg";
      icon.alt = "plus";
    } else {
      icon.src = "./img/menu/main/minus.svg";
      icon.alt = "minus";
    }
  });
});
