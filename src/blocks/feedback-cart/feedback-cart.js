import ready from "../../js/utils/documentReady";

ready(function () {
  const item = document.querySelectorAll(".js-feedback-show-more");

  item.forEach(function (elem) {
    elem.addEventListener("click", () => {
      elem
        .closest(".feedback-cart")
        .querySelector(".feedback-cart__text")
        .classList.add("feedback-cart__text_active");
      elem.classList.add("feedback-cart__show-more_hide");
    });
  });
});
