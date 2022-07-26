import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class LocationSerializer extends JSONAPISerializer {
  attrs = {
    emberForecastCards: {
      embedded: 'always',
    },
  };

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const emberForecastCards = payload.DailyForecasts.map((dailyForecast) => ({
      date: dailyForecast.Date,
      tempUnitType: 'F',
      minTemp: dailyForecast.Temperature.Minimum.Value,
      maxTemp: dailyForecast.Temperature.Maximum.Value,
      dayIconCode: String(dailyForecast.Day.Icon),
      dayIconPhrase: dailyForecast.Day.IconPhrase,
      nightIconCode: String(dailyForecast.Night.Icon),
      nightIconPhrase: dailyForecast.Night.IconPhrase,
    }));

    return {
      data: {
        id,
        type: 'location',
        attributes: {
          locationKey: id,
          emberForecastCards,
        },
      },
    };
  }
}
