import { preventTransition } from '@shared/preventTransition';
import scrollbarShiftFix from '@shared/scrollbarShiftFix';
import { sectionAppearing } from '@shared/animations';
import { animationTrigger } from '@shared/animations';
import { cookie } from './сookieConsent/index.js';

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('preload');

  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const isScrolled = window.scrollY !== 0;

    header.classList.toggle('header--scrolled', isScrolled);
  });

  cookie();
  preventTransition();
  sectionAppearing();
  animationTrigger();
});

window.addEventListener('load', () => {
  scrollbarShiftFix();

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  if (isSafari) {
    document.querySelectorAll('.ss-arrow').forEach((arrow) => {
      const arrowEl = arrow.getElementsByTagName('path')[0];

      if (arrowEl) {
        arrowEl.setAttribute(
          'd',
          'M49.9987 54.8808L70.6229 34.257L76.5154 40.1495L49.9987 66.6663L23.4824 40.1495L29.375 34.257L49.9987 54.8808Z',
        );
      }
    });
  }
});
