import '@style/theme/pages/home.scss';

const initPage = () => {
  const divElement = document.querySelector('.team-section__list');
  const wrapper = document.querySelector('.team-section__wrapper');

  function checkScrollEnd() {
    const scrollLeft = divElement.scrollLeft;
    const scrollWidth = divElement.scrollWidth;
    const clientWidth = divElement.clientWidth;

    wrapper.classList.toggle(
      'team-section__wrapper--end',
      scrollLeft + clientWidth >= scrollWidth,
    );
  }

  // Добавляем обработчик события scroll
  divElement.addEventListener('scroll', checkScrollEnd);
};

document.addEventListener('DOMContentLoaded', () => {
  initPage();
});

window.addEventListener('load', () => {}, false);
