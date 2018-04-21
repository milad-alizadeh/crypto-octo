import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { chartDataReadRequest, setSelectedPrice } from 'store/actions';
import { HistoricalChart } from 'components';

const HistoricalChartContainer = (props) => {
  let { loading, error, chartData, controls, coinSymbol } = props;

  return (
    <HistoricalChart {
      ...{
        loading,
        error,
        chartData,
        controls,
        setSelectedPrice: (time, price) => props.setSelectedPrice(time, price),
        fetchChartData: params => props.fetchChartData({ ...params, coinSymbol })
      }
    }
    />
  );
};

HistoricalChartContainer.propTypes = {
  coinSymbol: PropTypes.string.isRequired,
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

const mapStateToProps = (state, ownProps) => {
  let { controls, full } = state.historicalChartData;

  if (!full[ownProps.coinSymbol]) {
    return {
      loading: false,
      error: null,
      chartData: null,
      controls
    };
  }

  let { loading, error, chartData } = full[ownProps.coinSymbol][ownProps.fetchChartData.arguments.label];

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
