export class Router {
  navigate() {
    window.history.pushState({}, pathname, window.location.origin + pathname);
    rootDiv.innerHTML = routes[pathname].template;
    routes[pathname].registerEventListeners();
    routes[pathname].renderFunction();
  }
}
