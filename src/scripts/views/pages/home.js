import '../../components/JumboHeader/JumboHeader';
import '../../components/RestaurantList/RestaurantList';
import RestaurantSource from '../../data/restaurant-source';

const Home = {
  async render() {
    return `
      <jumbo-header></jumbo-header>
      <section class="content-section">
        <div class="content-outer">
          <div class="content-inner">
            <h2 tabindex="0" id="start-main-content" class="content-inner-label">
              Most Visited Restaurants
            </h2>
            <p tabindex="0" class="content-inner-caption">
              Discover top rated restaurants, cafes, and bars
            </p>
            <restaurant-list></restaurant-list>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurantListElement = document.querySelector('restaurant-list');
    restaurantListElement.restaurantList = await RestaurantSource.listRestaurant();
  },
};

export default Home;
