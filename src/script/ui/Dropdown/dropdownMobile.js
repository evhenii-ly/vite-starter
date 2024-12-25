import { BREAKPOINTS } from "@shared/constants";

const dropdownMobile = () => {
  const breakpoint = window.matchMedia(`(max-width: ${BREAKPOINTS.laptop - 1}px)`);

  const init = () => {
    const elements = {
      dropdownParents: document.querySelectorAll(".header-dropdown"),
      dropdownContainers: document.querySelectorAll(".header-dropdown__container"),
      backButtons: document.querySelectorAll(".header-dropdown__back"),
    };
    const dropdownToggle = (element) => {
      element.classList.toggle("header-dropdown--active");
    };

    const dropdownClose = (element) => {
      element.closest(".header-dropdown").classList.remove("header-dropdown--active");
    };

    elements.dropdownParents.forEach((dropdownParent) => {
      dropdownParent.addEventListener("touchend", (event) => {
        dropdownToggle(event.currentTarget);
      });
    });

    elements.dropdownContainers.forEach((dropdownContainer) => {
      dropdownContainer.addEventListener("touchend", (event) => {
        event.stopPropagation();
      });
    });

    elements.backButtons.forEach((backButton) => {
      backButton.addEventListener("touchend", (event) => {
        dropdownClose(event.currentTarget);
      });
    });
  };

  const handleBreakpointChange = (event) => {
    if (event.matches) {
      init();
    }
  };

  if (breakpoint.matches) {
    init();
  }

  breakpoint.addEventListener("change", handleBreakpointChange);
};

export default dropdownMobile;
