import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableStyled = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: left;
  color: ${({ theme }) => theme.colors.greyLight}

  tr:last-child > td {
    border-bottom: 0;
  }
`;

const Table = ({
  head, foot, children, ...props
}) => {
  return (
    <TableStyled {...props}>
      {head && <thead>{head}</thead>}
      {foot && <tfoot>{foot}</tfoot>}
      <tbody>{children}</tbody>
    </TableStyled>
  );
};

Table.propTypes = {
  head: PropTypes.node,
  foot: PropTypes.node,
  children: PropTypes.any
};

export default Table;
