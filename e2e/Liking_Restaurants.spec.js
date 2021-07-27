const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking and unliking restaurant', async ({ I }) => {
  I.see('Couldn\'t find any data', '.liked__message_heading');

  I.amOnPage('/');
  I.seeElement('resto-list resto-item');
  // Liking Starts
  const firstRestaurant = locate('resto-item .resto__name').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurantTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('resto-item');
  const likedRestaurantTitle = await I.grabTextFrom('.resto__name');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  // Liking Ends

  // Unliking Starts
  I.click(firstRestaurantTitle);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  // Unliking Ends

  I.amOnPage('/#/favorite');
  I.see('Couldn\'t find any data', '.liked__message_heading');
});
