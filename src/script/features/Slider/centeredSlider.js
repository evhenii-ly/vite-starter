import { BREAKPOINTS } from "@shared/constants";
import { universalSliderInit } from "./universalSlider.js";

export const centeredSliderInit = () => {
  const sliderConfigurations = [
    {
      element: ".centered-slider",
      options: (slider) => {
        if (slider.querySelector(".swiper-wrapper").childElementCount <= 5) {
          slider.classList.add("swiper-slider-box--no-scrollable");
        }

        return {
          initialSlide: 2,
          centeredSlides: true,
          slidesPerView: 5,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            [BREAKPOINTS.min]: {
              slidesPerView: 'auto',
              spaceBetween: 16,
            },
            [BREAKPOINTS.phoneLg]: {
              slidesPerView: 'auto',
            },
            [BREAKPOINTS.tablet]: {
              slidesPerView: 5,
              spaceBetween: 30,
            }
          },
        }
      },
    },
  ];

  return universalSliderInit(sliderConfigurations);
};
