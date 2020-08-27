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
        <div class="header-big-banner">
          <h1 class="header-big-banner-title">Comfy Resto for You to Eat!</h1>
        </div>
      </header>
    `;
  }
}

customElements.define("jumbo-header", JumboHeader);
