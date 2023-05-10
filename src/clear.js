export default function clearArticle (doc){
  const a = doc.querySelector('#article-container')
  while (a.firstChild){
    a.removeChild(a.firstChild);
  }
}