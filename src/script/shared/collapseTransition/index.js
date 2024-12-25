import { BREAKPOINTS } from "@shared/constants";

const collapseTransition = () => {
  const breakpoint = window.matchMedia(`(max-width: ${BREAKPOINTS.tablet - 1}px)`);

  if (!breakpoint.matches) {
    return;
  }

  const elements = {
    triggers: document.querySelectorAll(".collapse-trigger"),
  };

  elements.triggers.forEach((element) => {
    element.addEventListener("click", (event) => {
      const target = event.currentTarget;

      target.classList.toggle("active");
      target.closest(".collapse-transition-box").querySelector(".collapse-transition").classList.toggle("collapse-transition--active");
    });
  });
};

export default collapseTransition;
