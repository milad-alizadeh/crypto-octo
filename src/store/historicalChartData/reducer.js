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
        limit: 1440,
        every: 5
      }
    },
    {
      label: '3d',
      timeUnit: 'hour',
      displayFormat: 'dddd - hh:mm',
      apiParams: {
        timeUnit: 'minute',
        limit: 4320,
        every: 10
      }
    },
    {
      label: 'Week',
      timeUnit: 'hour',
      displayFormat: 'MM DD - hh:mm',
      apiParams: {
        timeUnit: 'minute',
        limit: 10080,
        every: 15
      }
    }
  ]
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHART_DATA_READ_REQUEST:
      return { ...state, loading: true, data: null, error: null };

    case CHART_DATA_READ_SUCCESS:
      return { ...state, loading: false, data: payload.data, error: null };

    case CHART_DATA_READ_FAILED:
      return { ...state, loading: false, data: null, error: payload.error };

    default:
      return state;
  }
};
