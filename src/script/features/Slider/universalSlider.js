import Swiper from "swiper";
import {
  Pagination,
  Navigation,
  Grid,
  Autoplay,
  FreeMode,
} from "swiper/modules";

export const initSlider = (element, options = {}) => {
  if (!element) return null;
  return new Swiper(element, options);
};

const preloadImages = (slider) => {
  const slides = slider.slides;
  for (const slide of slides) {
    const images = slide.querySelectorAll("img");
    for (const image of images) {
      const src = image.getAttribute("src");
      if (src) {
        const img = new Image();
        img.src = src;
      }
    }
  }
};

export const universalSliderInit = (sliderConfigurations) => {
  const createdSliders = [];

  sliderConfigurations.forEach(({ element, options, mediaBreakpoints }) => {
    const sliderElements =
      typeof element === 'string'
        ? document.querySelectorAll(element)
        : (element instanceof HTMLElement ? [element] : []);

    if (!sliderElements.length) {
      return;
    }

    sliderElements.forEach((sliderElement) => {
      const sliderBox = sliderElement.closest('.swiper-slider-box');
      const commonOptions = {
        spaceBetween: 20,
        modules: [Navigation, Pagination, Grid, Autoplay, FreeMode],
        navigation: {
          nextEl: sliderBox.querySelector(".swiper-button-next"),
          prevEl: sliderBox.querySelector(".swiper-button-prev"),
        },
        on: {
          init: function () {
            preloadImages(this);
          },
        },
        ...options(sliderBox),
      };

      const slider = initSlider(sliderElement, { ...commonOptions, mediaBreakpoints });
      if (slider) createdSliders.push(slider);
    });
  });

  return createdSliders.length === 1 ? createdSliders[0] : createdSliders;
};
