import {
  CHART_DATA_READ_REQUEST,
  CHART_DATA_READ_SUCCESS,
  CHART_DATA_READ_FAILED,
  SET_SELECTED_PRICE
} from './actions';

const initialState = {
  basic: {},
  controls: [
    {
      label: '1d',
      timeUnit: 'minute',
      displayFormat: 'h:mm a',
      apiParams: {
        label: 'oneDay',
        timeUnit: 'minute',
        limit: 288,
        aggregate: 5
      }
    },
    {
      label: '3d',
      timeUnit: 'day',
      displayFormat: 'dddd',
      apiParams: {
        label: 'threeDays',
        timeUnit: 'hour',
        limit: 72,
        aggregate: 1
      }
    },
    {
      label: '1w',
      timeUnit: 'day',
      displayFormat: 'MMM D',
      apiParams: {
        label: 'oneWeek',
        timeUnit: 'hour',
        limit: 168,
        aggregate: 1
      }
    },
    {
      label: '1m',
      timeUnit: 'day',
      displayFormat: 'MMM D',
      apiParams: {
        label: 'oneMonth',
        timeUnit: 'hour',
        limit: 144,
        aggregate: 5
      }
    },
    {
      label: '3m',
      timeUnit: 'day',
      displayFormat: 'MMM D',
      apiParams: {
        label: 'threeMonths',
        timeUnit: 'day',
        limit: 90,
        aggregate: 1
      }
    },
    {
      label: '6m',
      timeUnit: 'month',
      displayFormat: 'MMM',
      apiParams: {
        label: '3m',
        timeUnit: 'day',
        limit: 180,
        aggregate: 1
      }
    },
    {
      label: '1y',
      timeUnit: 'month',
      displayFormat: 'MMM YYYY',
      apiParams: {
        label: '1y',
        timeUnit: 'day',
        limit: 365,
        aggregate: 2
      }
    }
  ],
  full: {
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHART_DATA_READ_REQUEST:
      return {
        ...state,
        full: {
          [payload.params.coinSymbol]: {
            [payload.params.label]: {
              loading: true,
              error: null,
              chartData: null
            }
          }
        }
      };

    case CHART_DATA_READ_SUCCESS:
      return {
        ...state,
        full: {
          [payload.params.coinSymbol]: {
            [payload.params.label]: {
              loading: false,
              error: null,
              chartData: payload.data
            }
          }
        }
      };

    case CHART_DATA_READ_FAILED:
      return {
        ...state,
        full: {
          [payload.params.coinSymbol]: {
            [payload.params.label]: {
              loading: false,
              error: payload.error,
              chartData: null
            }
          }
        }
      };

    case SET_SELECTED_PRICE: {
      let newState = { ...state };
      newState.full[payload.params.coinSymbol][payload.params.label].selectedTime = payload.selectedTime;
      newState.full[payload.params.coinSymbol][payload.params.label].selectedPrice = payload.selectedPrice;
      return newState;
    }
    default:
      return state;
  }
};
