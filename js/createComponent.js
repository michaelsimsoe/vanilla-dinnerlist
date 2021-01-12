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
  <div class="dinner-list__create">
    <div classe="dinner-list__create-week">
      <input value="${
        DINNERS_LIST.week + ''
      }" class="week-input" id="week-input" type="text" placeholder="Uke" name="week">
      <button type="submit" class="set-week-btn" id="set-week-btn">Uketall</button>
    </div>
    <div>
      <input class="dish-input" id="dish-input" type="text" placeholder="Middagsrett" name="dish">
      <button class="add-dish-btn" type="submit" id="add-dish-btn">Legg til rett</button>
    </div>
  </div>
  <ul class="new-dish-list">
  </ul>
</div>
`;
}

function renderDinnerList() {
  const DAYS = [
    'mandag',
    'tirsdag',
    'onsdag',
    'torsdag',
    'fredag',
    'lørdag',
    'søndag',
  ];
  const dishList = document.querySelector('.new-dish-list');
  const allDishes = DINNERS_LIST.list
    .map(
      (dinner, i) =>
        `<li class="new-item"><span class="new-item__day">${DAYS[i]}: </span>${dinner}</li>`
    )
    .join('');
  if (!dishList) return;
  dishList.innerHTML = allDishes;
}

function setWeek(event) {
  event.preventDefault();
  if (event.target && event.target.id == 'set-week-btn') {
    const weekInput = document.getElementById('week-input');

    DINNERS_LIST.week = weekInput.value;
    console.log(DINNERS_LIST);
    // weekInput.value = '';
  }
}

function addDish(event) {
  event.preventDefault();
  const dishInput = document.getElementById('dish-input');
  if (
    (event.target && event.target.id == 'add-dish-btn') ||
    (event.keyCode === 13 && dishInput.value != '')
  ) {
    if (dishInput.value.length < 0) return;
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
  document.addEventListener('keyup', addDish);
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
