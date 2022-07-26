import { helper } from '@ember/component/helper';
import moment from 'moment';

export default helper(function formatDate([date] /*, named*/) {
  return moment(date).format('DD/MM');
});
