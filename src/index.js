/* eslint-disable no-console */

import renderHome from './home-page';
import renderMenu from './menu-page';
import renderCont from './contact-page';


renderHome(document)
// renderMenu(document)
// renderCont(document)


function clearArticle (a){
  while (a.firstChild){
    a.removeChild(a.firstChild);
  }
}

