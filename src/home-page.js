import cafeInterior from './imgs/interior.jpg';

const page = `
<div id="hero" class="home">
Hero Section, Page: Home
</div>
<div id="about" class="home">
About Section, Page: Home
</div>
`

export default function render(doc){
  const article = doc.querySelector('#article-container');

  // Hero Section
  const hero = doc.createElement('div')
  const image = doc.createElement('img')
  const heroText = doc.createElement('div');

  hero.id = 'hero';
  hero.className = 'home';

  image.src = cafeInterior;
  image.class = 'home';

  heroText.className = 'text';
  heroText.innerText = 'Welcome, ';


  hero.append(heroText)
  hero.append(image)
  article.append(hero)

  // About Section
  const about = doc.createElement('div');
  const aboutText = doc.createElement('div');
  const spacer = doc.createElement('div');

  spacer.id = 'spacer'

  about.id = 'about';
  about.className = 'home';

  aboutText.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum perferendis, nesciunt consectetur cum assumenda voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum perferendis, nesciunt consectetur cum assumenda voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum perferendis, nesciunt consectetur cum assumenda voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum perferendis, nesciunt consectetur cum assumenda voluptate?'

  about.append(spacer);
  about.append(aboutText);
  article.append(about);
}
