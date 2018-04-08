import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const styles = css`
  text-align: left;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.greyLight};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const Th = styled.th`
  ${styles}
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: 600;
`;
const Td = styled.td`
  ${styles}
  font-size: 1.4rem;
  font-weight: 400;
  border-bottom: .1rem solid ${({ theme }) => theme.colors.greyDark};
`;

const TableCell = ({ heading, children, ...props }) => {
  return React.createElement(heading ? Th : Td, props, children);
};

TableCell.propTypes = {
  heading: PropTypes.bool,
  children: PropTypes.any
};

export default TableCell;
