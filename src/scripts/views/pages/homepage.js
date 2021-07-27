import RestaurantSource from '../../data/restaurant-source';
import '../../components/resto-list';
import '../../components/hero-section';
import '../../components/loading-spinner';
import '../../components/error-message';

const HomePage = {
  async render() {
    return `
    <loading-spinner></loading-spinner>
    
   <hero-section></hero-section> 
   
    <section class="explore" id="to-main">
      <div class="container">
        <h3 class="explore__header">
          <span class="explore__heading">Explore</span>
          <span class="explore__sub_heading">And Chase the Flavors</span>
        </h3>

        <resto-list></resto-list>
      </div>

    </section
    `;
  },

  async afterRender() {
    const restoListContainer = document.querySelector('resto-list');
    const loadingSpinner = document.querySelector('loading-spinner');
    try {
      const restaurants = await RestaurantSource.getRestoData();
      restoListContainer.resto = restaurants;
      loadingSpinner.parentElement.removeChild(loadingSpinner);
    } catch (error) {
      loadingSpinner.parentElement.removeChild(loadingSpinner);
      restoListContainer.innerHTML = '<error-message></error-message>';
    }
  },
};

export default HomePage;
