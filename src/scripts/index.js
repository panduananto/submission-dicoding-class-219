import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";
import "../scripts/components/NavBar/NavBar.js";
import "../scripts/components/JumboHeader/JumboHeader.js";
import "../scripts/components/RestaurantList/RestaurantList.js";

import DataRestaurant from "./data/DataRestaurant.js";

document.addEventListener("DOMContentLoaded", () => {
  const restaurant = new DataRestaurant()

  const restaurantListElement = document.querySelector("restaurant-list");

  restaurant.getRestaurant().then((restaurant) => {
    restaurantListElement.restaurantList = restaurant;
  });
});
