import Service from '@ember/service';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ENV from 'poppays-ember-interview-practice/config/environment';
import citiesMock from 'poppays-ember-interview-practice/mock/cities';
import forecastMock from 'poppays-ember-interview-practice/mock/forecast';

const USE_MOCK = true;
const API_HOST = 'http://dataservice.accuweather.com';

export default class WeatherApiService extends Service {
  @service store;
  @tracked loading = false;

  setLoading(loading) {
    this.loading = loading;
  }

  async fetchAutocomplete(query) {
    if (USE_MOCK) {
      return citiesMock;
    }
    const response = await fetch(
      `${API_HOST}/locations/v1/cities/autocomplete?apikey=${ENV.API_KEY}&q=${query}`
    );

    return await response.json();
  }

  async fetchLocation(locationKey) {
    if (USE_MOCK) {
      return forecastMock;
    }

    this.setLoading(true);
    const response = await fetch(
      `${API_HOST}/forecasts/v1/daily/5day/${locationKey}?apikey=${ENV.API_KEY}`
    );
    this.setLoading(false);
    return await response.json();
  }

  fetchLocationUrl(locationKey) {
    if (USE_MOCK) {
      return '/mock/forecast.json';
    }

    return `${API_HOST}/forecasts/v1/daily/5day/${locationKey}?apikey=${ENV.API_KEY}`;
  }
}
