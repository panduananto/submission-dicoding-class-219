class FooterEl extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer class="footer-container">
        <div class="footer-center">
          <span class="footer-text">© 2020 Copyrights: Pandu Ananto Hogantara</span>
        </div>
      </footer>
    `;
  }
}

customElements.define("footer-el", FooterEl);
