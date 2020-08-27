class DataRestaurant {
  async getRestaurant() {
    try {
      let result = await fetch("../../assets/data-restaurant.json");
      let data = await result.json();
      let restaurants = data.restaurants;
      restaurants = restaurants.map((restaurant) => {
        const { id, name, description, pictureId, city, rating } = restaurant;
        return { id, name, description, pictureId, city, rating };
      });
      console.log(restaurants);
      return restaurants;
    } catch (error) {
      console.log(error);
    }
  }
}

export default DataRestaurant;
