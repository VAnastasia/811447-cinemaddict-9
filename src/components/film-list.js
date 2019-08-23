import {getFilmCardTemplate} from './film-card';
import {getButtonShowTemplate} from './button-show-more';
import {films} from './../data';

const filmsAll = films.slice();

const filmsRated = films
  .slice()
  .sort((a, b) => a.rating < b.rating ? 1 : -1)
  .slice(0, 2);

const filmsCommented = films
  .slice()
  .sort((a, b) => a.comments < b.comments ? 1 : -1)
  .slice(0, 2);

export const renderFilms = (initialFilms, count) => {
  if (initialFilms.length > 0) {
    return initialFilms.splice(0, count)
      .map(getFilmCardTemplate)
      .join(``);
  }
  return ``;
};

export {filmsAll};

export const getFilmListTemplate = () =>
  `<section class="films">
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
      <div class="films-list__container">
        ${renderFilms(filmsAll, 5)}
      </div>
      ${getButtonShowTemplate()}
    </section>
    <section class="films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
      <div class="films-list__container">
        ${renderFilms(filmsRated, 2)}
      </div>
    </section>
    <section class="films-list--extra">
      <h2 class="films-list__title">Most commented</h2>
      <div class="films-list__container">
        ${renderFilms(filmsCommented, 2)}
      </div>
    </section>
  </section>`;
