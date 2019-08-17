import {getFilmCardTemplate} from './film-card';
import {getButtonShowTemplate} from './button-show-more';
import {films as filmsArray} from './data';

// const addFilms = (count) => {
//   const films = [];
//   for (let i = 0; i < count; i++) {
//     films.push(getFilmCardTemplate());
//   }
//   return films.join(`\n`);
// };



const renderFilms = (films, begin, end) => {
  const filmsRendered = [];
  const filmsList = films.splice(begin, end);
  filmsList.forEach((film) => {
    filmsRendered.push(getFilmCardTemplate(film));
  });
  return filmsRendered.join(`\n`);
};

const filmsAll = filmsArray.slice();
const filmsRated = filmsArray.slice()
  .sort((a, b) => a.rating < b.rating ? 1 : -1)
  .slice(0, 2);
const filmsCommented = filmsArray.slice()
  .sort((a, b) => a.comments < b.comments ? 1 : -1)
  .slice(0, 2);


export const getFilmListTemplate = () => `
<section class="films">
  <section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    <div class="films-list__container">
      ${renderFilms(filmsAll, 0, 5)}
    </div>
    ${getButtonShowTemplate()}
  </section>
  <section class="films-list--extra">
    <h2 class="films-list__title">Top rated</h2>
    <div class="films-list__container">
      ${renderFilms(filmsRated, 0, 2)}
    </div>
  </section>
  <section class="films-list--extra">
    <h2 class="films-list__title">Most commented</h2>
    <div class="films-list__container">
      ${renderFilms(filmsCommented, 0, 2)}
    </div>
  </section>
</section>
`;
