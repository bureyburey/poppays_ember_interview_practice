import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { service } from '@ember/service';

export default class LocationAdapter extends JSONAPIAdapter {
  @service weatherApi;
  // host = '//dataservice.accuweather.com';
  // namespace = 'forecasts/v1/daily/5day/';
  // `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${selection.id}?apiKey=${ENV.API_KEY}`

  // async queryRecord(store, type, query) {
  //   const res = await this.weatherApi.fetchLocation(query.locationKey, true);
  //
  //   return res;
  // }

  async query(store, type, query, recordArray, adapterOptions) {
    return await this.weatherApi.fetchLocation(query.locationKey);
  }

  urlForFindRecord(locationKey) {
    return this.weatherApi.fetchLocationUrl(locationKey);
  }
}
