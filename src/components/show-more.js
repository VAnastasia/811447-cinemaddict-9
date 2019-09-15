import {AbstractComponent} from './abstract-component';

export class ShowMore extends AbstractComponent {
  getTemplate() {
    return `<button class="films-list__show-more">Show more</button>`;
  }
}
