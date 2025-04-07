const elements = {
  currentLang: document.querySelectorAll('.lang-switcher__current'),
  overlay: document.querySelector('.overlay'),
};

const langSwitcher = () => {
  const toggleLangSwitcherMobile = (event) => {
    const target = event.currentTarget;

    document.body.classList.toggle('overflow');
    target.closest('.lang-switcher').classList.toggle('lang-switcher--opened');
    elements.overlay.classList.toggle('overlay--visible');
  };

  const closeLangSwitcherMobile = () => {
    document.body.classList.remove('overflow');

    const openedSwitcher = document.querySelector('.lang-switcher--opened');
    if (openedSwitcher) {
      openedSwitcher.classList.remove('lang-switcher--opened');
    }

    elements.overlay.classList.remove('overlay--visible');
  };

  const bindEvents = () => {
    elements.currentLang.forEach((element) => {
      element.addEventListener('touchend', toggleLangSwitcherMobile);
    });

    elements.overlay.addEventListener('touchend', closeLangSwitcherMobile);
  };

  bindEvents();
};

export default langSwitcher;
