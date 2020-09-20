/* eslint-disable no-undef */
import FavoriteRestaurantSource from '../src/scripts/data/favorite-restaurant-source';
import * as TestFactories from './helpers/testFactories';

describe('Favoriting A Restaurant', () => {
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

  beforeEach(() => {
    addFavoriteButtonToDOM();
  });

  it('should show favorite button when the restaurant has not been favorited before', async () => {
    await TestFactories.createFavoriteButton(favoriteButtonElement, favorite);

    expect(
      favoriteButtonElement.querySelector(
        '[aria-label="tambah restaurant ke favorite"]'
      )
    ).toBeTruthy();
  });

  it('should not show unfavorite button when the restaurant has not been favorited before', async () => {
    await TestFactories.createFavoriteButton(favoriteButtonElement, favorite);

    expect(
      favoriteButtonElement.querySelector(
        '[aria-label="hapus restaurant dari favorite"]'
      )
    ).toBeFalsy();
  });

  it('should be able to favorite the restaurant', async () => {
    await TestFactories.createFavoriteButton(favoriteButtonElement, favorite);

    document
      .querySelector('#favorite-button')
      .dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantSource.getRestaurant(
      favorite.id
    );

    expect(restaurant).toEqual(favorite);

    await FavoriteRestaurantSource.deleteRestaurant(favorite.id);
  });

  it('should not favorite restaurant again when its already favorited', async () => {
    await TestFactories.createFavoriteButton(favoriteButtonElement, favorite);

    await FavoriteRestaurantSource.saveRestaurant(favorite);
    document
      .querySelector('#favorite-button')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantSource.getAllRestaurant()).toEqual([
      favorite,
    ]);

    await FavoriteRestaurantSource.deleteRestaurant(favorite.id);
  });

  it('should not favorite restaurant when it has no id', async () => {
    await TestFactories.createFavoriteButton(favoriteButtonElement, {});

    document
      .querySelector('#favorite-button')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantSource.getAllRestaurant()).toEqual([]);
  });
});
