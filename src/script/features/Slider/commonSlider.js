import { BREAKPOINTS } from "@shared/constants";
import { universalSliderInit } from "./universalSlider.js";

export const commonSliderInit = () => {
  const sliderConfigurations = [
    {
      element: ".common-slider",
      options: (slider) => {
        const MAX_SLIDER_ITEMS = 3;
        const sliderElement = slider.querySelector(".swiper");
        const slidesPerView = sliderElement.dataset?.slides ? parseInt(sliderElement.dataset.slides) : MAX_SLIDER_ITEMS;

        if (slider.querySelector(".swiper-wrapper").childElementCount <= MAX_SLIDER_ITEMS) {
          slider.classList.add("swiper-slider-box--no-scrollable");
        }

        return {
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            [BREAKPOINTS.min]: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            [BREAKPOINTS.phoneLg]: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            [BREAKPOINTS.tablet]: {
              slidesPerView,
              spaceBetween: 30,
            }
          },
        }
      },
    },
  ];

  return universalSliderInit(sliderConfigurations);
};
