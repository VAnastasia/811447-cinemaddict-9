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
        renderFilmPopup();
      });

    this._film.getElement()
      .querySelector(`.film-card__comments`)
      .addEventListener(`click`, () => {
        renderFilmPopup();
      });

    this._film.getElement()
      .querySelector(`.film-card__poster`)
      .addEventListener(`click`, () => {
        renderFilmPopup();
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
    if (this._container.getElement().contains(this._filmPopup.getElement())) {
      this._container.getElement().replaceChild(this._film.getElement(), this._filmPopup.getElement());
    }
  }
}
