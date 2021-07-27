import DrawerInitiator from '../utils/drawer-initiator';
import HeaderTransition from '../utils/header-transition';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button, drawer, content, menuItem, header,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._menuItem = menuItem;
    this._header = header;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      menuItem: this._menuItem,
    });

    HeaderTransition.init({
      header: this._header,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
