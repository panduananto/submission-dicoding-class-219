import FavoriteRestaurantSource from '../../data/favorite-restaurant-source';
import { renderError, renderEmptyData } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <section class="content-section">
        <div class="content-outer">
          <div class="content-inner">
            <h2 tabindex="0" id="start-main-content" class="content-inner-label">
              Your Favorite Restaurants
            </h2>
            <p tabindex="0" class="content-inner-caption">
              # restaurants liked by you
            </p>
            <restaurant-list></restaurant-list>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const loadingIndicatorElement = document.querySelector('loading-indicator');
    const innerCaption = document.querySelector('.content-inner-caption');
    const restaurantListElement = document.querySelector('restaurant-list');

    loadingIndicatorElement.style.display = 'block';

    try {
      const favoriteRestaurant = await FavoriteRestaurantSource.getAllRestaurant();
      if (favoriteRestaurant.length > 0) {
        restaurantListElement.restaurantList = favoriteRestaurant;
        innerCaption.innerHTML = `${favoriteRestaurant.length} restaurants liked by you`;
      } else {
        renderEmptyData();
      }
    } catch {
      renderError();
    } finally {
      loadingIndicatorElement.style.display = 'none';
    }
  },
};

export default Favorite;
