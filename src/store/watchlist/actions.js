export const WATCHLIST_ADD_REQUEST = 'WATCHLIST_ADD_REQUEST';
export const WATCHLIST_ADD_SUCCESS = 'WATCHLIST_ADD_SUCCESS';
export const WATCHLIST_ADD_FAILED = 'WATCHLIST_ADD_FAILED';

export const watchlistAddRequest = params => (
  {
    type: WATCHLIST_ADD_REQUEST,
    payload: { params }
  }
);

export const watchlistAddSuccess = data => (
  {
    type: WATCHLIST_ADD_SUCCESS,
    payload: { data }
  }
);

export const watchlistAddFailed = error => (
  {
    type: WATCHLIST_ADD_FAILED,
    payload: { error }
  }
);
