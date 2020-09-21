/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unfavoriting Restaurants');

Before((I) => {
  I.amOnPage('/');
});

Scenario('unfavoriting a restaurant', async (I) => {
  I.seeElement('.content-section');
  I.seeElement('restaurant-list');
  I.seeElement('restaurant-item');
  I.seeElement('.restaurants-name');

  const firstRestaurant = locate('.restaurants-name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-list');
  I.seeElement('restaurant-item');

  const favoritedRestaurantName = await I.grabTextFrom('.restaurants-name');
  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);

  const favoritedRestaurant = locate('.restaurants-name').first();
  const firstFavoritedRestaurant = await I.grabTextFrom(favoritedRestaurant);

  I.click(favoritedRestaurant);

  I.seeElement('#delete-button');
  I.click('#delete-button');

  const unfavoritedRestaurant = await I.grabTextFrom('.header-big-title');
  assert.strictEqual(firstFavoritedRestaurant, unfavoritedRestaurant);

  I.amOnPage('/#/favorite');
  I.see('No Favorite Restaurant', '.content-error h1');
});
