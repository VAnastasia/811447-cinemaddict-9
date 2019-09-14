import {getUserRating} from './user-rating.js';
import {createElement} from '../utils';

export class Profile {
  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  getTemplate() {
    return `<section class="header__profile profile">
      ${getUserRating()}
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`;
  }
}
