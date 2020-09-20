/* eslint-disable indent */
import CONFIG from '../../global/config';

class JumboHeader extends HTMLElement {
  connectedCallback() {
    this._src = this.getAttribute('src') || CONFIG.APP_HERO_IMG;
    this._title = this.getAttribute('title') || 'Comfy Resto for You to Eat!';
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="header-big">
        <img
          src="${this._src}"
          alt="${this._title
            .replace(/\s+/g, '-')
            .toLowerCase()}-big-img-header" />
        <h1 class="header-big-title">${this._title}</h1>
      </header>
    `;
  }
}

customElements.define('jumbo-header', JumboHeader);
