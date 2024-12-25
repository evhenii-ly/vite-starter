const animationTrigger = () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animation-start');
      }
    });
  });

  const squares = document.querySelectorAll('.animation-trigger');

  squares.forEach((element) => observer.observe(element));
};

export default animationTrigger;
