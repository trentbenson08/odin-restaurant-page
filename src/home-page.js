import cafeInterior from './imgs/interior.jpg';
import barista from './imgs/barista.jpg';

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
  heroText.innerText = 'Welcome to an Authentic Italian Coffee Shop';


  hero.append(heroText)
  hero.append(image)
  article.append(hero)

  // About Section
  const about = doc.createElement('div');
  const aboutText = doc.createElement('div');
  const spacer = doc.createElement('img');

  spacer.id = 'spacer';
  spacer.src = barista;

  about.id = 'about';
  about.className = 'home';

  aboutText.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum perferendis, nesciunt consectetur cum assumenda voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum perferendis, nesciunt consectetur cum assumenda voluptate?'

  about.append(spacer);
  about.append(aboutText);
  article.append(about);
}
