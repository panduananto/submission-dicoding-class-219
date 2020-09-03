import '../RestaurantItem/RestaurantItem';

class RestaurantList extends HTMLElement {
  set restaurantList(restaurantList) {
    this._restaurantList = restaurantList;
    this.render();
  }

  render() {
    this.classList.add('content-center');
    this.innerHTML = '';
    this._restaurantList.forEach((item) => {
      const restaurantItemElement = document.createElement('restaurant-item');
      restaurantItemElement.restaurantItem = item;
      this.appendChild(restaurantItemElement);
    });
  }
}

customElements.define('restaurant-list', RestaurantList);
