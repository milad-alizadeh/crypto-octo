import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { chartDataReadRequest, setSelectedPrice } from 'store/actions';
import { HistoricalChart } from 'components';

const HistoricalChartContainer = (props) => {
  let { loading, error, chartData, controls } = props;
  return (
    <HistoricalChart {
      ...{
        loading,
        error,
        chartData,
        controls,
        setSelectedPrice: (time, price) => props.setSelectedPrice(time, price),
        getControlData: params => props.fetchChartData(params)
      }
    }
    />
  );
};

HistoricalChartContainer.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  chartData: PropTypes.array,
  controls: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    timeUnit: PropTypes.string.isRequired,
    displayFormat: PropTypes.string.isRequired
  })),
  fetchChartData: PropTypes.func,
  setSelectedPrice: PropTypes.func
};

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
    fetchChartData: params => dispatch(chartDataReadRequest(params)),
    setSelectedPrice: (time, price) => dispatch(setSelectedPrice(time, price))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoricalChartContainer);
