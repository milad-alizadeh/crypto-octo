import {
  CHART_DATA_READ_REQUEST,
  CHART_DATA_READ_SUCCESS,
  CHART_DATA_READ_FAILED
} from './actions';

const initialState = {
  loading: false,
  error: null,
  data: null,
  controls: [
    {
      label: '24h',
      timeUnit: 'minute',
      displayFormat: 'h:mm a',
      apiParams: {
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
        timeUnit: 'day',
        limit: 365,
        aggregate: 2
      }
    }
  ]
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHART_DATA_READ_REQUEST:
      return { ...state, loading: true, chartData: null, error: null };

    case CHART_DATA_READ_SUCCESS:
      return { ...state, loading: false, chartData: payload.data, error: null };

    case CHART_DATA_READ_FAILED:
      return { ...state, loading: false, chartData: null, error: payload.error };

    default:
      return state;
  }
};
