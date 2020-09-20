/* eslint-disable no-undef */
import FavoriteRestaurantSource from '../src/scripts/data/favorite-restaurant-source';
import * as TestFactories from './helpers/testFactories';

describe('Unfavoriting A Restaurant', () => {
  let favoriteButtonElement;
  const favorite = {
    id: 'mu6g39gdgbnkdgkzor',
    name: 'Melting Pot',
    pictureId: '37',
    city: 'Medan',
    description:
      'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
    rating: 3.7,
  };

  const addFavoriteButtonToDOM = () => {
    favoriteButtonElement = document.createElement('favorite-button');
  };

  beforeEach(async () => {
    addFavoriteButtonToDOM();
    await FavoriteRestaurantSource.saveRestaurant(favorite);
  });

  afterEach(async () => {
    await FavoriteRestaurantSource.deleteRestaurant(favorite.id);
  });

  it('should show unfavorite button when the restaurant has been favorited', async () => {
    await TestFactories.createFavoriteButton(favoriteButtonElement, favorite);

    expect(
      favoriteButtonElement.querySelector(
        '[aria-label="hapus restaurant dari favorite"]'
      )
    ).toBeTruthy();
  });

  it('should not show favorite button when the movie has been favorited', async () => {
    await TestFactories.createFavoriteButton(favoriteButtonElement, favorite);

    expect(
      favoriteButtonElement.querySelector(
        '[aria-label="tambah restaurant ke favorite"]'
      )
    ).toBeFalsy();
  });

  it('should be able to remove favorited restaurant from the list', async () => {
    await TestFactories.createFavoriteButton(favoriteButtonElement, favorite);

    document.querySelector('#delete-button').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantSource.getAllRestaurant()).toEqual([]);
  });

  it('should not throw error if the unfavorited restaurant is not in the list', async () => {
    await TestFactories.createFavoriteButton(favoriteButtonElement, favorite);

    await FavoriteRestaurantSource.deleteRestaurant(favorite.id);

    document.querySelector('#delete-button').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantSource.getAllRestaurant()).toEqual([]);
  });
});
