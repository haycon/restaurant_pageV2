import { loadContactPage } from './contactPage';
import { loadFrontPage } from './frontPage';
import { loadMenuPage } from './menuPage';

function navBar() {
  content.appendChild(nav());
  navbar.appendChild(ul());
  ul1.appendChild(li('Front Page'));
  ul1.appendChild(li('Menu'));
  ul1.appendChild(li('Contact Us'));
}

function nav() {
  const nav = document.createElement('nav');
  nav.id = 'navbar';
  return nav;
}

function ul() {
  const ul = document.createElement('ul');
  ul.id = 'ul1';
  return ul;
}

function li(name) {
  const li = document.createElement('li');
  const button = document.createElement('button');
  button.innerHTML = name;
  if (name == 'Contact Us') {
    button.addEventListener('click', loadContactPage);
  }
  if (name == 'Front Page') {
    button.addEventListener('click', loadFrontPage);
  }
  if (name == 'Menu') {
    button.addEventListener('click', loadMenuPage);
  }
  li.appendChild(button);

  return li;
}
export { navBar };
