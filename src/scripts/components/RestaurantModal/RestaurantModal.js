class RestaurantModal extends HTMLElement {
  constructor() {
    super();
  }

  set modalData(modalData) {
    this._modalData = modalData;
    this.render();
  }

  closeModal() {
    const escKeyCode = 27;
    const modalCloseElement = this.querySelector(
      ".restaurants-close-modal-button"
    );

    modalCloseElement.addEventListener("click", (event) => {
      this.remove();
      event.stopPropagation();
    });

    this.querySelector("aside").addEventListener("keyup", (event) => {
      if (event.keyCode === escKeyCode) {
        this.remove();
        event.stopPropagation();
      }
    });
  }

  render() {
    this.innerHTML = `
      <aside>
        <div class="restaurants-modal-overlay"></div>
        <div class="restaurants-modal-content">
          <h3 tabindex="0" class="restaurants-modal-title">${this._modalData.name}</h3>
          <p tabindex="0" class="restaurants-modal-text-description">
            ${this._modalData.description}
          </p>
          <button
            class="restaurants-close-modal-button"
            aria-label="tutup modal restaurant"
          >
            close
          </button>
        </div>
      </aside>
    `;

    this.closeModal();
  }
}

customElements.define("restaurant-modal", RestaurantModal);
