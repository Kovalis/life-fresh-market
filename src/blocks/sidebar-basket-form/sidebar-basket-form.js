import ready from "../../js/utils/documentReady";
import AirDatepicker from "air-datepicker";
import IMask from "imask";

ready(function () {
  const customDate = document.querySelector(`.js-input-date`);
  //console.log(customDate);
  if (customDate) {
    new AirDatepicker(".js-input-date");
  }

  const phoneField = document.querySelector("input[type=tel]");

  if (phoneField) {
    const phoneMask = IMask(phoneField, {
      mask: "+{7} (000) 000-00-00",
    });
    phoneField.addEventListener("focus", function () {
      phoneMask.updateValue();
    });
  }
});
