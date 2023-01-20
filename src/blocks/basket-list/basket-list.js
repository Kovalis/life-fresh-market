import { removeElementStore } from "../../js/script";
import ready from "../../js/utils/documentReady";

ready(function () {
  const parentEl = ".basket-item",
    wrapBasket = document.querySelector(".sidebar__exist");

  if (wrapBasket) {
    wrapBasket.addEventListener("click", function (element) {
      if (element.target.classList.contains("basket-item__close")) {
        const elementsList = element.target.closest('.basket-item');
        const parentEl = Array.prototype.slice.call(element.target.closest('.basket-list').children);
        removeElementStore(parentEl.indexOf(elementsList));
        elementsList.remove();
      }

      if (element.target.classList.contains("js-basket-list-btn-add")) {
        const item = element.target
          .closest(`${parentEl}`)
          .querySelector(".basket-item__count");
        let startCount = item.innerHTML;
        let countEl = Number(startCount) + 1;
        item.innerHTML = countEl;
      }

      if (element.target.classList.contains("js-basket-list-btn-remove")) {
        const item = element.target
          .closest(`${parentEl}`)
          .querySelector(".basket-item__count");
        let startCount = item.innerHTML;
        let countEl = Number(startCount) - 1;
        if (countEl > 0) {
          item.innerHTML = countEl;
        }
      }
    });
  }
});
