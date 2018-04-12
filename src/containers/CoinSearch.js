import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { coinListReadRequest } from 'store/actions';
import { SearchWithSuggestion } from 'components';

const CoinSearchContainer = (props) => {
  let { loading, error, coinList, fetchCoinList } = props;
  return (
    <SearchWithSuggestion {
      ...{
        placeholder: 'Search for Coin',
        loading,
        error,
        list: coinList,
        fetchList: () => fetchCoinList(),
        onItemSelect: item => console.log(item)
      }
    }
    />
  );
};

CoinSearchContainer.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  coinList: PropTypes.array,
  fetchCoinList: PropTypes.func
};

const mapStateToProps = (state) => {
  let { loading, error, coinList } = state.coinList;
  return {
    loading,
    error,
    coinList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCoinList: () => dispatch(coinListReadRequest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinSearchContainer);
