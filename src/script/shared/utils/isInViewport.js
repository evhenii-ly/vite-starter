const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  const verticalInViewport = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  const horizontalInViewport = rect.left >= 0 && rect.right <= (window.innerWidth || document.documentElement.clientWidth);

  return {
    inViewport: verticalInViewport && horizontalInViewport,
    verticalInViewport,
    horizontalInViewport
  };
}

export default isInViewport;
