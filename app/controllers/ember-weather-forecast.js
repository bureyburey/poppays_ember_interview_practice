import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

import { pause } from '../utils';

export default class EmberWeatherForecastController extends Controller {
  @service weatherApi;
  @tracked options = [];
  @tracked selection = null;
  @tracked forecast = null;

  @action
  async search(query) {
    const results = await this.weatherApi.fetchAutocomplete(query);
    this.options = results.map((city) => ({
      ...city,
      id: city.Key,
      name: city.LocalizedName,
    }));
  }

  @action
  setSelected(selection) {
    this.selection = selection;
    this.getForecast(this.selection);
  }

  @action
  getForecast(selection) {
    this.target.transitionTo(
      `/ember-weather-forecast/location/${selection.id}`
    );
  }
}
