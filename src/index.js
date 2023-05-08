/* eslint-disable no-console */

import renderHome from "./home-page";
import renderMenu from "./menu-page";
import renderCont from "./contact-page";

const article = document.querySelector('#article-container')

renderHome(article)
renderMenu(article)
renderCont(article)


function clearArticle (a){
  while (a.firstChild){
    a.removeChild(a.firstChild);
  }
}

clearArticle(article)