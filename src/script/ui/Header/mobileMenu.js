const mobileMenu = () => {
  const elements = {
    navIcons: document.querySelectorAll(".js-nav-button"),
    navWrapper: document.getElementById("js-nav-wrapper"),
  };

  const toggleMenu = (event) => {
    document.body.classList.toggle("overflow");
    document.body.classList.toggle("active-menu");
    elements.navWrapper.classList.toggle("header-nav--visible");
    event.currentTarget.classList.toggle("burger--active");
  };

  elements.navIcons.forEach(navIcon => {
    navIcon.addEventListener("click", toggleMenu);
  });
};

export default mobileMenu;
