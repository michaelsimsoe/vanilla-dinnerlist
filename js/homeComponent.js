const home = `<h2>Landingsside</h2>`;

const createEvent = new Event('list-component-create');
const destroyEvent = new Event('list-component-destroy');

const registerEventListeners = () => {};
const removeEventListeners = () => {};

const renderFunction = () => {};

export const homeContainer = {
  template: home,
  createEvent: document.dispatchEvent(createEvent),
  destroyEvent: document.dispatchEvent(destroyEvent),
  registerEventListeners,
  removeEventListeners,
  renderFunction,
};
