const TeamSection = () => {
  const divElement = document.querySelector('.team-section__list');
  const wrapper = document.querySelector('.team-section__wrapper');

  const checkScrollEnd = () => {
    const scrollLeft = divElement.scrollLeft;
    const scrollWidth = divElement.scrollWidth;
    const clientWidth = divElement.clientWidth;

    wrapper.classList.toggle(
      'team-section__wrapper--end',
      scrollLeft + clientWidth >= scrollWidth,
    );
  };

  divElement.addEventListener('scroll', checkScrollEnd);
};

export default TeamSection;
