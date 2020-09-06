/* eslint-disable indent */
import '../RestaurantModal/RestaurantModal';
import CONFIG from '../../global/config';

class RestaurantItem extends HTMLElement {
  set restaurantItem(restaurantItem) {
    this._restaurantItem = restaurantItem;
    this.render();
  }

  connectedCallback() {
    this.getStarRating();
    this.showModal();
  }

  getStarRating() {
    const starTotal = 5;
    const starPercentage = (this._restaurantItem.rating / starTotal) * 100;
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

    this.querySelector(
      '.restaurants-rating-star-inner'
    ).style.width = starPercentageRounded;
  }

  showModal() {
    const modalOpenElement = this.querySelector(
      '.restaurants-show-modal-button'
    );

    modalOpenElement.addEventListener('click', (event) => {
      const restaurantModalElement = document.createElement('restaurant-modal');
      restaurantModalElement.modalData = this._restaurantItem;
      this.appendChild(restaurantModalElement);
      document.querySelector('.restaurants-modal-title').focus();
      event.stopPropagation();
    });
  }

  render() {
    const { BASE_IMAGE_URL, IMAGE_QUALITY } = CONFIG;
    this.innerHTML = `
      <article class="restaurants">
        <div class="restaurants-image-container">
          <img
            class="restaurants-image"
            src="${
              this._restaurantItem.pictureId
                ? BASE_IMAGE_URL +
                  IMAGE_QUALITY.MEDIUM +
                  this._restaurantItem.pictureId
                : 'https://i.picsum.photos/id/23/800/450.jpg?grayscale'
            }"
            alt="${this._restaurantItem.name
              .replace(/\s+/g, '-')
              .toLowerCase()}-img-thumbnail"
          />
        </div>
        <div class="restaurants-item-content">
          <button
            class="restaurants-show-modal-button"
            aria-label="intip restaurant"
          >
            intip
          </button>
          <a href="/#/detail/${this._restaurantItem.id}" class="restaurants-name">${this._restaurantItem.name}</a>
          <p tabindex="0" class="restaurants-city">${
            this._restaurantItem.city
          }</p>
          <div class="restaurants-rating">
            <div class="restaurants-rating-star-outer">
              <div class="restaurants-rating-star-inner">
              </div>
            </div>
            <span tabindex="0" class="restaurants-rating-number">${
              this._restaurantItem.rating
            }</span>
          </div>
        </div>
      </article>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
