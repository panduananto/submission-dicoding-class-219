import "../RestaurantModal/RestaurantModal.js";

class RestaurantItem extends HTMLElement {
  constructor() {
    super();
  }

  set restaurantItem(restaurantItem) {
    this._restaurantItem = restaurantItem;
    this.render();
  }

  showModal() {
    const modalOpenElement = this.querySelector(
      ".restaurants-show-modal-button"
    );

    modalOpenElement.addEventListener("click", (event) => {
      const restaurantModalElement = document.createElement("restaurant-modal");
      restaurantModalElement.modalData = this._restaurantItem;
      this.appendChild(restaurantModalElement);
      document.querySelector(".restaurants-modal-title").focus();
      event.stopPropagation();
    });
  }

  render() {
    this.innerHTML = `
      <article class="restaurants">
        <div class="restaurants-image-container">
          <img
            class="restaurants-image"
            src="${this._restaurantItem.pictureId}"
            alt="restaurants-image-thumbnail"
          />
        </div>
        <div class="restaurants-item-content">
          <button
            class="restaurants-show-modal-button"
            aria-label="intip restaurant"
          >
            intip
          </button>
          <a href="#" class="restaurants-name">${this._restaurantItem.name}</a>
          <p tabindex="0" class="restaurants-city">${this._restaurantItem.city}</p>
          <div class="restaurants-rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <span tabindex="0" class="restaurants-rating-number">${this._restaurantItem.rating}</span>
          </div>
        </div>
      </article>
    `;

    this.showModal();
  }
}

customElements.define("restaurant-item", RestaurantItem);
