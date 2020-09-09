import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './components/NavBar/NavBar';
import './components/JumboHeader/JumboHeader';
import './components/FooterEl/FooterEl';
import './components/SkipToContent/SkipToContent';

import App from './views/app';
import serviceWorkerRegister from './utils/service-worker-register';

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('DOMContentLoaded', () => {
  app.renderPage();
  serviceWorkerRegister();
});
