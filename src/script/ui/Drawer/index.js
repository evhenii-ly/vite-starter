const Drawer = (() => {
  const elements = {
    overlay: document.querySelector(".overlay"),
    closeButtons: document.querySelectorAll(".drawer__close"),
  };
  const open = (element, hasTrigger = true) => {
    const target = hasTrigger ? element.dataset.drawerTrigger : element;

    if (target) {
      document.body.classList.add("overflow");
      elements.overlay.classList.add("overlay--visible");

      if (hasTrigger) {
        document.getElementById(target).classList.add("drawer--active");
      } else {
        target.classList.add("drawer--active");
      }
    }
  };

  const close = () => {
    const activeDrawers = document.querySelectorAll(".drawer--active");

    if (activeDrawers) {
      document.body.classList.remove("overflow");
      elements.overlay.classList.remove("overlay--visible");

      activeDrawers.forEach((activeDrawer) => {
        activeDrawer.classList.remove("drawer--active");
      });
    }
  };

  const status = () => document.querySelectorAll(".drawer--active").length;

  const init = () => {
    document.addEventListener("click", (event) => {
      if (event.target.dataset.drawerTrigger) {
        open(event.target);
      }
    });

    [elements.overlay, ...document.querySelectorAll(".drawer__close")].forEach(
      (element) => {
        element.addEventListener("click", close);
      },
    );
  };

  return {
    init,
    open,
    close,
    status,
  };
})();

export default Drawer;
