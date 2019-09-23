import {Position, render, unrender} from '../utils';
import {FilmCard} from '../components/film-card';
import {FilmDetails} from '../components/film-details';

export class MovieController {
  constructor(container, data, onChangeView, onDataChange) {
    this._container = container;
    this._data = data;
    this._onChangeView = onChangeView;
    this._onDataChange = onDataChange;

    this._film = new FilmCard(data);
    this._filmPopup = new FilmDetails(data);

    this.init();
  }

  init() {
    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        unrender(this._filmPopup.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    const renderFilmPopup = () => {
      render(this._container, this._filmPopup.getElement(), Position.BEFOREEND);
      document.addEventListener(`keydown`, onEscKeyDown);
    };

    this._film.getElement()
      .querySelector(`.film-card__title`)
      .addEventListener(`click`, () => {
        this._onChangeView();
        renderFilmPopup();
      });

    this._film.getElement()
      .querySelector(`.film-card__comments`)
      .addEventListener(`click`, () => {
        this._onChangeView();
        renderFilmPopup();
      });

    this._film.getElement()
      .querySelector(`.film-card__poster`)
      .addEventListener(`click`, () => {
        this._onChangeView();
        renderFilmPopup();
      });

    this._film.getElement()
      .querySelector(`.film-card__controls-item--add-to-watchlist`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        const entry = {
          id: this._film._id,
          poster: this._film._poster,
          title: this._film._title,
          rating: this._film._rating,
          year: this._film._year,
          runtime: this._film._runtime,
          genres: this._film._genres,
          description: this._film._description,
          comments: this._film._comments,
          watchlist: !this._film._watchlist,
          watched: this._film._watched,
          favorite: this._film._favorite
        };
        this._onDataChange(entry, entry.id);
      });

    this._film.getElement()
      .querySelector(`.film-card__controls-item--mark-as-watched`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        const entry = {
          id: this._film._id,
          poster: this._film._poster,
          title: this._film._title,
          rating: this._film._rating,
          year: this._film._year,
          runtime: this._film._runtime,
          genres: this._film._genres,
          description: this._film._description,
          comments: this._film._comments,
          watchlist: this._film._watchlist,
          watched: !this._film._watched,
          favorite: this._film._favorite
        };
        this._onDataChange(entry, entry.id);
      });

    this._film.getElement()
      .querySelector(`.film-card__controls-item--favorite`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        const entry = {
          id: this._film._id,
          poster: this._film._poster,
          title: this._film._title,
          rating: this._film._rating,
          year: this._film._year,
          runtime: this._film._runtime,
          genres: this._film._genres,
          description: this._film._description,
          comments: this._film._comments,
          watchlist: this._film._watchlist,
          watched: this._film._watched,
          favorite: !this._film._favorite
        };
        this._onDataChange(entry, entry.id);
      });

    this._filmPopup.getElement()
      .querySelector(`.film-details__close-btn`)
      .addEventListener(`click`, () => {
        unrender(this._filmPopup.getElement());
      });

    this._filmPopup.getElement()
      .querySelector(`textarea`)
      .addEventListener(`focus`, () => {
        document.removeEventListener(`keydown`, onEscKeyDown);
      });

    this._filmPopup.getElement()
      .querySelector(`textarea`)
      .addEventListener(`blur`, () => {
        document.addEventListener(`keydown`, onEscKeyDown);
      });

    this._filmPopup.getElement()
      .querySelector(`.film-details__controls`)
      .addEventListener(`change`, () => {
        const formData = new FormData(this._filmPopup.getElement().querySelector(`.film-details__inner`));

        const entry = {
          id: this._filmPopup._id,
          poster: this._filmPopup._poster,
          age: this._filmPopup._age,
          title: this._filmPopup._title,
          rating: this._filmPopup._rating,
          director: this._filmPopup._director,
          writers: this._filmPopup._writers,
          actors: this._filmPopup._actors,
          year: this._filmPopup._year,
          runtime: this._filmPopup._runtime,
          genres: this._filmPopup._genres,
          country: this._filmPopup._country,
          description: this._filmPopup._description,
          comments: this._filmPopup._comments,
          watchlist: Boolean(formData.get(`watchlist`)),
          watched: Boolean(formData.get(`watched`)),
          favorite: Boolean(formData.get(`favorite`))
        };

        this._filmPopup.getElement()
          .querySelector(`.film-details__close-btn`)
          .addEventListener(`click`, () => {
            unrender(this._filmPopup.getElement());

            this._onDataChange(entry, entry.id);
          });
      });

    render(this._container, this._film.getElement(), Position.BEFOREEND);
  }

  setDefaultView() {
    if (this._container.contains(this._filmPopup.getElement())) {
      unrender(this._filmPopup.getElement());
    }
  }
}
