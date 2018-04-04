import { takeLatest, fork, call, put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from './actions';
import { transformData } from './processData';

function fetchChartData(params) {
  let baseUrl = 'https://min-api.cryptocompare.com/data/histo';
  let url = `${baseUrl}${params.timeUnit}?fsym=BTC&tsym=USD&limit=${params.limit}&aggregate=${params.aggregate}`;
  return axios.get(url);
}

function* readChartData({ payload: { params } }) {
  try {
    let response = yield call(fetchChartData, params.apiParams);

    if (response.data.Response === 'Success') {
      let data = transformData(response.data.Data, params.apiParams);
      yield put(actions.chartDataReadSuccess(data));
    } else {
      yield put(actions.chartDataReadFailed(Error(response.data.Message)));
    }
  } catch (error) {
    yield put(actions.chartDataReadFailed(error));
  }
}

function* watchChartDataReadRequest() {
  yield takeLatest(actions.CHART_DATA_READ_REQUEST, readChartData);
}

export default function* () {
  yield fork(watchChartDataReadRequest);
}
