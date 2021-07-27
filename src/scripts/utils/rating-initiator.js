const RatingInitiator = {
  init(rating) {
    let starsRating = '';
    for (let i = 0; i < parseFloat(rating); i++) {
      if ((parseFloat(rating)) > i && i === (parseInt(rating, 10))) {
        starsRating += '<i class="fas fa-star-half-alt"></i>';
      } else {
        starsRating += '<i class="fas fa-star rating"></i>';
      }
    }
    return starsRating;
  },
};

export default RatingInitiator;
