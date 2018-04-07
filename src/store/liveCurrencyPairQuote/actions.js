export const LIVE_CURRENCY_PAIR_READ_REQUEST = 'LIVE_CURRENCY_PAIR_READ_REQUEST';
export const LIVE_CURRENCY_PAIR_READ_SUCCESS = 'LIVE_CURRENCY_PAIR_READ_SUCCESS';
export const LIVE_CURRENCY_PAIR_READ_FAIL = 'LIVE_CURRENCY_PAIR_READ_FAIL';

export const liveCurrencyPairReadRequest = params => (
  {
    type: LIVE_CURRENCY_PAIR_READ_REQUEST,
    payload: { params }
  }
);

export const liveCurrencyPairReadSuccess = data => (
  {
    type: LIVE_CURRENCY_PAIR_READ_SUCCESS,
    payload: { data }
  }
);

export const liveCurrencyPairReadFailed = error => (
  {
    type: LIVE_CURRENCY_PAIR_READ_FAIL,
    payload: { error }
  }
);
