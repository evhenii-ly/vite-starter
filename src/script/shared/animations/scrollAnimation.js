const scrollAnimation = () => {
  window.addEventListener("scroll", () => {
    const sectionBox = document.querySelector(".animated-section-box");
    const bodyRect = document.body.getBoundingClientRect();
    const elemRect = sectionBox.getBoundingClientRect();
    const offsetTop = elemRect.top - bodyRect.top;
    const dynamicOffsetTop = document.body.getBoundingClientRect().top * -1;

    if (dynamicOffsetTop >= offsetTop &&
      dynamicOffsetTop < offsetTop + 400) {
      sectionBox.classList.remove("slide-1");
      sectionBox.classList.remove("slide-3");
      sectionBox.classList.add("slide-2");
    } else if (dynamicOffsetTop >= offsetTop) {
      sectionBox.classList.remove("slide-1");
      sectionBox.classList.remove("slide-2");
      sectionBox.classList.add("slide-3");
    } else {
      sectionBox.classList.remove("slide-2");
      sectionBox.classList.remove("slide-3");
      sectionBox.classList.add("slide-1");
    }
  }, false);
};

export default scrollAnimation;
