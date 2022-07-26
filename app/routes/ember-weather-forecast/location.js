import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class EmberWeatherForecastLocationRoute extends Route {
  @service store;
  @service router;
  @service weatherApi;

  async model(params) {
    // return await this.store.query('location', params);

    this.weatherApi.setLoading(true);
    const result = await this.store.findRecord('location', params.locationKey);
    this.weatherApi.setLoading(false);
    return result;
  }
}
