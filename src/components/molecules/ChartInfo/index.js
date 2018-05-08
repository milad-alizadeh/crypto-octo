import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

import { Text } from 'components';

const ChartInfoStyled = styled.div``;

const Time = styled(Text)`
  display: block;

  @media (min-width: 540px) {
    margin-bottom: .6rem;
  }
`;

const Price = styled(Text)`
  margin-bottom: 1rem;
  display: block;
`;

const formatCurrency = (number, currencySymbol, locale) => {
  return `${currencySymbol}${number.toFixed(2).toLocaleString(locale)}`;
};

const formatTime = (time, format) => {
  return moment(time).format(format);
};

const ChartInfo = ({ time, price, currencySymbol, locale }) => (
  <ChartInfoStyled>
    { time && price &&
      <div>
        <Price color="primary" size="large" fontWeight="500">{formatCurrency(price, currencySymbol, locale)}</Price>
        <Time color="greyLight" fontWeight="500">{formatTime(time, 'MMMM Do YYYY, h:mm a')}</Time>
      </div>
    }
  </ChartInfoStyled>
);

ChartInfo.propTypes = {
  time: PropTypes.string,
  price: PropTypes.number,
  currencySymbol: PropTypes.string,
  locale: PropTypes.string
};

export default ChartInfo;
