const view = `
  <div class="dinner-list">
    <div class="dinner-list__header">
      <h2>Middagsliste</h2>
    </div>
    <ul class="dishes">
    </ul>
  </div>
`;

const dinners = [
  'Tomatsupper',
  'Fiskegrateng',
  'Pølse og potetstappe',
  'Pannekaker',
  'Taco',
  'Pizza',
  'Kjøttkaker',
];

function renderDinnerList() {
  const dishList = document.querySelector('.dishes');
  const allDishes = dinners.map((dinner) => `<li>${dinner}</li>`).join('');
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
  template: view,
  createEvent: document.dispatchEvent(createEvent),
  destroyEvent: document.dispatchEvent(destroyEvent),
  registerEventListeners,
  removeEventListeners,
  renderFunction,
};
