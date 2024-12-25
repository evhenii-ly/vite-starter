const readmore = () => {
  const truncateEl = document.querySelector('.truncate');
  const moreButton = document.querySelector('[data-more-button]');
  const truncateInnerEl = document.querySelector('.truncate__inner');

  if (!truncateEl || !moreButton || !truncateInnerEl) {
    return false;
  }

  const divHeight = truncateInnerEl.scrollHeight
  const lineHeight = parseInt(window.getComputedStyle(truncateInnerEl).lineHeight);
  const lines = divHeight / lineHeight;

  if (lines < 10) {
    moreButton.style.display = "none";

    return false;
  }

  const setTruncateHeight = () => {
    const truncateHeight = truncateEl.scrollHeight;
    truncateEl.style.setProperty("--truncate-height", `${truncateHeight}px`);
  };

  const open = () => {
    truncateEl.classList.remove('truncate--line-clamped');
    window.requestAnimationFrame(() => {
      const truncateInnerHeight = truncateInnerEl.scrollHeight;
      truncateEl.style.setProperty("--truncate-height-expanded", `${truncateInnerHeight}px`);
      truncateEl.classList.add('truncate--expanded');
    });
  };

  const close = () => {
    truncateEl.classList.remove('truncate--expanded');
    window.requestAnimationFrame(() => {
      setTruncateHeight();
      truncateEl.classList.add('truncate--line-clamped');

      const parentSection = truncateEl.closest(".section");
      if (parentSection) {
        parentSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  };

  moreButton.addEventListener('click', (event) => {
    const target = event.currentTarget;

    event.preventDefault();

    if (truncateEl.classList.contains('truncate--expanded')) {
      target.innerText = target.dataset.readmoreFull;
      close();
    } else {
      target.innerText = target.dataset.readmoreLess;
      open();
    }
  });

  window.addEventListener('resize', setTruncateHeight);
  window.addEventListener('DOMContentLoaded', setTruncateHeight);
  window.addEventListener('load', setTruncateHeight);
};

export default readmore;
