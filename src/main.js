import {
  getSearchTemplate,
  getProfileTemplate,
  getMenuTemplate,
  getFiltersTemplate,
  getFilmListTemplate,
  getFilmDetailsTemplate,
  renderFilms,
  filmsAll,
} from './components';

import {
  films,
  groupedFilms
} from './data.js';

const renderComponent = (container, markup) => {
  container.insertAdjacentHTML(`beforeEnd`, markup);
};

const body = document.querySelector(`body`);
const header = body.querySelector(`.header`);
const main = body.querySelector(`.main`);
const footerStatistics = document.querySelector(`.footer__statistics`);

renderComponent(header, getSearchTemplate());
renderComponent(header, getProfileTemplate());
renderComponent(main, getMenuTemplate(groupedFilms));
renderComponent(main, getFiltersTemplate());
renderComponent(main, getFilmListTemplate());
renderComponent(body, getFilmDetailsTemplate(filmsAll[0]));
footerStatistics.textContent = `${films.length} movies inside`;

if (filmsAll.length > 0) {
  const filmsList = main.querySelector(`.films-list .films-list__container`);
  const showButton = main.querySelector(`.films-list__show-more`);

  showButton.addEventListener(`click`, () => {
    renderComponent(filmsList, renderFilms(filmsAll, 5));
    if (filmsAll.length === 0) {
      showButton.style = `display: none`;
    }
  });
}

const closePopup = document.querySelector(`.film-details__close-btn`);
const filmDetails = document.querySelector(`.film-details`);
closePopup.addEventListener(`click`, () => {
  filmDetails.style = `display: none`;
});
