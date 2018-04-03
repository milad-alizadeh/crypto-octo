import { takeLatest, fork, call, put } from 'redux-saga/effects';
import axios from 'axios';
import moment from 'moment';

import * as actions from './actions';

function fetchChartData(params) {
  let baseUrl = 'https://min-api.cryptocompare.com/data/histo';
  let url = `${baseUrl}${params.timeUnit}?fsym=BTC&tsym=USD&limit=${params.limit}`;
  return axios.get(url);
}

function transformData(data) {
  return data.map((item) => {
    let averagePrice = (item.high + item.low) / 2;
    return {
      x: moment.unix(item.time),
      y: averagePrice
    };
  });
}

function* readChartData({ payload }) {
  try {
    let response = yield call(fetchChartData, payload.params);
    let data = transformData(response.data.Data);

    yield put(actions.chartDataReadSuccess(data));
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
