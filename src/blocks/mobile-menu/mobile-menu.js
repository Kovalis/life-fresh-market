import ready from "../../js/utils/documentReady";

ready(function () {
  const BURGER_BTN = "burger-menu";
  const MOBILE_MENU = "mobile-menu";
  const burger = document.querySelector(`.${BURGER_BTN}`);
  //WIDTH_INIT = 1200;

  if (burger) {
    burger.addEventListener(
      "click",
      function (event) {
        event.preventDefault();
        const burgerMenu = document.querySelector(`.${MOBILE_MENU}`);
        burgerMenu.classList.toggle(`${MOBILE_MENU}_show`);
      },
      true
    );

    const submenu = document.querySelectorAll(".mobile-menu__a_submenu");
    submenu.forEach(function (element) {
      element.addEventListener(
        "click",
        function (event) {
          event.preventDefault();
          const innerMenu = element
            .closest(".mobile-menu__li")
            .querySelector(".mobile-menu__submenu");
          const innerSubMenu = document.querySelectorAll(
            ".mobile-menu__submenu"
          );
          innerSubMenu.forEach(function (elementMenu) {
            if (
              !elementMenu.classList.contains("mobile-menu__submenu_active") &&
              innerMenu == elementMenu
            ) {
              elementMenu.classList.add("mobile-menu__submenu_active");
            } else {
              elementMenu.classList.remove("mobile-menu__submenu_active");
            }
          });
        },
        true
      );
    });
  }
});
