import Service from '@ember/service';
import { service } from '@ember/service';
import ENV from 'poppays-ember-interview-practice/config/environment';
import citiesMock from 'poppays-ember-interview-practice/mock/cities';
import forecastMock from 'poppays-ember-interview-practice/mock/forecast';
import { tracked } from '@glimmer/tracking';

export default class WeatherApiService extends Service {
  @service store;
  @tracked loading = false;

  setLoading(loading) {
    this.loading = loading;
  }

  async fetchAutocomplete(query, mockData = false) {
    if (mockData) {
      return citiesMock;
    }
    const response = await fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${ENV.API_KEY}&q=${query}`
    );

    return await response.json();
  }

  async fetchLocation(locationKey, mockData = false) {
    if (mockData) {
      return forecastMock;
    }

    this.setLoading(true);
    const response = await fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${ENV.API_KEY}`
    );
    this.setLoading(false);
    return await response.json();
  }

  fetchLocationUrl(locationKey, mockData = false) {
    if (mockData) {
      return '/mock/forecast.json';
    }

    return `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${ENV.API_KEY}`;
  }
}
