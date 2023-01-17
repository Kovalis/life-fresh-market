import ready from "../../js/utils/documentReady";

ready(function () {
  const wrapInput = "input-item";
  const inputItem = document.querySelectorAll(`.${wrapInput}`);
  if (inputItem) {
    inputItem.forEach(function (element) {
      const inputPlaceholder = element.querySelector(
        ".input-item__placeholder"
      );
      if (inputPlaceholder) {
        const inputElenet = element.querySelector("input");
        inputElenet.addEventListener("focus", () => {
          if (!element.classList.contains(`${wrapInput}_has-value`)) {
            element.classList.add(`${wrapInput}_has-value`);
          }
        });
        inputElenet.addEventListener("focusout", () => {
          if (
            element.classList.contains(`${wrapInput}_has-value`) &&
            inputElenet.value == ""
          ) {
            element.classList.remove(`${wrapInput}_has-value`);
          }
        });
      }
    });
  }
});
