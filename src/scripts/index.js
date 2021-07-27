import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/style.css';
import '../styles/responsive.css';
import './components/nav-bar';
import './components/footer-bar';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.hamburgerButton'),
  drawer: document.querySelector('.nav-list'),
  content: document.querySelector('#mainContent'),
  menuItem: document.querySelector('.nav-item'),
  header: document.querySelector('.header'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
