import { takeLatest, fork, put, call } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from './actions';

function fetchCoinList() {
  let url = 'https://www.cryptocompare.com/api/data/coinlist/';
  return axios.get(url);
}

function* readCoinListData() {
  try {
    let response = yield call(fetchCoinList);
    console.log(response.data);

  } catch(e) {
    console.log(e);
  }
}

function* watchCoinListRequest() {
  yield takeLatest(actions.COIN_LIST_READ_REQUEST, readCoinListData);
}

export default function* () {
  yield fork(watchCoinListRequest);
}
