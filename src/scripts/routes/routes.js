import HomePage from '../views/pages/homepage';
import Favorite from '../views/pages/favorite';
import detail from '../views/pages/detail';

const routes = {
  '/': HomePage,
  '/favorite': Favorite,
  '/detail/:id': detail,
};

export default routes;
