import { homeContainer } from './homeComponent.js';
import { createContainer } from './createComponent.js';
import { listContainer } from './listComponent.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': homeContainer,
  '/liste': listContainer,
  '/ny': createContainer,
};

rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname) => {
  routes[window.location.pathname].removeEventListeners();
  routes[window.location.pathname].destroyEvent;
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname].template();
  routes[pathname].createEvent;
  routes[pathname].registerEventListeners();
  routes[pathname].renderFunction();
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname].template();
};

document.addEventListener('DOMContentLoaded', () => {
  window.onNavigate = onNavigate;
  rootDiv.innerHTML = routes[window.location.pathname].template();
});
