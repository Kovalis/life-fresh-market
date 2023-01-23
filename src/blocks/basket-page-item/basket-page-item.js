import ready from "../../js/utils/documentReady";

ready(function () {
  // const wrapBasket = document.querySelector(".basket-page-list");
  // if (wrapBasket) {
  //   const basketList = wrapBasket.querySelectorAll(".basket-page-item__btn");
  //   console.log(basketList);
  //   basketList.forEach(function (item) {
  //     console.log(item);
  //     item.addEventListener("click", function (element) {
  //       console.log("3464");
  //       if (element.target.classList.contains("basket-page-item__delete")) {
  //         element.target.closest(".js-basket-page-item").remove();
  //       }
  //       if (element.target.classList.contains("js-basket-page-item-add")) {
  //         console.log("796");
  //         const btnElement = element.target
  //           .closest(".basket-count-wrap")
  //           .querySelector(".basket-count-wrap__count");
  //         let startCount = btnElement.innerHTML;
  //         let countEl = Number(startCount) + 1;
  //         btnElement.innerHTML = countEl;
  //       }
  //       if (element.target.classList.contains("js-basket-page-item-remove")) {
  //         console.log("4343");
  //         const btnElement = element.target
  //           .closest(".basket-count-wrap")
  //           .querySelector(".basket-count-wrap__count");
  //         let startCount = btnElement.innerHTML;
  //         let countEl = Number(startCount) - 1;
  //         if (countEl > 0) {
  //           btnElement.innerHTML = countEl;
  //         }
  //       }
  //     });
  //   });
  // }
});
