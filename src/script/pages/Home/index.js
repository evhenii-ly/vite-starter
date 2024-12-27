import { BREAKPOINTS } from '@shared/constants';
import '@style/theme/pages/home.scss';
import UIkit from 'uikit';

const initPage = () => {
  UIkit.dropnav('[uk-dropnav]', {
    clsDrop: 'header-nav__dropdown',
  });

  UIkit.dropdown('.lang-switcher [uk-dropdown]', {
    clsDrop: 'lang-switcher__list',
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initPage();
});

window.addEventListener('load', () => {}, false);
