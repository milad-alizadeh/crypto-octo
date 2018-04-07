import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TableCell, TableRow, Table } from 'components';

const Tr = styled(TableRow)``;
const Td = styled(TableCell)``;
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
    <Tr>
      <Td key={name}><img src={icon} alt="" />{name}</Td>
      <Td key={price} flag={priceFlag}>{price}</Td>
      <Td key={totalValue}>{totalValue}</Td>
      <Td key={profitLoss} flag={profitLossFlag}>{profitLoss}</Td>
      <Td key={change24} flag={change24Flag}>{change24}</Td>
    </Tr>
  );
};

const PriceTable = ({ data }) => {
  return (
    <PriceTableStyled>
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
