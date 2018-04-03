import moment from 'moment';
import _ from 'lodash';

/**
 * Transform Api data
 * @param  {Array} data
 * @return {Array} mapped data
 */
export function transformData(data, params) {
  let smallerArray = _.filter(data, (item, index) => {
    return index % params.every === 0;
  });

  return _.map(smallerArray, (item) => {
    let averagePrice = (item.high + item.low) / 2;

    return {
      x: moment.unix(item.time),
      y: averagePrice
    };
  });
}
