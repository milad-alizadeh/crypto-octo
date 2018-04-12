import { takeLatest, fork, put, call } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from './actions';
import _ from 'lodash';

function fetchCoinList() {
  let url = 'https://min-api.cryptocompare.com/data/all/coinlist';
  return axios.get(url);
}

function* readCoinListData() {
  try {
    let response = yield call(fetchCoinList);

    let output = _.map(response.data.Data, value => ({
      label: value.FullName,
      value: value.Name,
      ...value
    }));

    output = _.sortBy(output, 'FullName');

    yield put(actions.coinListReadSuccess(output));

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
