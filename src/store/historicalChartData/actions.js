export const CHART_DATA_READ_REQUEST = 'CHART_DATA_READ_REQUEST';
export const CHART_DATA_READ_SUCCESS = 'CHART_DATA_READ_SUCCESS';
export const CHART_DATA_READ_FAILED = 'CHART_DATA_READ_FAILED';
export const SET_SELECTED_PRICE = 'SET_SELECTED_PRICE';

export const chartDataReadRequest = params => (
  {
    type: CHART_DATA_READ_REQUEST,
    payload: { params }
  }
);

export const chartDataReadSuccess = (params, data) => (
  {
    type: CHART_DATA_READ_SUCCESS,
    payload: { params, data }
  }
);

export const chartDataReadFailed = (params, error) => (
  {
    type: CHART_DATA_READ_FAILED,
    payload: { params, error }
  }
);

export const setSelectedPrice = (params, selectedTime, selectedPrice) => (
  {
    type: SET_SELECTED_PRICE,
    payload: {
      params,
      selectedTime,
      selectedPrice
    }
  }
);
