import ready from "../../js/utils/documentReady";
import Swiper, { Navigation, Scrollbar, EffectCards } from "swiper";

ready(function () {
  const parentEl = ".main-slider";
  const PARENT = document.querySelector(`${parentEl}`);

  if (PARENT) {
    const swiper3 = new Swiper(`${parentEl} .swiper`, {
      modules: [Navigation, Scrollbar, EffectCards],
      slidesPerView: 1,
      navigation: {
        nextEl: `${parentEl} .swiper-button-next`,
        prevEl: `${parentEl} .swiper-button-prev`,
      },
      effect: "cards",
      grabCursor: true,
      spaceBetween: 9,
      breakpoints: {
        992: {
          //effect: "cards",
          spaceBetween: 0,
        },
      },
    });
  }
});
