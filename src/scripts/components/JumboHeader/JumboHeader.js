class JumboHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="header-big">
        <div class="banner">
          <h1 class="banner-title">Comfy Resto for You to Eat!</h1>
        </div>
      </header>
    `;
  }
}

customElements.define("jumbo-header", JumboHeader);
