/* eslint-disable indent */
import '../JumboHeader/JumboHeader';
import '../MenuContainer/MenuContainer';
import '../ReviewContainer/ReviewContainer';
import '../FavoriteButton/FavoriteButton';

import CONSTANTS from '../../global/constants';
import imgUrlGenerator from '../../utils/img-url-generator';

class RestaurantDetail extends HTMLElement {
  constructor() {
    super();

    this.addEventListener('click', (event) => {
      const elementTarget = event.target;
      if (elementTarget.classList.contains('show-more')) {
        this.showLongDescription(elementTarget);
      }
    });
    this.addEventListener('keyup', (event) => {
      const elementTarget = event.target;
      if (event.keyCode === CONSTANTS.ENTER_KEY_CODE) {
        if (elementTarget.classList.contains('show-more')) {
          this.showLongDescription(elementTarget);
        }
      }
    });
  }

  set restaurantDetail(restaurantDetail) {
    this._restaurantDetail = restaurantDetail;
    this.render();
  }

  trimLongDescription(description) {
    const charLimit = 154;
    if (description < charLimit) {
      return `
        <div class="restaurant-detail-content-text">
          ${description}
        </div>
      `;
    }
    return `
        <div class="restaurant-detail-content-text">
          <span tabindex="0" class="short-text">${description.substr(
            0,
            charLimit
          )}</span><span tabindex="0" class="long-text">${description.substr(
      charLimit
    )}</span>
          <span class="dot-text">...</span>
          <span tabindex="0" class="show-more" data-more="0">read more</span>
        </div>
      `;
  }

  showLongDescription(expandButton) {
    const _expandButton = expandButton;
    if (_expandButton.dataset.more === '0') {
      _expandButton.setAttribute('data-more', 1);
      _expandButton.innerHTML = 'read less';
      _expandButton.previousElementSibling.style.display = 'none';
      _expandButton.previousElementSibling.previousElementSibling.style.display =
        'inline';
      _expandButton.parentElement.firstElementChild.focus();
    } else if (_expandButton.dataset.more === '1') {
      _expandButton.setAttribute('data-more', 0);
      _expandButton.innerHTML = 'read more';
      _expandButton.previousElementSibling.style.display = 'inline';
      _expandButton.previousElementSibling.previousElementSibling.style.display =
        'none';
    }
  }

  render() {
    const {
      address,
      categories,
      city,
      consumerReviews,
      description,
      id,
      menus,
      name,
      pictureId,
      rating,
    } = this._restaurantDetail;

    const { foods, drinks } = menus;

    const favorite = {
      id,
      name,
      pictureId,
      city,
      description,
      rating,
    };

    this.innerHTML = `
      <header class="header-big">
        <img
          src="${imgUrlGenerator(pictureId, 'LARGE')}"
          srcset="
            ${imgUrlGenerator(pictureId, 'SMALL')} 480w,
            ${imgUrlGenerator(pictureId, 'MEDIUM')} 800w,
            ${imgUrlGenerator(pictureId, 'LARGE')} 1200w"
          alt="${name.replace(/\s+/g, '-').toLowerCase()}-big-img-header" />
        <h1 class="header-big-title">${name}</h1>
      </header>
      <favorite-button favorite='${JSON.stringify(favorite)}'></favorite-button>
      <div class="restaurant-detail-panel">
        <div class="restaurant-detail-panel-text">
          <p>
            <span>
            <i class="fas fa-utensils"></i>${categories
              .map((category) => `${category.name}`)
              .join(', ')} Food
            </span>
            <span>
              <i class="fas fa-star"></i>${rating} ratings
            </span>
          </p>
          <p>
            <span>
              <i class="fas fa-map-marker-alt"></i>${address}, ${city}
            </span>
          </p>
        </div>
      </div>
      <div class="restaurant-detail-content">
        <div class="restaurant-detail-content-description">
          <h3 tabindex="0" class="restaurant-detail-content-title">Description</h3>
          ${this.trimLongDescription(description)}
        </div>
        <div class="restaurant-detail-content-menu">
          <h3 tabindex="0" class="restaurant-detail-content-title">Menu</h3>
          <div class="restaurant-detail-content-menu-inner">
            <menu-container title="Foods" menu='${JSON.stringify(
              foods
            )}'></menu-container>
            <menu-container title="Drinks" menu='${JSON.stringify(
              drinks
            )}'></menu-container>
          </div>
        </div>
        <div class="restaurant-detail-content-review">
          <h3 tabindex="0" class="restaurant-detail-content-title">Customer Review</h3>
          <div class="restaurant-detail-content-review-inner">
            <review-container review='${JSON.stringify(
              consumerReviews
            )}'></review-container>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
