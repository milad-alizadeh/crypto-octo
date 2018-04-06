import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

import { Text } from 'components';

export const ChartInfoStyled = styled.div``;

export const SelectedTime = styled(Text)`
  display: block;
`;
export const SelectedPrice = styled(Text)`
  margin-bottom: 1rem;
  display: block;
`;

const formatCurrency = (number, currencySymbol, locale) => {
  return `${currencySymbol}${number.toFixed(2).toLocaleString(locale)}`;
};

const formatTime = (time, format) => {
  return moment(time).format(format);
};

const ChartInfo = ({ selectedTime, selectedPrice }) => (
  <ChartInfoStyled>
    { selectedTime && selectedPrice &&
      <div>
        <SelectedPrice color="primary" size="large" fontWeight="500">{formatCurrency(selectedPrice, '$', 'en-US')}</SelectedPrice>
        <SelectedTime color="greyLight" fontWeight="500">{formatTime(selectedTime, 'MMMM Do YYYY, h:mm a')}</SelectedTime>
      </div>
    }
  </ChartInfoStyled>
);

ChartInfo.propTypes = {
  selectedTime: PropTypes.string,
  selectedPrice: PropTypes.number
};

export default ChartInfo;
