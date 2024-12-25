const quanityField = () => {
  const elements = {
    sizeOptions: document.querySelectorAll("[data-quantity-field]"),
  };

  const validateInput = (event) => {
    const target = event.target;
    if (!/^[1-9][0-9]*$/.test(target.value) && target.value !== "") {
      target.value = target.value.replace(/[^0-9]/g, "").replace(/^0+/g, "");

      return false;
    }

    return true;
  };

  elements.sizeOptions.forEach((sizeOption) => {
    sizeOption.addEventListener("input", (event) => {
      const isValid = validateInput(event);
      const checkbox = event.target
        .closest("label")
        .querySelector(".form__control-default");

      if (checkbox) {
        checkbox.checked = !(!isValid || event.target.value === "");
      }
    });
  });
};

export default quanityField;
