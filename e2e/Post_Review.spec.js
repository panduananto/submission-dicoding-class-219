/* eslint-disable no-undef */
const assert = require('assert');

Feature('Posting Review On Restaurant');

Before((I) => {
  I.amOnPage('/');
});

Scenario('posting review on restaurant', async (I) => {
  I.seeElement('.content-section');
  I.seeElement('restaurant-list');
  I.seeElement('restaurant-item');
  I.seeElement('.restaurants-name');

  const firstRestaurant = locate('.restaurants-name').first();
  I.click(firstRestaurant);

  I.seeElement('.review-form');

  const nameInput = 'Udnap';
  const reviewInput = 'Enak banget makanannya';

  I.fillField('name-input', nameInput);
  I.fillField('review-input', reviewInput);

  I.click('.review-form-submit-button');
  I.seeElement('.loading-indicator');
  I.dontSeeElement('.loading-indicator');

  const lastReview = locate('.review-item .review-person-message').last();
  const lastReviewMessage = await I.grabTextFrom(lastReview);

  pause();

  assert.strictEqual(lastReviewMessage, reviewInput);
});
