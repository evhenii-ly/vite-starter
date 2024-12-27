const scrollImageAnimation = () => {
  const animatedImages = document.querySelectorAll('.animated-image');
  const section = document.querySelector('.about-company-section__content');

  animatedImages.forEach((element) => {
    function handleScroll() {
      const rect = section.getBoundingClientRect();

      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        element.classList.add('animated-image--active');

        window.removeEventListener('scroll', handleScroll);
      }
    }

    handleScroll();

    window.addEventListener('scroll', handleScroll);
  });
};

export default scrollImageAnimation;
