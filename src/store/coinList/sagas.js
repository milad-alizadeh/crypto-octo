import { takeLatest, fork, put, call } from 'redux-saga/effects';
import axios from 'axios';
import _ from 'lodash';
import * as actions from './actions';

function fetchCoinList() {
  let url = 'https://min-api.cryptocompare.com/data/all/coinlist';
  return axios.get(url);
}

function* readCoinListData() {
  try {
    let response = yield call(fetchCoinList);
    let { Data } = response.data;

    let output = _.map(Data, value => ({
      label: value.FullName,
      value: value.Name,
      ...value
    }));

    output = _.sortBy(output, 'FullName');

    yield put(actions.coinListReadSuccess(output));
  } catch (e) {
    console.log(e);
  }
}

function* watchCoinListRequest() {
  yield takeLatest(actions.COIN_LIST_READ_REQUEST, readCoinListData);
}

export default function* () {
  yield fork(watchCoinListRequest);
}
