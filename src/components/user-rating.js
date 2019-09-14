import {films} from '../data';

const Rating = {
  NOVICE: `Novice`,
  FUN: `Fun`,
  MOVIE_BUFF: `Movie Buff`
};

const defineUserRating = (filmsAmount) => {
  let rating = ``;
  if (filmsAmount > 0 && filmsAmount <= 10) {
    rating = Rating.NOVICE;
  }

  if (filmsAmount > 10 && filmsAmount <= 20) {
    rating = Rating.FUN;
  }

  if (filmsAmount > 20) {
    rating = Rating.MOVIE_BUFF;
  }
  return rating;
};

export const getUserRating = () => `
  <p class="profile__rating">${defineUserRating(films.length)}</p>
`;
