import americano from './imgs/americano.jpg';

// <div id="menu" class="menu">         
//   <div class="item menu">
//     <img src="../src/imgs/americano.jpg" alt="">
//     <div id="title" class="menu">Lorem Ipsum</div>
//     <div id="info" class="menu">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur error odio at eligendi obcaecati libero, debitis tempora nihil id ex!</div>
//   </div>
// </div>

const menuItems = [
  {
    title: 'Americano',
    img: americano, 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur error odio at eligendi obcaecati libero, debitis tempora nihil id ex!'
  },
  {
    title: 'Americano',
    img: americano, 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur error odio at eligendi obcaecati libero, debitis tempora nihil id ex!'
  },
  {
    title: 'Americano',
    img: americano, 
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
    title.id = 'title';
    title.className = 'menu';
    title.innerText = item.title;

    const desc = doc.createElement('div');
    desc.id = 'info';
    desc.className = 'menu';
    desc.innerText = item.description;

    card.append(img, title, desc);
    menu.append(card);
  })
  article.append(menu);
}