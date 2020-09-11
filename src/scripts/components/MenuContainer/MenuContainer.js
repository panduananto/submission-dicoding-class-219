/* eslint-disable indent */
class MenuContainer extends HTMLElement {
  constructor() {
    super();
    this._title = 'General';
    this._menu = [];
  }

  connectedCallback() {
    this._title = this.getAttribute('title');
    this._menu = JSON.parse(this.getAttribute('menu'));
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="menu-container">
        <h4 tabindex="0" class="menu-container-title">${this._title}</h4>
        <ul class="menu-list">
          ${this._menu
            .map((menu) => `<li class="menu-item"><p tabindex="0">${menu.name}</p></li>`)
            .join('')}
        </ul>
      </div>
    `;
  }
}

customElements.define('menu-container', MenuContainer);
