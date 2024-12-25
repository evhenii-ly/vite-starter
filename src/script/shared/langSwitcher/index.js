const elements = {
  currentLang: document.querySelectorAll('.lang-switcher__current'),
  overlay: document.querySelector('.overlay'),
};

const langSwitcher = () => {
  const toggleLangSwitcher = (event) => {
    const target = event.currentTarget;

    document.body.classList.toggle('overflow');
    target.closest('.lang-switcher').classList.toggle('lang-switcher--opened');
    elements.overlay.classList.toggle('app-overlay--visible');
  };

  const closeLangSwitcher = () => {
    document.body.classList.remove('overflow');

    if (document.querySelector('.lang-switcher--opened')) {
      document.querySelector('.lang-switcher--opened').classList.remove('lang-switcher--opened');
    }

    elements.overlay.classList.remove('app-overlay--visible');
  };

  elements.currentLang.forEach((element) => {
    element.addEventListener('click', toggleLangSwitcher);
  });

  [elements.overlay].forEach((element) => {
    element.addEventListener('click', closeLangSwitcher);
  });
};

export default langSwitcher;
