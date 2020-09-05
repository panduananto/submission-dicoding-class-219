import CONSTANTS from '../../global/constants';

const { ENTER_KEY_CODE, ESC_KEY_CODE, SPACE_KEY_CODE } = CONSTANTS;

class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  showNavList() {
    const hamburgerButton = this.querySelector('#menu');
    const navbarListElement = this.querySelector('.navbar-list');

    hamburgerButton.addEventListener('click', (event) => {
      navbarListElement.classList.toggle('open');
      event.stopPropagation();
    });

    hamburgerButton.addEventListener('keyup', (event) => {
      if (event.keyCode === ENTER_KEY_CODE || event.keyCode === SPACE_KEY_CODE) {
        navbarListElement.classList.toggle('open');
        event.stopPropagation();
      } else if (event.keyCode === ESC_KEY_CODE) {
        navbarListElement.classList.remove('open');
        event.stopPropagation();
      }
    });
  }

  render() {
    this.innerHTML = `
      <nav>
        <div class="navbar">
          <div class="navbar-center">
            <a class="main-logo-container" href="/">
              <span class="main-logo-svg"
                ><img src="./assets/images/icons/restaurant.svg" alt="main-logo"
              /></span>
              <span class="main-logo-text">ComfyResto</span>
            </a>
            <a tabindex="0" id="menu" class="navbar-menu" aria-label="buka menu navigasi">
              <i class="fas fa-bars"></i>
            </a>
            <ul class="navbar-list">
              <li class="navbar-item">
                <a href="#/home">Home</a>
              </li>
              <li class="navbar-item">
                <a href="#/favorite">Favorite</a>
              </li>
              <li class="navbar-item">
                <a href="https://github.com/panduananto">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;

    this.showNavList();
  }
}

customElements.define('nav-bar', NavBar);
