const create = `
<div class="dinner-list">
  <div class="dinner-list__header">
    <h2>Lag middagsliste</h2>
  </div>
  <div>
    <input id="dish-input" type="text" placeholder="Middagsrett" name="dish">
    <button type="submit" id="add-dish-btn">Legg til rett</button>
  </div>
  <ul class="new-dish-list">
  </ul>
</div>
`;

const dinners = [];

function renderDinnerList() {
  const dishList = document.querySelector('.new-dish-list');
  const allDishes = dinners.map((dinner) => `<li>${dinner}</li>`).join('');
  if (!dishList) return;
  dishList.innerHTML = allDishes;
}

function addDish(event) {
  event.preventDefault();
  if (event.target && event.target.id == 'add-dish-btn') {
    const dishInput = document.getElementById('dish-input');
    const dishList = document.querySelector('.new-dish-list');

    dinners.push(dishInput.value);
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
};
const removeEventListeners = () => {
  // const addDishBtn = document.getElementById('add-dish-btn');
  document.removeEventListener('click', addDish);
};

const renderFunction = () => {
  renderDinnerList();
};

export const createContainer = {
  template: create,
  createEvent: document.dispatchEvent(createEvent),
  destroyEvent: document.dispatchEvent(destroyEvent),
  registerEventListeners,
  removeEventListeners,
  renderFunction,
};
