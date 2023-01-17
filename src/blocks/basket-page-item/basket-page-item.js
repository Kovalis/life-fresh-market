import ready from "../../js/utils/documentReady";

ready(function () {
  const wrapBasket = document.querySelectorAll(".basket-page-item__btn");
  if (wrapBasket) {
    wrapBasket.forEach(function (item) {
      item.addEventListener("click", function (element) {
        if (element.target.classList.contains("basket-page-item__delete")) {
          console.log(element.target);
          element.target.closest(".basket-page-item").remove();
        }

        if (element.target.classList.contains("js-basket-page-item-add")) {
          const btnElement = element.target
            .closest(".basket-count-wrap")
            .querySelector(".basket-count-wrap__count");
          let startCount = btnElement.innerHTML;
          let countEl = Number(startCount) + 1;
          btnElement.innerHTML = countEl;
        }

        if (element.target.classList.contains("js-basket-page-item-remove")) {
          const btnElement = element.target
            .closest(".basket-count-wrap")
            .querySelector(".basket-count-wrap__count");
          let startCount = btnElement.innerHTML;
          let countEl = Number(startCount) - 1;
          if (countEl > 0) {
            btnElement.innerHTML = countEl;
          }
        }
      });
    });
  }
});
