const Tooltip = () => {
  const overlay = document.querySelector(".tooltip-overlay");
  const references = document.querySelectorAll(".tooltip__button");

  const toggleTooltip = (event) => {
    const target = event.currentTarget;

    target.classList.toggle("tooltip__button--active");
    overlay.classList.add("tooltip-overlay--visible");
  }

  const closeTooltip = () => {
    overlay.classList.remove("tooltip-overlay--visible");
    references.forEach((reference) => {
      reference.classList.remove("tooltip__button--active");
    });
  }

  references.forEach(reference => {
    reference.addEventListener("click", toggleTooltip);
  });

  overlay.addEventListener("click", closeTooltip);
};

export default Tooltip;
