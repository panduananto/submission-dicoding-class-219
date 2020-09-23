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
        <picture>
          <source srcset="${this._imageSource.SMALL}" type="image/webp" media="all and (max-width: 600px)" />        
          <source srcset="${this._imageSource.SMALL}" type="image/jpeg" media="all and (max-width: 600px)" />
          <source srcset="${this._imageSource.MEDIUM}" type="image/webp" media="all and (min-width: 601px) and (max-width: 960px)" />        
          <source srcset="${this._imageSource.MEDIUM}" type="image/jpeg" media="all and (min-width: 601px) and (max-width: 960px)" />
          <source srcset="${this._imageSource.LARGE}" type="image/webp" media="all and (min-width: 961px)" />        
          <source srcset="${this._imageSource.LARGE}" type="image/jpeg" media="all and (min-width: 961px)" />
          <img
            src="${this._imageSource.LARGE}"
            alt="${this._title.replace(/\s+/g, '-').toLowerCase()}-big-img-header"
          />
        </picture>
        <h1 class="header-big-title">${this._title}</h1>
      </header>
    `;
  }
}

customElements.define('jumbo-header', JumboHeader);
