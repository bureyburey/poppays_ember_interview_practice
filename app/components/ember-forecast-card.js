import Component from '@glimmer/component';
import { computed } from '@ember/object';
import moment from 'moment';

export default class EmberForecastCardComponent extends Component {
  @computed('args.forecastCard.date')
  get dateString() {
    return moment(this.args.forecastCard.date).format('DD/MM');
  }

  @computed('args.forecastCard.{date,dayIconCode}')
  get icon() {
    return this.args.forecastCard.dayIconCode;
  }
}
