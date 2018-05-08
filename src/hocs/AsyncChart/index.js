import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';
import _ from 'lodash';

export default function (ChartComponent) {
  return class extends Component {
    static propTypes = {
      coinName: PropTypes.string.isRequired,
      toCurrency: PropTypes.string.isRequired,
      timeRange: PropTypes.string,
      controls: PropTypes.array
    }

    static defaultProps = {
      timeRange: '1w'
    }

    constructor(props) {
      super(props);

      let { controls, timeRange } = props;

      this.state = {
        chartData: null,
        timeFormat: null,
        apiParams: null,
        loading: false,
        error: null,
        activeControl: controls && controls.length ? controls[0] : timeRange
      };
    }

    componentWillMount() {
      let { coinName, toCurrency } = this.props;
      let { activeControl } = this.state;

      this.getData(coinName, toCurrency, activeControl);
    }

    componentWillReceiveProps(nextProps) {
      // if (nextProps.timeRange !== this.props.timeRange) {
      //   this.setState({
      //     timeRange: nextProps.timeRange
      //   }, () => {
      //     this.getData(nextProps);
      //   });
      // } else {
      //   this.getData(nextProps);
      // }
    }

    setNewTimeRange = (timeRange) => {
      let { coinName, toCurrency } = this.props;

      this.setState({ activeControl: timeRange }, () => {
        this.getData(coinName, toCurrency, timeRange);
      });
    }

    getData(coinName, toCurrency, currentTimeRange) {
      let { params } = this.getTimeRangeData(currentTimeRange);
      params.fsym = coinName;
      params.tsym = toCurrency;

      this.setState({ loading: true });

      this.fetchChartData(params)
        .then((response) => {
          this.setState({
            chartData: this.transformData(response.data.Data),
            timeFormat: this.getTimeRangeData(currentTimeRange).timeFormat,
            loading: false
          });
        })
        .catch((error) => {
          this.setState({
            error,
            loading: false
          });
        });
    }

    getTimeRangeData(timeRange) {
      switch (timeRange) {
        case '1d':
          return {
            timeFormat: {
              timeUnit: 'minute',
              displayFormat: 'h:mm a'
            },
            params: {
              timeUnit: 'minute',
              limit: 288,
              aggregate: 5
            }
          };
        case '3d':
          return {
            timeFormat: {
              timeUnit: 'day',
              displayFormat: 'dddd'
            },
            params: {
              timeUnit: 'hour',
              limit: 72,
              aggregate: 1
            }
          };
        case '1w':
          return {
            timeFormat: {
              timeUnit: 'day',
              displayFormat: 'MMM D'
            },
            params: {
              timeUnit: 'hour',
              limit: 168,
              aggregate: 1
            }
          };
        case '1m':
          return {
            timeFormat: {
              timeUnit: 'day',
              displayFormat: 'MMM D'
            },
            params: {
              timeUnit: 'hour',
              limit: 144,
              aggregate: 5
            }
          };
        case '3m':
          return {
            timeFormat: {
              timeUnit: 'day',
              displayFormat: 'MMM D'
            },
            params: {
              timeUnit: 'day',
              limit: 90,
              aggregate: 1
            }
          };
        case '6m':
          return {
            timeFormat: {
              timeUnit: 'month',
              displayFormat: 'MMM'
            },
            params: {
              timeUnit: 'day',
              limit: 180,
              aggregate: 1
            }
          };
        case '1y':
          return {
            timeFormat: {
              timeUnit: 'month',
              displayFormat: 'MMM YYYY'
            },
            params: {
              timeUnit: 'day',
              limit: 365,
              aggregate: 2
            }
          };
        default:
          return {
            timeUnit: 'hour',
            limit: 168,
            aggregate: 1
          };
      }
    }

    transformData(data) {
      return _.map(data, (item) => {
        let averagePrice = (item.high + item.low) / 2;
        return {
          x: moment.unix(item.time).toISOString(),
          y: averagePrice
        };
      });
    }

    fetchChartData({ timeUnit, fsym, tsym, limit, aggregate }) {
      let baseUrl = 'https://min-api.cryptocompare.com/data/histo';
      let url = `${baseUrl}${timeUnit}`;

      return axios.get(url, {
        params: { fsym, tsym, limit, aggregate }
      });
    }

    render() {
      let { loading, chartData, timeFormat, activeControl, error } = this.state;

      return (
        <ChartComponent
          {...this.props}
          chartData={chartData}
          timeFormat={timeFormat}
          onControlClick={this.setNewTimeRange}
          loading={loading}
          error={error}
          activeControl={activeControl}
        />
      );
    }
  };
}
