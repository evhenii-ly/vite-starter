const readmore = () => {
  const moreButtons = document.querySelectorAll('[data-more-button]');

  if (!moreButtons.length) {
    return false;
  }

  moreButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const target = event.currentTarget;
      const targetText = target.querySelector('.more-button__text');
      const parentContainer = target.closest('.show-more');
      const buttonTextArr = target.dataset.moreButton.split(', ');

      parentContainer
        .querySelector('.show-more__content')
        .classList.toggle('show-more__content--expanded');

      if (parentContainer.querySelector('.show-more__content--expanded')) {
        targetText.textContent = buttonTextArr[1];
      } else {
        targetText.textContent = buttonTextArr[0];

        setTimeout(() => {
          parentContainer.scrollIntoView({
            behavior: 'smooth',
          });
        }, 100);
      }
    });
  });
};

export default readmore;
