import { homeContainer } from './homeComponent.js';
import { createContainer } from './createComponent.js';
import { listContainer } from './listComponent.js';
const app = document.getElementById('app');

const routes = {
  '/': homeContainer,
  '/liste': listContainer,
  '/ny': createContainer,
};

let rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname].template;
  routes[pathname].registerEventListeners();
  routes[pathname].renderFunction();
};
window.onNavigate = onNavigate;
window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname].template;
};

document.addEventListener('DOMContentLoaded', () => {
  rootDiv.innerHTML = routes[window.location.pathname].template;
});
