const header = () => {
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header'),
      scroll = window.pageYOffset | document.body.scrollTop;

    header.classList.toggle('header--scrolled', scroll > 1);
  });
};

export default header;
