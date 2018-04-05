import React from 'react';
import PropTypes from 'prop-types';
import { ChartInfo } from 'components';
import { connect } from 'react-redux';

const ChartInfoContainer = (props) => {
  let { selectedTime, selectedPrice } = props;
  return (
    <ChartInfo {
      ...{
        selectedTime,
        selectedPrice
      }
    }
    />
  );
};

ChartInfoContainer.propTypes = {
  selectedTime: PropTypes.string,
  selectedPrice: PropTypes.number
};

const mapStateToProps = (state) => {
  let { selectedTime, selectedPrice } = state.historicalChartData;
  return {
    selectedTime,
    selectedPrice
  };
};

export default connect(mapStateToProps)(ChartInfoContainer);
