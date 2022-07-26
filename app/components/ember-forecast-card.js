import Component from '@glimmer/component';
import { computed } from '@ember/object';

export default class EmberForecastCardComponent extends Component {
  @computed('args.forecastCard.{date,dayIconCode}')
  get dayIcon() {
    return this.args.forecastCard.dayIconCode;
  }

  @computed('args.forecastCard.{date,nightIconCode}')
  get nightIcon() {
    return this.args.forecastCard.nightIconCode;
  }
}
