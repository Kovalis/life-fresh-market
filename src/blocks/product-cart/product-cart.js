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
          console.log(srcImg, titleProduct, priceProduct, weightProduct);

          //add in LocalStorage product
          addStore(srcImg, titleProduct, priceProduct, weightProduct);

          //addSidebarBasket(srcImg, titleProduct, priceProduct, weightProduct);
        },
        true,
      );
    });
  }

  function addSidebarBasket(srcImg, titleProduct, priceProduct, weightProduct) {
    const basketSidebar = document.querySelector(`.sidebar__exist`);
    const arrayProducts = JSON.parse(localStorage.getItem("arrayProducts"));
    const basketTemplate = basketSidebar.querySelector(`.js-template-basket-product`);
    let basketList = basketSidebar.querySelector(`.basket-list`);

    basketList.innerText = "";
    arrayProducts.forEach(function (element) {
      let voidProduct = basketTemplate.content.cloneNode(true);

      voidProduct.querySelector(".basket-item__img").src = element[0];
      voidProduct.querySelector(".basket-item__name").append(element[1]);
      voidProduct.querySelector(".basket-item__price").append(element[2]);
      voidProduct.querySelector(".basket-item__weight").append(element[3]);
      basketList.append(voidProduct);
    });
    if (srcImg && titleProduct && priceProduct && weightProduct) {
      let voidProduct = basketTemplate.content.cloneNode(true);
      voidProduct.querySelector(".basket-item__img").src = srcImg;
      voidProduct.querySelector(".basket-item__name").append(titleProduct);
      voidProduct.querySelector(".basket-item__price").append(priceProduct);
      voidProduct.querySelector(".basket-item__weight").append(weightProduct);
      basketList.append(voidProduct);
    }

    if (!basketSidebar.classList.contains("sidebar__exist_active")) {
      basketSidebar.classList.add("sidebar__exist_active");
    }

    const sidebarVoid = document.querySelector(`.sidebar__void`);
    if (!sidebarVoid.classList.contains("sidebar__void_hide")) {
      sidebarVoid.classList.add("sidebar__void_hide");
    }
  }

  // LocalStorage
  function addStore(srcImg, titleProduct, priceProduct, weightProduct) {
    let arrayProducts = JSON.parse(localStorage.getItem("arrayProducts"));
    if (srcImg && titleProduct && priceProduct && weightProduct) {
      console.log("click btn add product");
      // дополняем информацию корзины из [] в localStorage
      arrayProducts.push([srcImg, titleProduct, priceProduct, weightProduct]);
      console.log(arrayProducts);
      localStorage.setItem("arrayProducts", JSON.stringify(arrayProducts));
      addSidebarBasket();
    } else {
      if (arrayProducts) {
        console.log(JSON.parse(localStorage.getItem("arrayProducts")));
        // записываем инфу из [] в сайдбар
        addSidebarBasket();
      } else {
        console.log(JSON.parse(localStorage.getItem("arrayProducts")));
        //записываем пустой массив в localStorage
        const voidArray = [];
        localStorage.setItem("arrayProducts", JSON.stringify(voidArray));
        console.log(JSON.parse(localStorage.getItem("arrayProducts")));
      }
    }
  }

  addStore();

  function removeElementStore(srcImg, titleProduct, priceProduct, weightProduct) {
    let arrayProducts = JSON.parse(localStorage.getItem("arrayProducts"));
    console.log(arrayProducts);
  }
});
