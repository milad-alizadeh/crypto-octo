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
      timeUnit: 'hour',
      displayFormat: 'ha',
      limit: '24'
    },
    {
      label: '3d',
      timeUnit: 'day',
      displayFormat: 'dddd - hh:mm',
      limit: '72'
    },
    {
      label: 'Week',
      timeUnit: 'day',
      displayFormat: 'dddd',
      limit: '168'
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
