import {Position, render, unrender} from '../utils';
import {FilmList} from '../components/film-list';
import {FilmCard} from '../components/film-card';
import {FilmDetails} from '../components/film-details';
import {ShowMore} from '../components/show-more';
import {Sort} from '../components/sort';

export class PageController {
  constructor(container, films) {
    this._container = container;
    this._films = films;
    this._list = new FilmList();
    this._sort = new Sort();
  }

  init() {
    render(this._container, this._list.getElement(), Position.BEFOREEND);
    render(this._container, this._sort.getElement(), Position.AFTERBEGIN);

    this._sort.getElement()
      .addEventListener(`click`, (evt) => this._onSortLinkClick(evt));

    this._filmsAll = this._films.slice();
    this._filmsRated = this._films
      .slice()
      .sort((a, b) => a.rating < b.rating ? 1 : -1)
      .slice(0, 2);

    this._filmsCommented = this._films
      .slice()
      .sort((a, b) => a.comments < b.comments ? 1 : -1)
      .slice(0, 2);

    const filmsAllContainer = this._list.getElement()
      .querySelector(`.films-list__container`);
    this._filmsAll.splice(0, 5).forEach((film) => this._renderFilm(film, filmsAllContainer));

    this._renderShowMore();

    const filmsRatedContainer = this._list.getElement()
      .querySelectorAll(`.films-list--extra .films-list__container`)[0];
    this._filmsRated.forEach((film) => this._renderFilm(film, filmsRatedContainer));

    const filmsCommentedContainer = this._list.getElement()
      .querySelectorAll(`.films-list--extra .films-list__container`)[1];
    this._filmsCommented.forEach((film) => this._renderFilm(film, filmsCommentedContainer));
  }

  _renderFilm(filmMock, filmContainer) {
    const film = new FilmCard(filmMock);
    const filmPopup = new FilmDetails(filmMock);

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        unrender(filmPopup.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    const renderFilmPopup = () => {
      render(this._container, filmPopup.getElement(), Position.BEFOREEND);
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
  }

  _renderShowMore() {
    const showMore = new ShowMore();
    const filmsAllContainer = document.querySelector(`.films-list__container`);
    const filmsList = document.querySelector(`.films-list`);

    if (this._films.length > 8) {
      render(filmsList, showMore.getElement(), Position.BEFOREEND);

      showMore.getElement()
        .addEventListener(`click`, () => {
          unrender(showMore.getElement());

          this._filmsAll.splice(0, 5).forEach((film) => this._renderFilm(film, filmsAllContainer));
          if (this._filmsAll.length > 0) {
            render(filmsList, showMore.getElement(), Position.BEFOREEND);
          }
        });
    }
  }

  _onSortLinkClick(evt) {
    evt.preventDefault();

    if (evt.target.tagName !== `A`) {
      return;
    }

    const filmsAllContainer = this._list.getElement()
      .querySelector(`.films-list__container`);

    const showMore = this._list.getElement()
      .querySelector(`.films-list__show-more`);

    filmsAllContainer.innerHTML = ``;
    unrender(showMore);

    switch (evt.target.dataset.sortType) {
      case `date`:
        const sortedByDateFilms = this._films.slice().sort((a, b) => new Date(a.year) - new Date(b.year));
        this._filmsAll = sortedByDateFilms.slice();
        this._filmsAll.splice(0, 5).forEach((film) => this._renderFilm(film, filmsAllContainer));
        this._renderShowMore();
        break;
      case `rating`:
        const sortedByRatingFilms = this._films.slice().sort((a, b) => b.rating - a.rating);
        this._filmsAll = sortedByRatingFilms.slice();
        this._filmsAll.splice(0, 5).forEach((film) => this._renderFilm(film, filmsAllContainer));
        this._renderShowMore();
        break;
      case `default`:
        this._filmsAll = this._films.slice();
        this._filmsAll.splice(0, 5).forEach((film) => this._renderFilm(film, filmsAllContainer));
        this._renderShowMore();
        break;
    }
  }
}
