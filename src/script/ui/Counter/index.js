const Counter = () => {
  const elements = {
    counters: document.querySelectorAll(".counter"),
  };

  elements.counters.forEach((counter) => {
    const field = counter.querySelector(".counter__field");
    const increase = counter.querySelector(".counter__button--increase");
    const decrease = counter.querySelector(".counter__button--decrease");
    let initialValue = "1";

    increase.addEventListener("click", () => {
      initialValue = field.value = Number(field.value) + 1;
    });

    decrease.addEventListener("click", () => {
      if (Number(field.value) > 1) {
        initialValue = field.value = Number(field.value) - 1;
      }
    });

    field.addEventListener("input", (event) => {
      const target = event.target;
      const mask = /^[1-9]\d*$/;

      if (mask.test(target.value)) {
        initialValue = target.value;
      }

      if (!mask.test(target.value)) {
        target.value = initialValue;
      }
    });
  });
};

export default Counter;
