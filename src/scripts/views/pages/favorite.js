import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import '../../components/resto-list';
import '../../components/liked-message';

const Favorite = {
  async render() {
    return `
      <section class="favorite">
        <div class="container">
          <h2 class="favorite__header" id="to-main">Your Saved Restaurant</h2>

          <resto-list></resto-list>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const favoriteContainer = document.querySelector('resto-list');
    if (restaurants.length === 0) {
      favoriteContainer.innerHTML = '<liked-message></liked-message>';
    } else {
      favoriteContainer.resto = restaurants;
    }
  },
};

export default Favorite;
