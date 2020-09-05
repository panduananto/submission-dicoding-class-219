class FooterEl extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer class="footer-container">
        <span class="footer-text">© 2020 Copyrights: ComfyResto</span>
      </footer>
    `;
  }
}

customElements.define('footer-el', FooterEl);
