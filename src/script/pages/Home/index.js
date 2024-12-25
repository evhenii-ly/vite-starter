import { BREAKPOINTS } from '@shared/constants';
import '@style/pages/home.scss';

const initPage = () => {
  const tabletBreakpoint = window.matchMedia(
    `(max-width: ${BREAKPOINTS.tablet - 1}px)`,
  );
  const phoneLgBreakpoint = window.matchMedia(
    `(max-width: ${BREAKPOINTS.phoneLg - 1}px)`,
  );

  if (!tabletBreakpoint.matches) {
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initPage();
});

window.addEventListener('load', () => {}, false);
