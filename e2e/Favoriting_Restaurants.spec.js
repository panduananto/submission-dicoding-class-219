/* eslint-disable no-undef */
const assert = require('assert');

Feature('Favoriting Restaurants');

Before((I) => {
  I.amOnPage('/');
});

Scenario('showing empty favorite restaurants', (I) => {
  I.amOnPage('/#/favorite');
  I.seeElement('.content-error');
  I.see('No Favorite Restaurant', '.content-error h1');
});

Scenario('favoriting one restaurant', async (I) => {
  I.seeElement('.content-section');
  I.seeElement('restaurant-list');
  I.seeElement('restaurant-item');
  I.seeElement('.restaurants-item-content a');

  const firstRestaurant = locate('.restaurants-item-content a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-item');
  const favoritedRestaurantTitle = await I.grabTextFrom(
    'restaurant-item .restaurants-name'
  );

  assert.strictEqual(firstRestaurantName, favoritedRestaurantTitle);
});
