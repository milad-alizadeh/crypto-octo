import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { chartDataReadRequest } from 'store/actions';
import { HistoricalChart } from 'components';

class HistoricalChartContainer extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.object,
    chartData: PropTypes.array,
    controls: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      timeUnit: PropTypes.string.isRequired,
      displayFormat: PropTypes.string.isRequired
    })),
    fetchChartData: PropTypes.func
  }

  componentWillMount() {
    this.props.fetchChartData(this.props.controls[0]);
  }

  render() {
    const { loading, error, chartData, controls } = this.props;
    return (
      <HistoricalChart {
        ...{
          loading,
          error,
          chartData,
          controls,
          onControlClick: params => this.props.fetchChartData(params)
        }
      }
      />
    );
  }
}

const mapStateToProps = (state) => {
  let { loading, error, chartData, controls } = state.historicalChartData;
  return {
    loading,
    error,
    chartData,
    controls
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChartData: params => dispatch(chartDataReadRequest(params))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoricalChartContainer);
