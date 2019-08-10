import {getSearchTemplate} from './components/search.js';
import {getProfileTemplate} from './components/profile.js';
import {getMenuTemplate} from './components/menu.js';
import {getFiltersTemplate} from './components/filters.js';
import {getFilmListTemplate} from './components/film-list.js';
import {getFilmDetailsTemplate} from './components/film-details.js';

const renderComponent = (container, markup) => {
  container.insertAdjacentHTML(`beforeEnd`, markup);
};

const body = document.querySelector(`body`);
const header = body.querySelector(`.header`);
const main = body.querySelector(`.main`);
renderComponent(header, getSearchTemplate());
renderComponent(header, getProfileTemplate());
renderComponent(main, getMenuTemplate());
renderComponent(main, getFiltersTemplate());
renderComponent(main, getFilmListTemplate());
renderComponent(body, getFilmDetailsTemplate());
