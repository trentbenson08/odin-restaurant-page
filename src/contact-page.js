const page = `
<div id="menu" class="menu">
Contact
</div>
`

export default function render(article){
  article.insertAdjacentHTML("beforeend", page);
}