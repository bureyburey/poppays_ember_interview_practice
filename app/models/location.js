import Model, { attr, hasMany } from '@ember-data/model';

export default class LocationModel extends Model {
  @attr('string') locationKey;
  @attr emberForecastCards;
  // @hasMany('ember-forecast-card', { async: false }) emberForecastCards;
  // @hasMany('ember-forecast-card') emberForecastCards;
}
