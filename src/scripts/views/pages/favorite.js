import FavoriteRestaurantSource from '../../data/favorite-restaurant-source';

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
    const restaurantListElement = document.querySelector('restaurant-list');
    restaurantListElement.restaurantList = await FavoriteRestaurantSource.getAllRestaurant();

    const totalFavoritedRestaurant =
      restaurantListElement.restaurantList.length;

    document.querySelector(
      '.content-inner-caption'
    ).innerHTML = `${totalFavoritedRestaurant} restaurants liked by you`;
  },
};

export default Favorite;
