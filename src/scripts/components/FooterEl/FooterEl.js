class FooterEl extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer class="footer-container">
        <div class="footer-center">
          <span class="footer-text">© 2020 Copyrights: ComfyResto</span>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-el', FooterEl);
