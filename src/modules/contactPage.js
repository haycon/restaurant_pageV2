function loadContactPage(e) {
  e.path[4].children[2].remove();
  const div = document.createElement('div');

  div.id = 'contactPage';

  const h3 = document.createElement('h3');
  h3.id = 'contactH3';
  h3.innerHTML = 'Contact us here:';
  const para = document.createElement('p');
  para.innerHTML = 'To make a reservation by phone, call: 123456789';

  content.appendChild(div);
  div.appendChild(h3);
  div.appendChild(para);
  return div;
}

export { loadContactPage };
