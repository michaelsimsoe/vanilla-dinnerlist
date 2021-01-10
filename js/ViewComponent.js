export class ViewComponent {
  template = '';
  name = '';
  initComponentEvent = new Event(`${this.name}-creation`);
  renderFn;
  constructor() {}

  createComponent() {
    document.dispatchEvent(this.initComponentEvent);
    this.renderFunction();
  }
  renderFunction(renderFn) {
    renderFn();
  }
}
