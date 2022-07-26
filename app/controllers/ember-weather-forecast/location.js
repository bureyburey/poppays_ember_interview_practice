import Controller from '@ember/controller';

export default class LocationController extends Controller {
  init() {
    super.init(...arguments);
  }

  get emberForecastCards() {
    return this.model.emberForecastCards;
  }
}
