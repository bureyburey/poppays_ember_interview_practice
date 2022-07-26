import { helper } from '@ember/component/helper';

export default helper(function formatTemperature(
  [temperature, unit] /*, named*/
) {
  switch (unit) {
    case 'C':
      return Math.round((5 / 9) * (temperature - 32));

    default:
      return temperature;
  }
});
