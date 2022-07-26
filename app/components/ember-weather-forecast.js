import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class EmberWeatherForecastComponent extends Component {
  @service weatherApi;

  get loading() {
    return this.weatherApi.loading;
  }
}
