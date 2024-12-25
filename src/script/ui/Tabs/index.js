const tabsInit = () => {
  const tabLinks = document.querySelectorAll('.tabs__link');

  const openTabs = (el) => {
    const btnTarget = el.currentTarget;
    const linkTarget = btnTarget.dataset.target;

    btnTarget.closest('.tabs').querySelectorAll('.tabs__content').forEach((el) => {
      el.classList.remove('tabs__content--active');
    });

    btnTarget.closest('.tabs').querySelectorAll('.tabs__link').forEach((el) => {
      el.classList.remove('tabs__link--active');
    });

    document.querySelector('#' + linkTarget).classList.add('tabs__content--active');

    btnTarget.classList.add('tabs__link--active');

    const tabChangeEvent = new CustomEvent('tab-change', {
      bubbles: true,
      detail: { tabId: linkTarget },
    });
    btnTarget.dispatchEvent(tabChangeEvent);
  }

  tabLinks.forEach((el) => el.addEventListener('click', openTabs));
};

export default tabsInit;
