import changePage from './change-page';

const tabs = document.querySelectorAll('.nav-tab');
tabs.forEach(tab => {
  tab.addEventListener('click', changePage);
})

changePage(); 