const Toast = (message, type = "success", timeToShow = 5000) => {
  const toastElement = document.createElement('div');
  toastElement.className = `toast toast--${type}`;
  toastElement.innerHTML = `
        <button class="toast__close" type="button">
            <svg class="icon" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.86548 19.7056L19.6541 5.91698L21.1861 7.44905L7.39754 21.2376L5.86548 19.7056Z" fill="currentColor"/>
              <path d="M20.7373 19.7056L6.94873 5.91699L5.41667 7.44906L19.2052 21.2376L20.7373 19.7056Z" fill="currentColor"/>
            </svg>
        </button>
        ${message}
  `;

  document.body.appendChild(toastElement);

  const closeButton = toastElement.querySelector('.toast__close');
  closeButton.addEventListener('click', () => handleClose(0));

  setTimeout(() => {
    toastElement.classList.add('toast--visible');

    handleClose();
  }, 400);

  const handleClose = (delay = timeToShow) => {
    setTimeout(() => {
      toastElement.classList.remove('toast--visible');
      toastElement.classList.add('toast--hidden');

      setTimeout(() => {
        toastElement.remove();
      }, delay - 2000);
    }, delay);
  };


};

window.showToast = Toast;

export default Toast;
