import '../../components/RestaurantDetail/RestaurantDetail';
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';

const Detail = {
  async render() {
    return `
      <restaurant-detail></restaurant-detail>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantData = await RestaurantSource.detailRestaurant(url.id);
    const restaurantDetailElement = document.querySelector('restaurant-detail');
    restaurantDetailElement.restaurantDetail = restaurantData.restaurant;
  },
};

export default Detail;
