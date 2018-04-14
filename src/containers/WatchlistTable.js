import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TableWatchlist } from 'components';

const WatchlistTableContainer = ({ data }) => {
  return (
    <TableWatchlist data={data} />
  );
};

WatchlistTableContainer.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  data: PropTypes.object
};

const mapStateToProps = (state) => {
  let { loading, error, data } = state.watchlist;

  return {
    loading,
    error,
    data
  };
};

export default connect(mapStateToProps)(WatchlistTableContainer);
