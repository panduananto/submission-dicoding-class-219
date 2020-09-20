/* eslint-disable no-unused-expressions */
import FavoriteRestaurantSource from '../../data/favorite-restaurant-source';

class FavoriteButton extends HTMLElement {
  async connectedCallback() {
    this._restaurantData = JSON.parse(this.getAttribute('favorite'));
    await this.render();
  }

  async render() {
    const { id } = this._restaurantData;

    if (await this.isRestaurantFavorited(id)) {
      this.renderFavorited();
    } else {
      this.renderFavorite();
    }
  }

  async isRestaurantFavorited(id) {
    const restaurant = await FavoriteRestaurantSource.getRestaurant(id);
    return !!restaurant;
  }

  renderFavorite() {
    this.innerHTML = `
      <button
        id="favorite-button"
        class="favorite-button"
        aria-label="tambah restaurant ke favorite">
        <i class="far fa-heart"></i>
      </button>
    `;

    const favoriteButton = document.querySelector('#favorite-button');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantSource.saveRestaurant(this._restaurantData);
      this.render();
    });
  }

  renderFavorited() {
    this.innerHTML = `
      <button
        id="delete-button"
        class="favorite-button"
        aria-label="hapus restaurant dari favorite">
        <i class="fas fa-heart"></i>
      </button>
    `;

    const deleteButton = document.querySelector('#delete-button');
    deleteButton.addEventListener('click', async () => {
      await FavoriteRestaurantSource.deleteRestaurant(this._restaurantData.id);
      this.render();
    });
  }
}

customElements.get('favorite-button') ||
  customElements.define('favorite-button', FavoriteButton);
