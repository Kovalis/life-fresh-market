import ready from "../../js/utils/documentReady";

ready(function () {
  const parentEl = ".basket-item",
    addEl = document.querySelectorAll(".js-basket-list-btn-add"),
    removeEl = document.querySelectorAll(".js-basket-list-btn-remove"),
    deleteProduct = document.querySelectorAll(".js-basket-item-close");

  addEl.forEach(function (element) {
    element.addEventListener("click", () => {
      const item = element
        .closest(`${parentEl}`)
        .querySelector(".basket-item__count");
      console.log(item);
      let startCount = item.innerHTML;
      let countEl = Number(startCount) + 1;
      item.innerHTML = countEl;
    });
  });

  removeEl.forEach(function (element) {
    element.addEventListener("click", () => {
      const item = element
        .closest(`${parentEl}`)
        .querySelector(".basket-item__count");
      let startCount = item.innerHTML;
      let countEl = Number(startCount) - 1;
      if (countEl > 0) {
        item.innerHTML = countEl;
      }
    });
  });

  deleteProduct.forEach(function (element) {
    element.addEventListener("click", () => {
      element.closest(`${parentEl}`).remove();
    });
  });
});
