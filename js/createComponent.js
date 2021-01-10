export const DINNERS_LIST = {
  week: 0,
  list: [],
};

function templateView() {
  return `
<div class="dinner-list">
  <div class="dinner-list__header">
    <h2>Lag middagsliste</h2>
  </div>
  <div>
    <input value="${
      DINNERS_LIST.week + ''
    }" id="week-input" type="text" placeholder="Uke" name="dish">
    <button type="submit" id="set-week-btn">Legg til rett</button>
  </div>
  <div>
    <input id="dish-input" type="text" placeholder="Middagsrett" name="dish">
    <button type="submit" id="add-dish-btn">Legg til rett</button>
  </div>
  <ul class="new-dish-list">
  </ul>
</div>
`;
}

function renderDinnerList() {
  const dishList = document.querySelector('.new-dish-list');
  const allDishes = DINNERS_LIST.list
    .map((dinner) => `<li>${dinner}</li>`)
    .join('');
  if (!dishList) return;
  dishList.innerHTML = allDishes;
}

function setWeek(event) {
  event.preventDefault();
  if (event.target && event.target.id == 'set-week-btn') {
    const weekInput = document.getElementById('week-input');

    console.log(weekInput.value);
    DINNERS_LIST.week = weekInput.value;
    console.log(DINNERS_LIST);
    // weekInput.value = '';
  }
}

function addDish(event) {
  event.preventDefault();
  if (event.target && event.target.id == 'add-dish-btn') {
    const dishInput = document.getElementById('dish-input');
    const dishList = document.querySelector('.new-dish-list');

    if (DINNERS_LIST.list.length < 7) {
      DINNERS_LIST.list.push(dishInput.value);
    } else {
      alert('Listen er full');
    }
    dishInput.value = '';
    dishInput.focus();
    renderDinnerList();
  }
}

const createEvent = new Event('create-component-create');
const destroyEvent = new Event('create-component-destroy');

const registerEventListeners = () => {
  // const addDishBtn = document.getElementById('add-dish-btn');
  document.addEventListener('click', addDish);
  document.addEventListener('click', setWeek);
};
const removeEventListeners = () => {
  // const addDishBtn = document.getElementById('add-dish-btn');
  document.removeEventListener('click', addDish);
  document.removeEventListener('click', setWeek);
};

const renderFunction = () => {
  renderDinnerList();
};

export const createContainer = {
  template: templateView,
  createEvent: document.dispatchEvent(createEvent),
  destroyEvent: document.dispatchEvent(destroyEvent),
  registerEventListeners,
  removeEventListeners,
  renderFunction,
};
