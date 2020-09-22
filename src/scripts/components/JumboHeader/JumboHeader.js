/* eslint-disable indent */
import CONFIG from '../../global/config';

class JumboHeader extends HTMLElement {
  connectedCallback() {
    this._imageSource = CONFIG.APP_HERO_IMG;
    this._title = 'Comfy Resto for You to Eat!';
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="header-big">
        <img
          src="${this._imageSource.LARGE}"
          srcset="
            ${this._imageSource.SMALL} 480w,
            ${this._imageSource.MEDIUM} 800w,
            ${this._imageSource.LARGE} 1350w"
          alt="${this._title.replace(/\s+/g, '-').toLowerCase()}-big-img-header"
        />
        <h1 class="header-big-title">${this._title}</h1>
      </header>
    `;
  }
}

customElements.define('jumbo-header', JumboHeader);
