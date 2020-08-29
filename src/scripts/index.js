import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";
import "../scripts/components/NavBar/NavBar.js";
import "../scripts/components/JumboHeader/JumboHeader.js";
import "../scripts/components/RestaurantList/RestaurantList.js";
import "../scripts/components/FooterEl/FooterEl.js";
import "../scripts/components/SkipToContent/SkipToContent.js";

import restaurants from "../assets/data-restaurant.json";

document.addEventListener("DOMContentLoaded", () => {
  const restaurantListElement = document.querySelector("restaurant-list");
  restaurantListElement.restaurantList = restaurants.restaurants;
});
