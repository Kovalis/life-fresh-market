// import ready from "../js/utils/documentReady.js";
// import getScrollSize from "../js/utils/getScrollSize.js";

// ready(function () {
//   console.log("DOM героически построен!");
//   // Добавление кастомного свойства с системной шириной скролла
//   document.documentElement.style.setProperty("--css-scroll-size", `${getScrollSize()}px`);
// });

// import $ from "jquery"; // Перед использованием установить как зависимость
// $(function () {
//   console.log("jQuery героически сработал!");
// });

// LocalStorage
export  function addStore(srcImg, titleProduct, priceProduct, weightProduct) {
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

export function removeElementStore(indexElement) {
    let arrayProducts = JSON.parse(localStorage.getItem("arrayProducts"));
    arrayProducts.splice(indexElement, 1);
    localStorage.setItem("arrayProducts", JSON.stringify(arrayProducts));
}