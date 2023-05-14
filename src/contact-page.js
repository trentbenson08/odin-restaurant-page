

const contactDetails = [
  {label: 'Phone', info: '(123) 456-7890'},
  {label: 'Email', info: 'contact@cafeitalia.com'},
  {label: 'Address', info: '1234 1st Ave, New York, NY 12345'},
  {label: 'Spam', info: 'Ham'}
]

export default function render(doc){
  const article = doc.querySelector('#article-container');

  const contact = doc.createElement('div');
  contact.id = 'contact';
  contact.className = 'cont';

  const container = doc.createElement('div');
  container.id = 'contact-container';
  container.className = 'cont';
  
  contactDetails.forEach(detail => {
    const contactItem = doc.createElement('div');
    contactItem.className = 'cont-item cont';

    const label = doc.createElement('div');
    label.className = 'label cont';
    label.innerText = `${detail.label}:`;

    const info = doc.createElement('div');
    info.className = 'info cont';
    info.innerText = detail.info;
    contactItem.append(label, info);
    container.append(contactItem);
  })

  contact.append(container);
  article.append(contact);
}