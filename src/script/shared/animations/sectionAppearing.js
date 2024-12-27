const animationTrigger = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const intersectionRect = entry.intersectionRect;
        const viewportHeight = window.innerHeight;
        const objectCenterY =
          intersectionRect.top + intersectionRect.height / 2;
        const isInViewportCenter =
          objectCenterY >= 0 && objectCenterY <= viewportHeight;

        if (entry.intersectionRatio >= 0.7 && isInViewportCenter) {
          entry.target.classList.add('section-start');
        } else {
          entry.target.classList.remove('section-start');
        }
      });
    },
    {
      threshold: 0.7,
      root: null,
    },
  );

  const squares = document.querySelectorAll('.section-trigger');
  squares.forEach((element) => observer.observe(element));
};

export default animationTrigger;
