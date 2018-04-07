import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const styles = css`
  text-align: left;
  padding: 0.75em;
  color: ${({ theme }) => theme.colors.greyLight};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const Th = styled.th`
  ${styles}
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: 700;
`;
const Td = styled.td`
  ${styles}
  font-size: 1.4rem;
  border-bottom: .1rem solid ${({ theme }) => theme.colors.grey};
`;

const TableCell = ({ heading, children, ...props }) => {
  return React.createElement(heading ? Th : Td, props, children);
};

TableCell.propTypes = {
  heading: PropTypes.bool,
  children: PropTypes.any
};

export default TableCell;
