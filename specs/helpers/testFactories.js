/* eslint-disable import/prefer-default-export */
import '../../src/scripts/components/FavoriteButton/FavoriteButton';

const createFavoriteButton = async (favoriteButtonElement, favorite) => {
  favoriteButtonElement.setAttribute('favorite', `${JSON.stringify(favorite)}`);

  document.body.appendChild(favoriteButtonElement);
  await favoriteButtonElement.render();
};

export { createFavoriteButton };
