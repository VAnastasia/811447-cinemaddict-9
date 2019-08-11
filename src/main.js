import {
  getSearchTemplate,
  getProfileTemplate,
  getMenuTemplate,
  getFiltersTemplate,
  getFilmListTemplate,
  getFilmDetailsTemplate
} from './components';

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
