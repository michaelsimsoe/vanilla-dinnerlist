const app = document.getElementById('app');

const dinners = [
  'Tomatsupper',
  'Fiskegrateng',
  'Pølse og potetstappe',
  'Pannekaker',
  'Taco',
  'Pizza',
  'Kjøttkaker',
];

const dishList = document.querySelector('.dishes');

function renderDinnerList(dishes = []) {
  let allDishes = dishes.map((dinner) => `<li>${dinner}</li>`).join('');
  dishList.innerHTML = allDishes;
}

const home = `<h2>Landingsside</h2>`;
const view = `
  <div class="dinner-list">
    <div class="dinner-list__header">
      <h2>Middagsliste</h2>
    </div>
    <ul class="dishes">
    </ul>
  </div>
`;
const create = `<h2>Lag middagsliste</h2>`;

const routes = {
  '/': home,
  '/liste': view,
  '/ny': create,
};

let rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  console.log(routes.pathname);
  rootDiv.innerHTML = routes[pathname];
  console.log(rootDiv);
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};
