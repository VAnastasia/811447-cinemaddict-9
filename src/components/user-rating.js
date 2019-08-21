const FILMS_AMOUNT = 21;

const defineUserRating = (filmsAmount) => {
  if (filmsAmount > 0 && filmsAmount <= 10) {
    return `Novice`;
  } else if (filmsAmount > 10 && filmsAmount <= 20) {
    return `Fun`;
  } else if (filmsAmount > 20) {
    return `Movie Buff`;
  }
  return ``;
};

export const getUserRating = () => `
  <p class="profile__rating">${defineUserRating(FILMS_AMOUNT)}</p>
`;
