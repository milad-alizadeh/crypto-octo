import moment from 'moment';
import _ from 'lodash';

/**
 * Transform Api data
 * @param  {Array} data
 * @return {Array} mapped data
 */
export function transformData(data) {
  return _.map(data, (item) => {
    let averagePrice = (item.high + item.low) / 2;
    return {
      x: moment.unix(item.time).toISOString(),
      y: averagePrice
    };
  });
}
