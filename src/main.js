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

const body = document.querySelector(`body`);
const header = body.querySelector(`.header`);
const main = body.querySelector(`.main`);
const footerStatistics = document.querySelector(`.footer__statistics`);

renderSearch();
renderProfile();
renderMenu(groupedFilms);

const pageController = new PageController(main, films);
pageController.init();

footerStatistics.textContent = `${films.length} movies inside`;
