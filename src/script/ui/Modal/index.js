const Modal = (() => {
  const elements = {
    triggers: document.querySelectorAll("[data-modal-trigger]"),
    overlay: document.querySelector(".overlay"),
    closeButtons: document.querySelectorAll(".modal__close"),
  };
  const open = (element, hasTrigger = true) => {
    const target = hasTrigger ? element.dataset.modalTrigger : element;

    if (target) {
      document.body.classList.add("overflow");
      elements.overlay.classList.add("overlay--visible");

      if (hasTrigger) {
        document.getElementById(target).classList.add("modal--active");
      } else {
        target.classList.add("modal--active");
      }
    }
  };

  const close = () => {
    const activeModals = document.querySelectorAll(".modal--active");

    if (activeModals) {
      document.body.classList.remove("overflow");
      elements.overlay.classList.remove("overlay--visible");

      activeModals.forEach((activeModal) => {
        activeModal.classList.remove("modal--active");
      });

      const modalCloseEvent = new CustomEvent("modalClosed", {
        bubbles: true,
      });

      document.dispatchEvent(modalCloseEvent);
    }
  };

  const status = () => document.querySelectorAll(".modal--active").length;

  const init = () => {
    elements.triggers.forEach((element) => {
      element.addEventListener("click", (event) => {
        open(event.currentTarget);
      });
    });

    [elements.overlay, ...document.querySelectorAll(".modal__close")].forEach(
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

export default Modal;
