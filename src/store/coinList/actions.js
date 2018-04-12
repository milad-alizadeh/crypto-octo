export const COIN_LIST_READ_REQUEST = 'COIN_LIST_READ_REQUEST';
export const COIN_LIST_READ_SUCCESS = 'COIN_LIST_READ_SUCCESS';
export const COIN_LIST_READ_FAILED = 'COIN_LIST_READ_FAILED';

export const coinListReadRequest = () => {
  console.log('action called');
  return   {
      type: COIN_LIST_READ_REQUEST,
      payload: {}
    }
}

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
