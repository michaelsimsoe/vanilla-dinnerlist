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

const onNavigate = (pathname, element) => {
  routes[window.location.pathname].removeEventListeners();
  routes[window.location.pathname].destroyEvent;
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname].template();
  routes[pathname].createEvent;
  routes[pathname].registerEventListeners();
  routes[pathname].renderFunction();
  setActiveLink(element);
};

function setActiveLink(element) {
  //TODO: call from another place in order to use on direct navigation
  console.log(element);
  const activeLink = document.querySelector('.router-link-active');
  if (activeLink) {
    activeLink.classList.remove('router-link-active');
  }
  element.classList.add('router-link-active');
}

window.onpopstate = () => {
  // Get rid of old eventlisteners
  rootDiv.innerHTML = routes[window.location.pathname].template();
  routes[window.location.pathname].createEvent;
  routes[window.location.pathname].registerEventListeners();
  routes[window.location.pathname].renderFunction();
};

document.addEventListener('DOMContentLoaded', () => {
  window.onNavigate = onNavigate;
  rootDiv.innerHTML = routes[window.location.pathname].template();
  routes[window.location.pathname].createEvent;
  routes[window.location.pathname].registerEventListeners();
  routes[window.location.pathname].renderFunction();
});
