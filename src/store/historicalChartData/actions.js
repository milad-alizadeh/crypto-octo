export const CHART_DATA_READ_REQUEST = 'CHART_DATA_READ_REQUEST';
export const CHART_DATA_READ_SUCCESS = 'CHART_DATA_READ_SUCCESS';
export const CHART_DATA_READ_FAILED = 'CHART_DATA_READ_FAILED';

export const chartDataReadRequest = (params) => {
  return {
    type: CHART_DATA_READ_REQUEST,
    payload: { params }
  };
};

export const chartDataReadSuccess = (data) => {
  return {
    type: CHART_DATA_READ_SUCCESS,
    payload: { data }
  };
};

export const chartDataReadFailed = (error) => {
  return {
    type: CHART_DATA_READ_FAILED,
    payload: { error }
  };
};
