import renderHome from './home-page';
import renderMenu from './menu-page';
import renderCont from './contact-page';
import clearPage from './clear';

export default function changePage(event){
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
    default: break;
  }
}