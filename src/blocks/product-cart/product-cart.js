import { addStore } from "../../js/script";
import ready from "../../js/utils/documentReady";

ready(function () {
  const favoriteEl = "product-cart__favorite";
  const favoriteBtn = document.querySelectorAll(`.${favoriteEl}`);

  if (favoriteBtn) {
    favoriteBtn.forEach(function (element) {
      element.addEventListener(
        "click",
        function (event) {
          event.preventDefault();
          this.classList.toggle(`${favoriteEl}_active`);
        },
        true,
      );
    });
  }

  // добавление в корзину
  const addBasket = "js-add-in-basket";
  const basketBtn = document.querySelectorAll(`.${addBasket}`);
  if (basketBtn.length > 0) {
    const basketSidebar = document.querySelector(`.sidebar__exist`);

    basketBtn.forEach(function (element) {
      element.addEventListener(
        "click",
        function (event) {
          event.preventDefault();
          if (!basketSidebar.classList.contains("sidebar__exist_active")) {
            basketSidebar.classList.add("sidebar__exist_active");
          }
          this.closest(".product-cart").classList.add("product-cart__btn_disable");
          const srcImg = this.closest(".product-cart").querySelector(".product-cart__img img").src,
            titleProduct =
              this.closest(".product-cart").querySelector(".product-cart__title").innerText,
            priceProduct = this.closest(".product-cart").querySelector(".price-main").innerText,
            weightProduct = this.closest(".product-cart").getAttribute("data-weight");

          //add in LocalStorage product
          addStore(srcImg, titleProduct, priceProduct, weightProduct);

          //addSidebarBasket(srcImg, titleProduct, priceProduct, weightProduct);
        },
        true,
      );
    });
  }

  addStore();
});
