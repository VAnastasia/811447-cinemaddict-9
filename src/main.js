import {

} from './components';

import {
  films,
  filmsAll,
  filmsRated,
  filmsCommented,
  groupedFilms
} from './data.js';

import {FilmCard} from './components/film-card';
import {FilmDetails} from './components/film-details';
import {FilmList} from './components/film-list';
import {Search} from './components/search';
import {Profile} from './components/profile';
import {Menu} from './components/menu';
import {Filters} from './components/filters';
import {ShowMore} from './components/button-show-more';
import {NoFilm} from './components/no-film';
import {Position, render, unrender} from './utils';

const renderFilmsContainer = () => {
  const filmList = new FilmList();
  render(main, filmList.getElement(), Position.BEFOREEND);
};

const renderSearch = () => {
  const search = new Search();
  render(header, search.getElement(), Position.BEFOREEND);
};

const renderProfile = () => {
  const profile = new Profile();
  render(header, profile.getElement(), Position.BEFOREEND);
};

const renderMenu = (filmsMock) => {
  const menu = new Menu(filmsMock);
  render(main, menu.getElement(), Position.BEFOREEND);
};

const renderFilters = () => {
  const filters = new Filters();
  render(main, filters.getElement(), Position.BEFOREEND);
};

const renderNoFilm = () => {
  const message = new NoFilm();
  render(main, message.getElement(), Position.BEFOREEND);
};

const renderShowMore = () => {
  const button = new ShowMore();
  const filmsList = document.querySelector(`.films-list`);
  render(filmsList, button.getElement(), Position.BEFOREEND);
  button.getElement()
    .addEventListener(`click`, () => {
      const filmsAllContainer = document.querySelector(`.films-list__container`);
      filmsAll.splice(0, 5).forEach((film) => renderFilm(film, filmsAllContainer));
      if (filmsAll.length === 0) {
        unrender(button.getElement());
      }
    });
};

export const renderFilm = (filmMock, filmContainer) => {
  const film = new FilmCard(filmMock);
  const filmPopup = new FilmDetails(filmMock);

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      unrender(filmPopup.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  const renderFilmPopup = () => {
    render(main, filmPopup.getElement(), Position.BEFOREEND);
    document.addEventListener(`keydown`, onEscKeyDown);
  };

  film.getElement()
    .querySelector(`.film-card__title`)
    .addEventListener(`click`, () => {
      renderFilmPopup();
    });

  film.getElement()
    .querySelector(`.film-card__comments`)
    .addEventListener(`click`, () => {
      renderFilmPopup();
    });

  film.getElement()
    .querySelector(`.film-card__poster`)
    .addEventListener(`click`, () => {
      renderFilmPopup();
    });

  filmPopup.getElement()
    .querySelector(`.film-details__close-btn`)
    .addEventListener(`click`, () => {
      unrender(filmPopup.getElement());
    });

  filmPopup.getElement()
    .querySelector(`textarea`)
    .addEventListener(`focus`, () => {
      document.removeEventListener(`keydown`, onEscKeyDown);
    });

  filmPopup.getElement()
    .querySelector(`textarea`)
    .addEventListener(`blur`, () => {
      document.addEventListener(`keydown`, onEscKeyDown);
    });

  render(filmContainer, film.getElement(), Position.BEFOREEND);
};


const body = document.querySelector(`body`);
const header = body.querySelector(`.header`);
const main = body.querySelector(`.main`);
const footerStatistics = document.querySelector(`.footer__statistics`);

renderSearch();
renderProfile();
renderMenu(groupedFilms);
renderFilters();

if (films.length === 0) {
  renderNoFilm();
} else {
  renderFilmsContainer();
  const filmsAllContainer = document.querySelector(`.films-list__container`);
  filmsAll.splice(0, 5).forEach((film) => renderFilm(film, filmsAllContainer));

  if (filmsAll.length > 0) {
    renderShowMore();
  }

  const filmsRatedContainer = document.querySelectorAll(`.films-list--extra .films-list__container`)[0];
  filmsRated.forEach((film) => renderFilm(film, filmsRatedContainer));

  const filmsCommentedContainer = document.querySelectorAll(`.films-list--extra .films-list__container`)[1];
  filmsCommented.forEach((film) => renderFilm(film, filmsCommentedContainer));
}

footerStatistics.textContent = `${films.length} movies inside`;
