/* eslint-disable indent */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import '../RestaurantModal/RestaurantModal';

import imgUrlGenerator from '../../utils/img-url-generator';

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
    this.innerHTML = `
      <article class="restaurants">
        <div class="restaurants-image-container">
          <picture>
            <source srcset="${imgUrlGenerator(this._restaurantItem.pictureId, 'SMALL')}" type="image/webp" />        
            <source srcset="${imgUrlGenerator(this._restaurantItem.pictureId, 'SMALL')}" type="image/jpeg" />
            <img
              class="restaurants-image lazyload"
              src="./assets/images/placeholder-small.jpg"
              data-src="${imgUrlGenerator(this._restaurantItem.pictureId, 'SMALL')}"
              alt="${this._restaurantItem.name
                .replace(/\s+/g, '-')
                .toLowerCase()}-img-thumbnail"
            />
          </picture>
        </div>
        <div class="restaurants-item-content">
          <button
            class="restaurants-show-modal-button"
            aria-label="intip restaurant"
          >
            intip
          </button>
          <a href="/#/detail/${
            this._restaurantItem.id
          }" class="restaurants-name">${this._restaurantItem.name}</a>
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
