import ready from "../../js/utils/documentReady";

ready(function () {
  // const favoriteEl = "product-cart__favorite";
  // const favoriteBtn = document.querySelectorAll(`.${favoriteEl}`);

  // if (favoriteBtn) {
  //   favoriteBtn.forEach(function (element) {
  //     element.addEventListener(
  //       "click",
  //       function (event) {
  //         event.preventDefault();
  //         this.classList.toggle(`${favoriteEl}_active`);
  //       },
  //       true
  //     );
  //   });
  // }

  // добавление в корзину
  const addBasket = "js-add-in-basket-recommend";
  const basketBtn = document.querySelectorAll(`.${addBasket}`);
  if (basketBtn.length > 0) {
    const basketSidebar = document.querySelector(`.sidebar__exist`);
    const basketTemplate = basketSidebar.querySelector(`.js-template-basket-product`);
    const basketList = basketSidebar.querySelector(`.basket-list`);
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

          let voidProduct = basketTemplate.content.cloneNode(true);
          voidProduct.querySelector(".basket-item__img").src = srcImg;
          voidProduct.querySelector(".basket-item__name").append(titleProduct);
          voidProduct.querySelector(".basket-item__price").append(priceProduct);
          voidProduct.querySelector(".basket-item__weight").append(weightProduct);
          basketList.append(voidProduct);

          const sidebarVoid = document.querySelector(`.sidebar__void`);
          if (!sidebarVoid.classList.contains("sidebar__void_hide")) {
            sidebarVoid.classList.add("sidebar__void_hide");
          }
        },
        true,
      );
    });
  }
});
