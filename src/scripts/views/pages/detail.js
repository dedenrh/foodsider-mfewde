import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import {
  createHeaderTemplate,
  createBodyTemplate,
  createReviewTemplate,
  createFormReviewTemplate,
} from '../templates/detail-template';
import '../../components/error-message';
import '../../components/loading-spinner';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import reviewInitiator from '../../utils/review-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <section class="detail">
          <loading-spinner></loading-spinner>        
        <div class="container">

          <div class="detail__header"></div>

          <div class="detail__body detail--card" id="to-main"></div>

          <div class="detail__review detail--card"></div>

          <div class="detail__form_review"></div>
          
          <div id="likeButtonContainer"></div>

        </div>
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const detailContainer = document.querySelector('.container');
    const detailHeader = document.querySelector('.detail__header');
    const detailBody = document.querySelector('.detail__body');
    const detailReview = document.querySelector('.detail__review');
    const detailFormReview = document.querySelector('.detail__form_review');
    const loadingSpinner = document.querySelector('loading-spinner');

    try {
      const restaurantDetail = await RestaurantSource.getDetail(url.id);
      detailHeader.innerHTML = createHeaderTemplate(restaurantDetail);
      detailBody.innerHTML = createBodyTemplate(restaurantDetail);
      detailReview.innerHTML = createReviewTemplate(restaurantDetail);
      detailFormReview.innerHTML = createFormReviewTemplate();

      loadingSpinner.parentElement.removeChild(loadingSpinner);

      await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: restaurantDetail.restaurant,
      });

      await reviewInitiator.init({
        formReviewContainer: detailFormReview,
        id: restaurantDetail.restaurant.id,
      });
    } catch (error) {
      loadingSpinner.parentElement.removeChild(loadingSpinner);
      detailContainer.innerHTML = '<error-message></error-message>';
    }
  },
};

export default Detail;
