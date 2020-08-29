class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  showNavList() {
    const enterKeyCode = 13;
    const escKeyCode = 27;
    const spaceKeyCode = 32;
    const hamburgerButton = this.querySelector("#menu");
    const navbarListElement = this.querySelector(".navbar-list");

    hamburgerButton.addEventListener("click", (event) => {
      navbarListElement.classList.toggle("open");
      event.stopPropagation();
    });

    hamburgerButton.addEventListener("keyup", (event) => {
      if (event.keyCode === enterKeyCode || event.keyCode === spaceKeyCode) {
        navbarListElement.classList.toggle("open");
        event.stopPropagation();
      } else if (event.keyCode === escKeyCode) {
        navbarListElement.classList.remove("open");
        event.stopPropagation();
      }
    });
  }

  render() {
    this.innerHTML = `
      <nav>
        <div class="navbar">
          <div class="navbar-center">
            <a class="main-logo-container" href="./index.html">
              <span class="main-logo-svg"
                ><img src="../assets/icons/restaurant.svg" alt="main-logo"
              /></span>
              <span class="main-logo-text">ComfyResto</span>
            </a>
            <a tabindex="0" id="menu" class="navbar-menu" aria-label="buka menu navigasi">
              <i class="fas fa-bars"></i>
            </a>
            <ul class="navbar-list">
              <li class="navbar-item">
                <a href="./index.html">Home</a>
              </li>
              <li class="navbar-item">
                <a href="#">Favorite</a>
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

customElements.define("nav-bar", NavBar);
