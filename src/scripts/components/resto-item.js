import CONFIG from '../globals/config';
import RatingInitiator from '../utils/rating-initiator';

class RestoItem extends HTMLElement {
  set restoItem(resto) {
    this._resto = resto;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="resto__image_wrap">
        <picture>
          <source media="(max-width: 649px)" srcset="${CONFIG.BASE_IMAGE_URL_SMALL + this._resto.pictureId}">
          <img class="resto__image lazyload" data-src="${CONFIG.BASE_IMAGE_URL_MEDIUM + this._resto.pictureId}" alt="${this._resto.name}" />
        </picture>         
          <p class="resto__city"><i class="fas fa-map-marker-alt"></i> ${this._resto.city}</p>
          <h5 class="resto__name">${this._resto.name}</h5>
        </div>

        <div class="resto__snippet_wrap">
          <span class="resto__rating_stars">${RatingInitiator.init(this._resto.rating)}
            <span class="resto__rating_text">(${this._resto.rating})</span>
          </span>

          <p class="resto__description">${this._resto.description.substring(0, 80)}</p>
          <a href="${`/#/detail/${this._resto.id}`}" class="btn btn--resto btn-gradient">Detail <span class="sr-only">, Restaurant Name: ${this._resto.name}, Rating: ${this._resto.rating}, City: ${this._resto.city}</span></a>
        </div>
    `;
  }
}

customElements.define('resto-item', RestoItem);
