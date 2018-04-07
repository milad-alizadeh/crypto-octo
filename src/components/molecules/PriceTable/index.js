import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TableCell, TableRow, Table } from 'components';

const Tr = styled(TableRow)``;
const Td = styled(TableCell)`
  width: 20%;
  vertical-align: middle;

  > div {
    display: flex;
    align-items: center;

    img {
      max-width: 2.4rem;
      margin-right: 1rem;
    }
  }
`;
const PriceTableStyled = styled(Table)``;

const renderRow = (row) => {
  let {
    name,
    icon,
    price,
    priceFlag,
    totalValue,
    profitLoss,
    profitLossFlag,
    change24,
    change24Flag
  } = row;

  return (
    <Tr key={name}>
      <Td key={name}>
        <div>
          <img src={icon} alt="" />
          {name}
        </div>
      </Td>
      <Td key={price} flag={priceFlag}>{price}</Td>
      <Td key={totalValue}>{totalValue}</Td>
      <Td key={profitLoss} flag={profitLossFlag}>{profitLoss}</Td>
      <Td key={change24} flag={change24Flag}>{change24}</Td>
    </Tr>
  );
};

const PriceTable = ({ data }) => {
  return (
    <PriceTableStyled
      head={
        <Tr>
          <Td heading>Coin</Td>
          <Td heading>Price</Td>
          <Td heading>Total Value</Td>
          <Td heading>Profit/Loss</Td>
          <Td heading>Change 24h</Td>
        </Tr>
      }
    >
      {data.map(row => renderRow(row))}
    </PriceTableStyled>
  );
};

PriceTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.string,
    price: PropTypes.string,
    priceFlag: PropTypes.number,
    totalValue: PropTypes.string,
    profitLoss: PropTypes.string,
    profitLossFlag: PropTypes.number,
    change24: PropTypes.string,
    change24Flag: PropTypes.number
  }))
};

export default PriceTable;
