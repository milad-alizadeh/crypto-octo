import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TableCell, TableRow, Table, LineChart } from 'components';
import _ from 'lodash';

const setColor = ({ theme, flag }) => {
  let { colors } = theme;

  switch (flag) {
    case 1:
      return colors.success;
    case 2:
      return colors.disabled;
    default:
      return colors.greyLight;
  }
};

const Tr = styled(TableRow)``;
const Td = styled(TableCell)`
  width: 20%;
  vertical-align: middle;
  color: ${props => setColor(props)};

  > div {
    display: flex;
    align-items: center;

    img {
      max-width: 2.4rem;
      margin-right: 1rem;
    }
  }
`;

const TableWatchlistStyled = styled(Table)``;

const renderList = (list) => {
  return _.map(list, (value, key) => {
    let { price, marketCap, changePct24h, flag, img, coinName, chartData } = value;

    return (
      <Tr key={key}>
        <Td key={coinName}>
          <div>
            <img src={img} alt="" />
            {coinName}
          </div>
        </Td>
        <Td flag={flag}>{price}</Td>
        <Td>{marketCap}</Td>
        <Td flag={flag}>{changePct24h}%</Td>
        <Td></Td>
      </Tr>
    );
  });
};

const TableWatchlist = ({ data }) => {
  return (
    <TableWatchlistStyled
      head={
        <Tr>
          <Td heading>Coin</Td>
          <Td heading>Price</Td>
          <Td heading>Market Cap</Td>
          <Td heading>Change 24h</Td>
          <Td heading>Price Chart (7d)</Td>
        </Tr>
      }
    >
      {renderList(data)}
    </TableWatchlistStyled>
  );
};

TableWatchlist.propTypes = {
  data: PropTypes.object
};

export default TableWatchlist;
