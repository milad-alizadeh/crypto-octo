import {
  COIN_LIST_READ_REQUEST,
  COIN_LIST_READ_SUCCESS,
  COIN_LIST_READ_FAILED
} from './actions';

const initialState = {
  loading: false,
  error: null,
  data: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case COIN_LIST_READ_REQUEST:
      return { ...state, loading: true, error: null };

    case COIN_LIST_READ_SUCCESS:
      return { ...state, loading: false, data: payload.data };

    case COIN_LIST_READ_FAILED:
      return { ...state, loading: false, error: payload.error };

    default:
      return state;
  }
};
