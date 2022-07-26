import Model, { attr, belongsTo } from '@ember-data/model';

export default class EmberForecastCardModel extends Model {
  @attr('string') date;
  @attr('string') tempUnitTyp;
  @attr('number') minTemp;
  @attr('number') maxTemp;
  @attr('string') dayIconCode;
  @attr('string') dayIconPhrase;
  @attr('string') nightIconCode;
  @attr('string') nightIconPhrase;

  @belongsTo('location', { async: false }) location;
}
