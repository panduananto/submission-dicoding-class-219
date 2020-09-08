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
