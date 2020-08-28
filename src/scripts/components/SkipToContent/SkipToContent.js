class SkipToContent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  toContent() {
    const enterKeyCode = 13;
    const spaceKeyCode = 32;
    const mostVisitedLabelElement = document.querySelector(
      ".most-visited-label"
    );
    const skipToContentElement = this.querySelector(".skip-link");

    skipToContentElement.addEventListener("click", (event) => {
      mostVisitedLabelElement.focus();
      event.stopPropagation();
    });

    skipToContentElement.addEventListener("keyup", (event) => {
      if (event.keyCode === enterKeyCode || event.keyCode === spaceKeyCode) {
        mostVisitedLabelElement.focus();
        event.stopPropagation();
      }
    });
  }

  render() {
    this.innerHTML = `
      <a href="#start-main-content" class="skip-link">Skip To Content</a>
    `;

    this.toContent();
  }
}

customElements.define("skip-to-content", SkipToContent);
