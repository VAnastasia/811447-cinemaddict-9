import {getUserRating} from './user-rating.js';
import {AbstractComponent} from './abstract-component';

export class Profile extends AbstractComponent {
  getTemplate() {
    return `<section class="header__profile profile">
      ${getUserRating()}
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`;
  }
}
