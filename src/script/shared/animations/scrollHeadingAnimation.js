const scrollHeadingAnimation = () => {
  const animatedHeading = document.querySelectorAll('.animated-heading');

  function handleScroll() {
    animatedHeading.forEach((element) => {
      const rect = element.getBoundingClientRect();

      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        element.classList.add('animated-heading--active');
      }
    });
  }

  handleScroll();

  window.addEventListener('scroll', handleScroll);
};

export default scrollHeadingAnimation;
