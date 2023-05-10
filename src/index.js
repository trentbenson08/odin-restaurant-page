/* eslint-disable no-console */

import renderHome from './home-page';
import renderMenu from './menu-page';
import renderCont from './contact-page';
import clearPage from './clear';


// renderHome(document)
// renderMenu(document)
// renderCont(document)

// clearPage(document);

function changePage(event){
  clearPage(document);

  const selection = event.target.getAttribute('data-a');
  switch(selection){
    case 'home':
      renderHome(document);
      break;
    case 'menu':
      renderMenu(document);
      break;
    case 'cont':
      renderCont(document);
      break;
    default:
      break;
  }
}

const tabs = document.querySelectorAll('.nav-tab');
console.log(tabs)
tabs.forEach(tab => {
  tab.addEventListener('click', changePage);
})