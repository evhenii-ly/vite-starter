import { BREAKPOINTS } from '../constants/index.js';

const scrollTextAnimation = () => {
  const animatedText = document.querySelectorAll('.special-font');
  const breakpointTabletSmall = window.matchMedia(
    `(min-width: ${BREAKPOINTS.tabletSmall}px)`,
  );

  if (breakpointTabletSmall.matches) {
    animatedText.forEach((element) => {
      const text = element.textContent;
      const speed = 50;
      let i = 0;

      element.textContent = '';

      function typeWriter() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
      }

      function handleScroll() {
        const rect = element.getBoundingClientRect();

        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          typeWriter();

          window.removeEventListener('scroll', handleScroll);
        }
      }

      window.addEventListener('scroll', handleScroll);

      const rect = element.getBoundingClientRect();

      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setTimeout(() => {
          typeWriter();
        }, 300);
      }
    });
  }
};

export default scrollTextAnimation;
