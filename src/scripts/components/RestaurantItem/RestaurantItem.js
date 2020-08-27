class RestaurantItem extends HTMLElement {
  constructor() {
    super();
  }

  set restaurantItem(restaurantItem) {
    this._restaurantItem = restaurantItem;
    this.render();
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
          <p class="restaurants-city">${this._restaurantItem.city}</p>
          <div class="restaurants-rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <span class="restaurants-rating-number">${this._restaurantItem.rating}</span>
          </div>
        </div>
      </article>
    `;
  }
}

customElements.define("restaurant-item", RestaurantItem);
