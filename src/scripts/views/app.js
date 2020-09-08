import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ content }) {
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    // TODO
  }

  async renderPage() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.querySelector('.navbar-list').classList.remove('open');

    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
