/* eslint-disable no-console */

import changePage from './change-page';

const tabs = document.querySelectorAll('.nav-tab');
console.log(tabs)
tabs.forEach(tab => {
  tab.addEventListener('click', changePage);
})