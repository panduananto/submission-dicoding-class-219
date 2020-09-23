import '../../components/RestaurantDetail/RestaurantDetail';

import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { renderError } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <restaurant-detail></restaurant-detail>
    `;
  },

  async afterRender() {
    let fontAwesomeScriptElement = document.querySelector(
      'script[src="https://kit.fontawesome.com/dc1bf0123a.js"]'
    );

    if (!fontAwesomeScriptElement) {
      fontAwesomeScriptElement = document.createElement('script');
      fontAwesomeScriptElement.src =
        'https://kit.fontawesome.com/dc1bf0123a.js';
      document.body.appendChild(fontAwesomeScriptElement);
    }

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const loadingIndicatorElement = document.querySelector('loading-indicator');
    const restaurantDetailElement = document.querySelector('restaurant-detail');

    loadingIndicatorElement.style.display = 'block';

    try {
      const restaurant = await RestaurantSource.detailRestaurant(url.id);
      restaurantDetailElement.restaurantDetail = restaurant.restaurant;
    } catch {
      renderError();
    } finally {
      loadingIndicatorElement.style.display = 'none';
    }
  },
};

export default Detail;
