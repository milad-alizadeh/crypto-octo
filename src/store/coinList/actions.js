export const COIN_LIST_READ_REQUEST = 'COIN_LIST_READ_REQUEST';
export const COIN_LIST_READ_SUCCESS = 'COIN_LIST_READ_SUCCESS';
export const COIN_LIST_READ_FAILED = 'COIN_LIST_READ_FAILED';

export const coinListReadRequest = params => (
  {
    type: COIN_LIST_READ_REQUEST,
    payload: { params }
  }
);

export const coinListReadSuccess = data => (
  {
    type: COIN_LIST_READ_REQUEST,
    payload: { data }
  }
);

export const coinListReadError = error => (
  {
    type: COIN_LIST_READ_REQUEST,
    payload: { error }
  }
);
