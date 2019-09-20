import {
  films,
  groupedFilms
} from './data.js';

import {Search} from './components/search';
import {Profile} from './components/profile';
import {Menu} from './components/menu';

import {NoFilm} from './components/no-film';
import {Position, render, unrender} from './utils';

import {PageController} from './controllers/page-controller';
// import {MovieController} from './controllers/movie-controller'

// const renderFilmsContainer = () => {
//   const filmList = new FilmList();
//   render(main, filmList.getElement(), Position.BEFOREEND);
// };

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

// const renderFilters = () => {
//   const filters = new Sort();
//   render(main, filters.getElement(), Position.BEFOREEND);
// };

// const renderNoFilm = () => {
//   const message = new NoFilm();
//   render(main, message.getElement(), Position.BEFOREEND);
// };

const body = document.querySelector(`body`);
const header = body.querySelector(`.header`);
const main = body.querySelector(`.main`);
const footerStatistics = document.querySelector(`.footer__statistics`);

renderSearch();
renderProfile();
renderMenu(groupedFilms);
// renderFilters();


const pageController = new PageController(main, films);
pageController.init();

footerStatistics.textContent = `${films.length} movies inside`;
