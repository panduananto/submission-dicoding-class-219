import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

import { renderError } from './templates/template-creator';

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

    try {
      const url = UrlParser.parseActiveUrlWithCombiner();
      const page = routes[url];
      if (page !== undefined) {
        this._content.innerHTML = await page.render();
        await page.afterRender();
      } else {
        throw new Error('Routes not found!');
      }
    } catch (error) {
      renderError();
    }
  }
}

export default App;
