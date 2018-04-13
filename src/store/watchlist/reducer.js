import {
  WATCHLIST_ADD_SUCCESS,
  WATCHLIST_ADD_REQUEST,
  WATCHLIST_ADD_FAILED
} from './actions';

const initialState = {
  loading: false,
  error: null,
  data: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case WATCHLIST_ADD_REQUEST:
      return { ...state, loading: true, error: null };

    case WATCHLIST_ADD_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          [payload.data.symbol]: payload.data
        },
        error: null,
        loading: false
      };

    case WATCHLIST_ADD_FAILED:
      return { ...state, error: payload.error };

    default:
      return state;
  }
};
