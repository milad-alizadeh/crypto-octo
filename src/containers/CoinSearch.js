import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { chartDataReadRequest, setSelectedPrice } from 'store/actions';
import { SearchInput } from 'components';

const SearchInputContainer = (props) => {
  let { loading, error, coinList } = props;
  return (
    <SearchInput {
      ...{
        loading,
        error,
        coinList,
        setSelectedPrice: (time, price) => props.setSelectedPrice(time, price),
        getControlData: params => props.fetchChartData(params)
      }
    }
    />
  );
};

SearchInputContainer.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  coinList: PropTypes.array,
  fetchCoinList: PropTypes.func
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchInputContainer);
