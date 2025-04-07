import TeamSection from '@features/TeamSection/index.js';
import '@style/theme/pages/home.scss';

const initPage = () => {
  TeamSection();
};

document.addEventListener('DOMContentLoaded', () => {
  initPage();
});

window.addEventListener('load', () => {}, false);
