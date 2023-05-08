const page = `
<div id="hero" class="home">
Hero Section, Page: Home
</div>
<div id="about" class="home">
About Section, Page: Home
</div>
`

export default function render(article){
  article.insertAdjacentHTML("beforeend", page);
}
