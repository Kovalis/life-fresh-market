/* global document */
import ready from "../../js/utils/documentReady";
import Swiper, { Navigation } from "swiper";

ready(function () {
  const parentEl = ".recipes";
  const PARENT = document.querySelector(`${parentEl}`);
  if (PARENT) {
    new Swiper(`${parentEl} .swiper`, {
      loop: false,
      modules: [Navigation],
      slidesPerView: "auto",
      navigation: {
        nextEl: `${parentEl} .swiper-button-next`,
        prevEl: `${parentEl} .swiper-button-prev`,
      },
      spaceBetween: 9,
      breakpoints: {
        1200: {
          slidesPerView: 3,
        },
      },
    });
  }
});
