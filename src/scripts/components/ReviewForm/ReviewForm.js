import UrlParser from '../../routes/url-parser';

class ReviewForm extends HTMLElement {
  constructor() {
    super();
    this._id = UrlParser.parseActiveUrlWithoutCombiner().id;
    this._name = '';
    this._review = '';

    this.addEventListener('change', (event) => {
      const elementTarget = event.target;
      if (elementTarget.classList.contains('review-form-input-name')) {
        this.onNameChangeHandler(event);
      } else if (elementTarget.classList.contains('review-form-input-review')) {
        this.onReviewChangeHandler(event);
      }
    });

    this.addEventListener('click', (event) => {
      const elementTarget = event.target;
      if (elementTarget.classList.contains('review-form-submit-button')) {
        this.onButtonSubmitClick();
      }
    });
  }

  connectedCallback() {
    this.render();
  }

  onNameChangeHandler(event) {
    const { value } = event.target;
    this._name = value;
  }

  onReviewChangeHandler(event) {
    const { value } = event.target;
    this._review = value;
  }

  onReviewSubmit(review) {
    console.log(review);
  }

  onButtonSubmitClick() {
    const review = {
      id: this._id,
      name: this._name,
      review: this._review,
    };

    this.onReviewSubmit(review);
  }

  render() {
    this.innerHTML = `
      <div class="review-form">
        <div class="review-form-group">
          <label for="name-input">Name</label>
          <input
            id="name-input"
            class="review-form-input-name"
            aria-label="Name"
            placeholder="Please enter your name here..."
            value="${this._name}"
            type="text">
        </div>
        <div class="review-form-group">
          <label for="review-input">Review Message</label>
          <textarea
            id="review-input"
            class="review-form-input-review"
            aria-label="Review"
            placeholder="Please enter your review here..."
            value="${this._review}"></textarea>
        </div>
        <button class="review-form-submit-button">send review</button>
      </div>
    `;
  }
}

customElements.define('review-form', ReviewForm);
