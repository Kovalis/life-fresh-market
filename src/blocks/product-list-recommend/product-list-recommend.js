import ready from "../../js/utils/documentReady";
import Swiper, { Navigation, Scrollbar } from "swiper";

ready(function () {
  console.log("23562");
  const parentEl = ".js-product-list-recommend";
  const PARENT = document.querySelector(`${parentEl}`);
  console.log(PARENT);
  if (PARENT) {
    console.log("3489");
    const swiper = new Swiper(`${parentEl} .swiper`, {
      modules: [Navigation, Scrollbar],
      slidesPerView: 3,
      navigation: {
        nextEl: `${parentEl} .swiper-button-next`,
        prevEl: `${parentEl} .swiper-button-prev`,
      },
      scrollbar: {
        el: `${parentEl} .swiper-scrollbar`,
        draggable: true,
      },
      spaceBetween: 9,
      breakpoints: {
        992: {
          slidesPerView: 4,
          loop: true,
        },
        1280: {
          slidesPerView: 5,
          loop: true,
        },
      },
    });
  }
});
