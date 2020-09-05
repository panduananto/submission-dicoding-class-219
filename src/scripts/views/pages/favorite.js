const Favorite = {
  async render() {
    return `
      <section class="content-section">
        <div class="content-outer">
          <div class="content-inner">
            <h2 tabindex="0" id="start-main-content" class="content-inner-label">
              Your Favorite Restaurants
            </h2>
            <p tabindex="0" class="content-inner-caption">
              10 restaurants liked by you
            </p>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    // TODO
  },
};

export default Favorite;
