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
export function addStore(srcImg, titleProduct, priceProduct, weightProduct) {
  let arrayProducts = JSON.parse(localStorage.getItem("arrayProducts"));
  if (srcImg && titleProduct && priceProduct && weightProduct) {
    // дополняем информацию корзины из [] в localStorage
    arrayProducts.push([srcImg, titleProduct, priceProduct, weightProduct]);
    localStorage.setItem("arrayProducts", JSON.stringify(arrayProducts));
    addSidebarBasket();
  } else {
    if (arrayProducts) {
      // записываем инфу из [] в сайдбар
      addSidebarBasket();
    } else {
      //записываем пустой массив в localStorage
      const voidArray = [];
      localStorage.setItem("arrayProducts", JSON.stringify(voidArray));
    }
  }
}

function addSidebarBasket() {
  const basketSidebar = document.querySelector(`.sidebar__exist`);
  if (basketSidebar) {
    const basketTemplate = basketSidebar.querySelector(`.js-template-basket-product`);
    let basketList = basketSidebar.querySelector(`.basket-list`);
    basketList.innerText = "";

    if (!basketSidebar.classList.contains("sidebar__exist_active")) {
      basketSidebar.classList.add("sidebar__exist_active");
    }

    const sidebarVoid = document.querySelector(`.sidebar__void`);
    if (!sidebarVoid.classList.contains("sidebar__void_hide")) {
      sidebarVoid.classList.add("sidebar__void_hide");
    }

    showProductOnPage(basketTemplate, basketList);
  } else {
    const basketTemplate = document.querySelector(`.js-template-basket-page-item`);
    let basketList = document.querySelector(`.basket-page-list`);
    basketList.innerText = "";

    showProductOnPage(basketTemplate, basketList);
  }
}

function showProductOnPage(basketTemplate, basketList) {
  const arrayProducts = JSON.parse(localStorage.getItem("arrayProducts"));

  arrayProducts.forEach(function (element) {
    let voidProduct = basketTemplate.content.cloneNode(true);
    voidProduct.querySelector(".js-basket-item__img").src = element[0];
    voidProduct.querySelector(".js-basket-item__name").append(element[1]);
    voidProduct.querySelector(".js-basket-item__price").append(element[2]);
    if (voidProduct.querySelector(".js-basket-item__weight")) {
      voidProduct.querySelector(".js-basket-item__weight").append(element[3]);
    }
    basketList.append(voidProduct);
  });
}

export function removeElementStore(indexElement) {
  let arrayProducts = JSON.parse(localStorage.getItem("arrayProducts"));
  arrayProducts.splice(indexElement, 1);
  localStorage.setItem("arrayProducts", JSON.stringify(arrayProducts));
}

const parentEl = ".js-basket-item",
  wrapBasket = document.querySelector(".js-wrap-product-list");

if (wrapBasket) {
  wrapBasket.addEventListener("click", function (element) {
    if (element.target.classList.contains("js-basket-item__close")) {
      const elementsList = element.target.closest(".js-basket-item");
      const parentEl = Array.prototype.slice.call(
        element.target.closest(".js-wrap-product-list").children,
      );
      removeElementStore(parentEl.indexOf(elementsList));
      elementsList.remove();
    }

    if (element.target.classList.contains("js-basket-list-btn-add")) {
      const item = element.target.closest(`${parentEl}`).querySelector(".js-basket-item__count");
      let startCount = item.innerHTML;
      let countEl = Number(startCount) + 1;
      item.innerHTML = countEl;
    }

    if (element.target.classList.contains("js-basket-list-btn-remove")) {
      const item = element.target.closest(`${parentEl}`).querySelector(".js-basket-item__count");
      let startCount = item.innerHTML;
      let countEl = Number(startCount) - 1;
      if (countEl > 0) {
        item.innerHTML = countEl;
      }
    }
  });
}
