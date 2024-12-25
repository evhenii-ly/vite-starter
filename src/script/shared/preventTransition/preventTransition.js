const preventTransition = () => {
  const classes = document.body.classList;
  let timer = 0;

  window.addEventListener('resize', () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    } else classes.add('preload');

    timer = setTimeout(() => {
      classes.remove('preload');
      timer = null;
    }, 100);
  });
};

export default preventTransition;
