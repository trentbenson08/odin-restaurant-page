import americano from './imgs/americano.jpg';
import cappuccino from './imgs/cappuccino.jpg';
import latte from './imgs/latte.jpg';
import croissant from './imgs/croissant.jpg';

const menuItems = [
  {
    title: 'Americano',
    img: americano, 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur error odio at eligendi obcaecati libero, debitis tempora nihil id ex!'
  },
  {
    title: 'Cappuccino',
    img: cappuccino, 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur error odio at eligendi obcaecati libero, debitis tempora nihil id ex!'
  },
  {
    title: 'Latte',
    img: latte, 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur error odio at eligendi obcaecati libero, debitis tempora nihil id ex!'
  },
  {
    title: 'Croissant',
    img: croissant, 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur error odio at eligendi obcaecati libero, debitis tempora nihil id ex!'
  }
]

export default function render(doc){
  const article = doc.querySelector('#article-container');
  const menu = doc.createElement('div');
  
  menu.id = 'menu';
  menu.className = 'menu'; 

  // Create Menu Items

  menuItems.forEach(item => {
    const card = doc.createElement('div');
    card.className = 'card menu';

    const img = doc.createElement('img');
    img.src = item.img;

    const title = doc.createElement('div');
    title.className = 'title menu';
    title.innerText = item.title;

    const desc = doc.createElement('div');
    desc.className = 'info menu';
    desc.innerText = item.description;

    card.append(img, title, desc);
    menu.append(card);
  })
  article.append(menu);
}