import {truncateString} from '../utils';
import {AbstractComponent} from './abstract-component';

export class FilmCard extends AbstractComponent {
  constructor({
    title,
    rating,
    year,
    runtime,
    genres,
    comments,
    poster,
    description
  }) {
    super();
    this._title = title;
    this._rating = rating;
    this._year = year;
    this._runtime = runtime;
    this._genres = genres;
    this._comments = comments;
    this._poster = poster;
    this._description = description;
  }

  getTemplate() {
    return `<article class="film-card">
      <h3 class="film-card__title">${this._title}</h3>
      <p class="film-card__rating">${this._rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${this._year}</span>
        <span class="film-card__duration">${this._runtime}</span>
        <span class="film-card__genre">${this._genres}</span>
      </p>
      <img src="./images/posters/${this._poster}" alt="${this._title}" class="film-card__poster">
      <p class="film-card__description">${truncateString(this._description)}</p>
      <a class="film-card__comments">${this._comments} comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
      </form>
    </article>`;
  }
}
