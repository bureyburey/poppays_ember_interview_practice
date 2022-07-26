import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class LocationController extends Controller {
  @tracked temperatureUnit = 'F';

  init() {
    super.init(...arguments);
  }

  get emberForecastCards() {
    return this.model.emberForecastCards;
  }

  setCelsiusChecked(celsiusChecked) {
    if (celsiusChecked) {
      this.temperatureUnit = 'C';
    } else {
      this.temperatureUnit = 'F';
    }
  }
}
