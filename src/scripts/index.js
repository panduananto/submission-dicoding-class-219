import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './components/NavBar/NavBar';
import './components/JumboHeader/JumboHeader';
import './components/RestaurantList/RestaurantList';
import './components/FooterEl/FooterEl';
import './components/SkipToContent/SkipToContent';

import restaurants from '../assets/data-restaurant.json';

document.addEventListener('DOMContentLoaded', () => {
  const restaurantListElement = document.querySelector('restaurant-list');
  restaurantListElement.restaurantList = restaurants.restaurants;
});
