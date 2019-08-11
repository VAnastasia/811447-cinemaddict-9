import {getUserRating} from './user-rating.js';

export const getProfileTemplate = () => `
<section class="header__profile profile">
  ${getUserRating()}
  <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
</section>
`;
