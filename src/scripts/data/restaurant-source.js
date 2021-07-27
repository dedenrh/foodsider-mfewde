import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestaurantSource {
  static async getRestoData() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_DATA);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async postReview(review) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'X-Auth-Token': CONFIG.KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
    return response.json();
  }
}

export default RestaurantSource;
