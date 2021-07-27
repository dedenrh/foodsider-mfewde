import CONFIG from '../../globals/config';
import RatingInitiator from '../../utils/rating-initiator';

const createHeaderTemplate = ({ restaurant }) => `
    <div class="detail__image">
        <picture>
          <source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}">
          <img src="${CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId}" alt="${restaurant.name}" />
        </picture>  

    </div>

    <aside class="detail__aside detail--summary">
        <h2 class="detail__title">${restaurant.name}</h2>
        <h3 class="detail__city">
            <span class="detail__icon"><i class="fas fa-city"></i></span> ${restaurant.city}
        </h3>
        <p class="detail__address"> 
            <span class="detail__icon"><i class="fas fa-map-marker"></i></span> ${restaurant.address}
        </p>

        <div class="detail__rating">
            <span class="detail__rating_star">${RatingInitiator.init(restaurant.rating)}</span>
            <sup>${restaurant.rating}</sup>
        </div>
    </aside>

    <aside class="detail__aside detail--category">
        <h2 class="detail__title">Category</h2>
        <ul class="detail__category_items">
        ${restaurant.categories.map((category) => `
            <li class="detail__category_item"><i class="fas fa-chevron-right"></i> ${category.name}</li>
        `).join('')}
        </ul>
    </aside>
`;

const createBodyTemplate = ({ restaurant }) => `
    <h1 class="detail__body_title title--main">Description</h1>

        <p class="detail__body_paragraph">${restaurant.description}</p>

    <h1 class="detail__body_title title--sub">Menu</h1>

    <div class="detail__menu">
        <div class="detail__menu_cards">
            <h4 class="detail__menu_title">Foods</h4>
            
            <ul class="detail__menu_list">
            ${restaurant.menus.foods.map(({ name }) => `
                <li class="detail__menu_item">
                    <span class="detail__icon"><i class="fas fa-hamburger"></i></span> ${name}
                </li>
            `).join('')}  
            </ul>
        </div>

        <div class="detail__menu_cards">
            <h4 class="detail__menu_title">Drinks</h4>
            
            <ul class="detail__menu_list">
            ${restaurant.menus.drinks.map(({ name }) => `
                <li class="detail__menu_item">
                    <span class="detail__icon"><i class="fas fa-coffee"></i></span> ${name}
                </li>
            `).join('')}
            </ul>
        </div>
    </div>
`;

const createReviewTemplate = ({ restaurant }) => `
    <h1 class="detail__body_title title--main">Reviews</h1>

    <div class="detail__reviews">
    ${restaurant.customerReviews.map(({ date, name, review }) => `
        <div class="detail__reviews_item">
            <img class="detail__reviews_avatar" src="/logos/avatar.svg" alt="Avatar" />
            <div class="detail__reviews_text">
                <h4 class="detail__reviews_name">${name}</h4>
                <p class="detail__reviews_date">${date}</p>
                <p class="detail__reviews_comment">${review}</p>
            </div>
        </div>
    `).join('')}
    </div>
`;

const createFormReviewTemplate = () => `
     <h1 class="detail__body_title title--main">Add Your Review</h1>
        <div class="detail__form_content">
            <form class="form comment-form">
                <div class="input-group">
                    <input type="text" class="input inputName" placeholder="Name" name="Name" />
                    <span class="bar"></span>
                </div>

                <div class="input-group">
                    <textarea type="text" cols="30" rows="8" class="input inputReview" placeholder="Add Your Review" name="Review"></textarea>
                    <span class="bar"></span>
                </div>

                <button type="submit" class="btn btn--form">Submit</button>
            </form>
        </div>
`;

export {
  createHeaderTemplate, createBodyTemplate, createReviewTemplate, createFormReviewTemplate,
};
