import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { coinListReadRequest, watchlistAddRequest } from 'store/actions';
import { SearchWithSuggestion } from 'components';

const CoinSearchContainer = (props) => {
  let { loading, error, coinList, fetchCoinList, addToWatchlist } = props;
  return (
    <SearchWithSuggestion {
      ...{
        placeholder: 'Search for Coin',
        loading,
        error,
        list: coinList,
        fetchList: () => fetchCoinList(),
        onItemSelect: params => addToWatchlist(params)
      }
    }
    />
  );
};

CoinSearchContainer.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  coinList: PropTypes.array,
  fetchCoinList: PropTypes.func,
  addToWatchlist: PropTypes.func
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
    fetchCoinList: () => dispatch(coinListReadRequest()),
    addToWatchlist: params => dispatch(watchlistAddRequest(params))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinSearchContainer);
