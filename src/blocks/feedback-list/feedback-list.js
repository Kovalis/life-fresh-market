import ready from "../../js/utils/documentReady";
import Swiper, { Navigation } from "swiper";

ready(function () {
  const parentEl = ".feedback-list",
    PARENT = document.querySelector(`${parentEl}`),
    WIDTH_INIT = 1200;

  initSlider();

  window.addEventListener(
    "resize",
    function (event) {
      initSlider();
    },
    true
  );

  function initSlider() {
    if (PARENT && window.innerWidth > WIDTH_INIT) {
      const parentSlider = PARENT.querySelector(".feedback-list__right"),
        templateSlider = PARENT.querySelector(".js-feedback-wrap-slider"),
        itemsSlider = parentSlider.querySelectorAll(".feedback-cart");

      parentSlider.innerHTML += templateSlider.innerHTML;
      const wrapSlider = parentSlider.querySelector(".swiper-wrapper");
      itemsSlider.forEach(function (elem) {
        wrapSlider.innerHTML += `<div class='swiper-slide'>${elem.outerHTML}</div>`;
      });

      const oldSlide = PARENT.querySelectorAll(
        ".feedback-list__right > .feedback-cart"
      );

      oldSlide.forEach(function (elem) {
        elem.classList.add("feedback-cart_hide");
      });
      const mainSlider = PARENT.querySelector(".feedback-list__right .swiper");
      mainSlider.classList.remove("feedback-cart__swiper_hide");
      if (mainSlider) {
        const swiper2 = new Swiper(`${parentEl} .swiper`, {
          loop: false,
          modules: [Navigation],
          slidesPerView: 1,
          navigation: {
            nextEl: `${parentEl} .swiper-button-next`,
            prevEl: `${parentEl} .swiper-button-prev`,
          },
          spaceBetween: 40,
          breakpoints: {
            1200: {
              slidesPerView: 4,
            },
          },
        });
      }
    } else {
      const oldSlide = PARENT.querySelectorAll(
        ".feedback-list__right > .feedback-cart"
      );
      const mainSlider = PARENT.querySelector(".feedback-list__right .swiper");
      if (mainSlider) {
        mainSlider.classList.add("feedback-cart__swiper_hide");
      }

      oldSlide.forEach(function (elem) {
        elem.classList.remove("feedback-cart_hide");
      });
    }
  }
});
