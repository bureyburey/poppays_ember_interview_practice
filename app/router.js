import EmberRouter from '@ember/routing/router';
import config from 'poppays-ember-interview-practice/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', { path: '/' });
  this.route('ember-weather-forecast', function () {
    this.route('location', { path: '/location/:locationKey' });
  });
  this.route('about');
  this.route('ember-forecast-card');
  this.route('react-playground');
});
