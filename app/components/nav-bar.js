import Component from '@glimmer/component';

const APP_ROUTES = [
  {
    name: 'Ember Weather Forecast',
    route: 'ember-weather-forecast',
  },
  {
    name: 'About',
    route: 'about',
  },
];

export default class NavBarComponent extends Component {
  get appRoutes() {
    return APP_ROUTES;
  }
}
