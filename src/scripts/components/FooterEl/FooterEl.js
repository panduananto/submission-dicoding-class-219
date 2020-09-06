import CONFIG from '../../global/config';

class FooterEl extends HTMLElement {
  constructor() {
    super();
    this._appName = CONFIG.APP_NAME;
    this._copyYears = new Date().getFullYear();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer class="footer-container">
        <span class="footer-text">© ${this._copyYears} Copyrights: ${this._appName}</span>
      </footer>
    `;
  }
}

customElements.define('footer-el', FooterEl);
