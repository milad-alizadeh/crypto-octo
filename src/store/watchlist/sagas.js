import { takeLatest, fork, call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from './actions';
import transformData from './transform-data';

function fetchSymbolData(params) {
  let baseUrl = 'https://min-api.cryptocompare.com/data/pricemultifull';
  let url = `${baseUrl}?fsyms=${params.Name}&tsyms=USD`;
  return axios.get(url);
}

function* readSymbolData({ payload: { params } }) {
  try {
    let response = yield call(fetchSymbolData, params);
    let transformedData = transformData(response.data, params, 'USD');

    yield put(actions.watchlistAddSuccess(transformedData));
  } catch (error) {
    console.log(error);
  }
}

function* watchWatchlistAddRequest() {
  yield takeLatest(actions.WATCHLIST_ADD_REQUEST, readSymbolData);
}

export default function* () {
  yield fork(watchWatchlistAddRequest);
}
