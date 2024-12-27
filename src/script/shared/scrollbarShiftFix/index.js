const scrollbarShiftFix = () => {
  const getScrollbarWidth = () =>
    window.innerWidth - document.documentElement.clientWidth;

  const root = document.documentElement;
  const scrollWidth = getScrollbarWidth();

  root.style.setProperty('--scroll-width', scrollWidth + 'px');
};

export default scrollbarShiftFix;
