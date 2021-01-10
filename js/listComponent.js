import { DINNERS_LIST } from './createComponent.js';

function tag(strings, week) {
  week = DINNERS_LIST.week;
  console.log(week);
  return `${strings} ${week}`;
}

function getWeek() {
  return DINNERS_LIST.week;
}

function templateView() {
  return `
  <div class="dinner-list">
    <div class="dinner-list__header">
      <h2>Middagsliste</h2>
      <h3>Uke ${DINNERS_LIST.week}</h3>
    </div>
    <ul class="dishes">
    </ul>
  </div>
`;
}

const dinners = DINNERS_LIST;

function renderDinnerList() {
  const dishList = document.querySelector('.dishes');
  let allDishes;
  if (dinners.list.length > 0) {
    allDishes = dinners.list.map((dinner) => `<li>${dinner}</li>`).join('');
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
