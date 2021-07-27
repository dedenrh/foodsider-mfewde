import RestaurantSource from '../data/restaurant-source';
import { createFormReviewTemplate } from '../views/templates/detail-template';

const reviewInitiator = {
  async init({ formReviewContainer, id }) {
    this._formReviewContainer = formReviewContainer;
    this._id = id;

    await this._renderForm();
  },

  async _renderForm() {
    this._formReviewContainer = createFormReviewTemplate;
    const submitButton = document.querySelector('.btn--form');

    submitButton.addEventListener('click', async (e) => {
      e.preventDefault();

      const inputName = document.querySelector('.inputName');
      const inputReview = document.querySelector('.inputReview');
      const form = document.querySelector('.form');

      const reviewData = {
        id: this._id,
        name: inputName.value,
        review: inputReview.value,
      };

      if (inputName.value === '') {
        alert('Name Value cannot be empty');
      } else if (inputReview.value === '') {
        alert('Review Value cannot be empty');
      } else {
        await RestaurantSource.postReview(reviewData);
        form.reset();
        this._renderReview(reviewData.name, reviewData.review);
      }
    });
  },

  _renderReview(name, review) {
    const reviewContainer = document.querySelector('.detail__reviews');
    const date = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });

    const dataReview = `
    <div class="detail__reviews_item">
      <img class="detail__reviews_avatar" src="/images/avatar.svg" alt="Avatar" />
      <div class="detail__reviews_text">
        <h4 class="detail__reviews_name">${name}</h4>
        <p class="detail__reviews_date">${date}</p>
        <p class="detail__reviews_comment">${review}</p>
      </div>
    </div>
    `;

    reviewContainer.innerHTML += dataReview;
  },
};

export default reviewInitiator;
