import {getCommentsTemplate} from './comments';
import {AbstractComponent} from './abstract-component';

export class FilmDetails extends AbstractComponent {
  constructor({
    id,
    poster,
    age,
    title,
    rating,
    director,
    writers,
    actors,
    year,
    runtime,
    genres,
    country,
    description,
    comments,
    watchlist,
    watched,
    favorite
  }) {
    super();
    this._id = id;
    this._poster = poster;
    this._age = age;
    this._title = title;
    this._rating = rating;
    this._director = director;
    this._writers = writers;
    this._actors = actors;
    this._year = year;
    this._runtime = runtime;
    this._genres = genres;
    this._country = country;
    this._description = description;
    this._comments = comments;
    this._watchlist = watchlist;
    this._watched = watched;
    this._favorite = favorite;
  }

  getTemplate() {
    return `<section class="film-details">
      <form class="film-details__inner" action="" method="get">
        <div class="form-details__top-container">
          <div class="film-details__close">
            <button class="film-details__close-btn" type="button">close</button>
          </div>
          <div class="film-details__info-wrap">
            <div class="film-details__poster">
              <img class="film-details__poster-img" src="./images/posters/${this._poster}" alt="${this._poster}">

              <p class="film-details__age">${this._age}</p>
            </div>

            <div class="film-details__info">
              <div class="film-details__info-head">
                <div class="film-details__title-wrap">
                  <h3 class="film-details__title">${this._title}</h3>
                  <p class="film-details__title-original">Original: ${this._title}</p>
                </div>

                <div class="film-details__rating">
                  <p class="film-details__total-rating">${this._rating}</p>
                  <p class="film-details__user-rating">Your rate 9</p>
                </div>
              </div>

              <table class="film-details__table">
                <tr class="film-details__row">
                  <td class="film-details__term">Director</td>
                  <td class="film-details__cell">${this._director}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Writers</td>
                  <td class="film-details__cell">${this._writers}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Actors</td>
                  <td class="film-details__cell">${this._actors}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Release Date</td>
                  <td class="film-details__cell">${this._year}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Runtime</td>
                  <td class="film-details__cell">${this._runtime}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Country</td>
                  <td class="film-details__cell">${this._country}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Genres</td>
                  <td class="film-details__cell">
                    <span class="film-details__genre">${this._genres}</span>
                  </td>
                </tr>
              </table>

              <p class="film-details__film-description">
                ${this._description}
              </p>
            </div>
          </div>

          <section class="film-details__controls">
            <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${this._watchlist === true ? `checked` : ``}>
            <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

            <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${this._watched === true ? `checked` : ``}>
            <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

            <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${this._favorite === true ? `checked` : ``}>
            <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
          </section>
        </div>`
        + `<div class="form-details__middle-container">
          <section class="film-details__user-rating-wrap">
            <div class="film-details__user-rating-controls">
              <button class="film-details__watched-reset" type="button">Undo</button>
            </div>

            <div class="film-details__user-score">
              <div class="film-details__user-rating-poster">
                <img src="./images/posters/the-great-flamarion.jpg" alt="film-poster" class="film-details__user-rating-img">
              </div>

              <section class="film-details__user-rating-inner">
                <h3 class="film-details__user-rating-title">The Great Flamarion</h3>

                <p class="film-details__user-rating-feelings">How you feel it?</p>

                <div class="film-details__user-rating-score">
                  <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="1" id="rating-1">
                  <label class="film-details__user-rating-label" for="rating-1">1</label>

                  <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="2" id="rating-2">
                  <label class="film-details__user-rating-label" for="rating-2">2</label>

                  <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="3" id="rating-3">
                  <label class="film-details__user-rating-label" for="rating-3">3</label>

                  <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="4" id="rating-4">
                  <label class="film-details__user-rating-label" for="rating-4">4</label>

                  <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="5" id="rating-5">
                  <label class="film-details__user-rating-label" for="rating-5">5</label>

                  <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="6" id="rating-6">
                  <label class="film-details__user-rating-label" for="rating-6">6</label>

                  <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="7" id="rating-7">
                  <label class="film-details__user-rating-label" for="rating-7">7</label>

                  <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="8" id="rating-8">
                  <label class="film-details__user-rating-label" for="rating-8">8</label>

                  <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="9" id="rating-9" checked>
                  <label class="film-details__user-rating-label" for="rating-9">9</label>

                </div>
              </section>
            </div>
          </section>
        </div>` +
        `<div class="form-details__bottom-container">
          ${getCommentsTemplate()}
        </div>
      </form>
    </section>`;
  }
}
