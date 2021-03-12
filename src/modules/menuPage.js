function loadMenuPage(e) {
  e.path[4].children[2].remove();
  const div = document.createElement('div');

  div.id = 'menuPage';

  const h3 = document.createElement('h3');
  h3.id = 'menuH3';
  h3.innerHTML = 'Menu:';

  const para = document.createElement('p');
  para.innerHTML = 'Here is our menu: ';

  const para2 = document.createElement('p');
  para2.innerHTML = 'Burgers';

  content.appendChild(div);
  div.appendChild(para);
  div.appendChild(para2);
  return div;
}

export { loadMenuPage };
