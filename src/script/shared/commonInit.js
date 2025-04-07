import { preventTransition } from '@shared/preventTransition';
import scrollbarShiftFix from '@shared/scrollbarShiftFix';
import { cookie } from './сookieConsent/index.js';
import { mobileMenu } from '@ui/Header';
import langSwitcher from '@shared/langSwitcher';
import readmore from '@shared/readmore/index.js';

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('preload');
  cookie();
  preventTransition();
  mobileMenu();
  langSwitcher();
  readmore();
});

window.addEventListener('load', () => {
  scrollbarShiftFix();
});
