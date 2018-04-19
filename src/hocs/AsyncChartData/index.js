import React, { Component } from 'react';
import axios from 'axios';

function asyncChartData(chartComponent) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [],
        params: {}
      };
    }

    componentWillMount() {
      // Async Call
      let params = this.getApiParams();

      this.fetchChartData(params)
        .then((data) => {
          this.setState({ data });
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getApiParams(label) {
      switch (label) {
        case '1d':
          return {
            timeUnit: 'minute',
            limit: 288,
            aggregate: 5
          };
        case '3d':
          return {
            timeUnit: 'hour',
            limit: 72,
            aggregate: 1
          };
        case '1w':
          return {
            timeUnit: 'hour',
            limit: 168,
            aggregate: 1
          };
        case '1m':
          return {
            timeUnit: 'hour',
            limit: 144,
            aggregate: 5
          };
        case '3m':
          return {
            timeUnit: 'day',
            limit: 90,
            aggregate: 1
          };
        case '6m':
          return {
            timeUnit: 'day',
            limit: 180,
            aggregate: 1
          };
        case '1y':
          return {
            timeUnit: 'day',
            limit: 365,
            aggregate: 2
          };
        default:
          return {
            timeUnit: 'hour',
            limit: 168,
            aggregate: 1
          };
      }
    }

    fetchChartData(params) {
      let baseUrl = 'https://min-api.cryptocompare.com/data/histo';
      let url = `${baseUrl}${params.timeUnit}?fsym=BTC&tsym=USD&limit=${params.limit}&aggregate=${params.aggregate}`;
      return axios.get(url);
    }

    render() {
      let { data } = this.state;
      return (
        <chartComponent
          {...this.props}
          data={data}
        />
      );
    }
  };
}

export default asyncChartData;
