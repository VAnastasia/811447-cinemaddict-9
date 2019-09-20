import {Position, render, unrender} from '../utils';
import {FilmCard} from '../components/film-card';
import {FilmDetails} from '../components/film-details';

export class MovieController {
  constructor(container, data, onChangeView, onDataChange) {
    this._container = container;
    this._data = data;
    this._onChangeView = onChangeView;
    this._onDataChange = onDataChange;
  }

  init(filmMock, filmContainer) {
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

  setDefaultView() {
    if (this._container.getElement().contains(this._filmPopup.getElement())) {
      this._container.getElement().replaceChild(this._filmt.getElement(), this._filmPopup.getElement());
    }
  }
}
