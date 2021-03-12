import { navBar } from './navBar';
import { loadContactPage } from './contactPage';

navBar();

function loadFrontPage(e) {
  if (e) {
    e.path[4].children[2].remove();
  }

  const div = document.createElement('div');
  div.id = 'frontPage';
  content.appendChild(div);
  div.appendChild(image());
  div.appendChild(h1());
  div.appendChild(p());
  return div;
}

function image() {
  const img = document.createElement('img');

  img.src =
    'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';

  return img;
}

function h1() {
  const h1 = document.createElement('h1');

  h1.innerHTML = 'Lorem Ipsum';
  return h1;
}

function p() {
  const p = document.createElement('p');

  p.innerHTML =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus mauris non orci auctor malesuada. Suspendisse eu nibh non erat facilisis sagittis sed sed neque. Sed in diam porttitor, accumsan dui sed, aliquam leo. Vestibulum tortor magna, egestas ac imperdiet nec, ultrices vel enim. Suspendisse a orci sit amet turpis ultrices blandit non eget ipsum. Cras neque orci, hendrerit non pellentesque in, dignissim id erat. Sed accumsan tristique mauris, vitae consequat dui laoreet vitae. Vivamus ex massa, sagittis vitae vestibulum eget, pellentesque et leo. Maecenas vehicula, sapien vel facilisis interdum, ligula est lobortis diam, vitae maximus ligula ipsum vel libero.';

  return p;
}

export { loadFrontPage };
