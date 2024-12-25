const hoverCircleAnimation = () => {
  const elements = {
    buttons: document.querySelectorAll('.button--hover-circle'),
  };

  function handleMousePosition(button, event) {
    const span = button.querySelector('span');
    const parentOffset = button.getBoundingClientRect();
    const relX = event.clientX - parentOffset.left;
    const relY = event.clientY - parentOffset.top;

    span.style.top = `${relY}px`;
    span.style.left = `${relX}px`;
  }

  if (elements.buttons) {
    elements.buttons.forEach(button => {
      button.addEventListener('mouseenter', event =>
        handleMousePosition(button, event),
      );
      button.addEventListener('mouseout', event =>
        handleMousePosition(button, event),
      );
    });
  }
};

export default hoverCircleAnimation;
