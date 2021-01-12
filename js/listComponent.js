// import { DINNERS_LIST } from './createComponent.js';

const DINNERS_LIST = {
  week: 2,
  list: [
    'Tomatsuppe',
    'Pannekaker',
    'Kyllingvinger',
    'Fiskegrateng',
    'Taco',
    'Pizza',
    'Kjøttkaker',
  ],
};
const dinners = DINNERS_LIST;
function templateView() {
  return `
  <div class="dinner-list">
    <div class="dinner-list__header">
      <h2>Middagsliste</h2>
      <h3>Uke ${DINNERS_LIST.week}</h3>
    </div>
    <ul class="dish-list">
    </ul>
  </div>
`;
}

function renderDinnerList() {
  const dishList = document.querySelector('.dish-list');
  let allDishes;
  const DAYS = [
    'mandag',
    'tirsdag',
    'onsdag',
    'torsdag',
    'fredag',
    'lørdag',
    'søndag',
  ];
  if (dinners.list.length > 0) {
    allDishes = dinners.list
      .map(
        (dinner, i) =>
          `<li class="dish-list__item"><span class="item__day">${DAYS[i]}</span>${dinner}</li>`
      )
      .join('');
  } else {
    allDishes = 'Ingen retter i listen';
  }
  dishList.innerHTML = allDishes;
}

const createEvent = new Event('list-component-create');
const destroyEvent = new Event('list-component-destroy');

const registerEventListeners = () => {};
const removeEventListeners = () => {};

const renderFunction = () => {
  renderDinnerList();
};

export const listContainer = {
  template: templateView,
  createEvent: document.dispatchEvent(createEvent),
  destroyEvent: document.dispatchEvent(destroyEvent),
  registerEventListeners,
  removeEventListeners,
  renderFunction,
};
