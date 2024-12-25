import { BREAKPOINTS } from '@shared/constants';

const accordionInit = () => {
  const elements = {
    accordions: document.querySelectorAll("[data-accordion]"),
  };

  const toggleOpen = element => {
    const accordion = element.closest(".accordion");
    const accordionContent = accordion.querySelector("[data-accordion-content]");

    if (accordion) {
      element.classList.toggle("accordion__header--active");
      element.classList.toggle("active");
      accordion.classList.toggle("active");
      accordionContent.classList.toggle("active");
    }
  };

  const checkMediaMatch = () => {
    const breakpointsMatch = {};

    Object.keys(BREAKPOINTS).forEach(key => {
      breakpointsMatch[key] = window.matchMedia(`(max-width: ${BREAKPOINTS[key]}px)`).matches;
    });

    elements.accordions.forEach(accordion => {
      const breakpointName = accordion.dataset.accordion;
      const accordionHeader = accordion.querySelector('[data-accordion-header]');
      const accordionContent = accordion.querySelector('[data-accordion-content]');
      const breakpointValue = BREAKPOINTS[breakpointName];

      if (breakpointValue !== undefined) {
        const mediaMatch = breakpointsMatch[breakpointName];

        if (mediaMatch) {
          accordion.classList.add('accordion');
          accordionHeader.classList.add('accordion__header');
          accordionContent.classList.add('accordion__content');
        } else {
          accordion.classList.remove('accordion');
          accordionHeader.classList.remove('accordion__header');
          accordionContent.classList.remove('accordion__content');
        }
      }
    });
  };

  const debounce = (func, wait) => {
    let timeout;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(), wait);
    };
  };

  const debouncedCheckMediaMatch = debounce(checkMediaMatch, 150);

  checkMediaMatch();
  window.addEventListener('resize', debouncedCheckMediaMatch);

  elements.accordionHeadings = document.querySelectorAll('.accordion__header');

  elements.accordionHeadings.forEach(accordionHeading => {
    accordionHeading.addEventListener('click', event => {
      toggleOpen(event.currentTarget);
    });
  });
};

export default accordionInit;
