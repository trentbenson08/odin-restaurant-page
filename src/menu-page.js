const page = `
<div id="menu" class="menu">
Menu Section
</div>
`

export default function render(article){
  article.insertAdjacentHTML("beforeend", page);
}