import {getFilmCardTemplate} from './film-card.js';
import {getButtonShowTemplate} from './button-show-more.js';

const addFilms = (count) => {
  const films = [];
  for (let i = 0; i < count; i++) {
    films.push(getFilmCardTemplate());
  }
  return films.join(`\n`);
};

export const getFilmListTemplate = () => `
<section class="films">
  <section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    <div class="films-list__container">
      ${addFilms(5)}
    </div>
    ${getButtonShowTemplate()}
  </section>
  <section class="films-list--extra">
    <h2 class="films-list__title">Top rated</h2>
    <div class="films-list__container">
      ${addFilms(2)}
    </div>
  </section>
  <section class="films-list--extra">
    <h2 class="films-list__title">Most commented</h2>
    <div class="films-list__container">
      ${addFilms(2)}
    </div>
  </section>
</section>
`;
