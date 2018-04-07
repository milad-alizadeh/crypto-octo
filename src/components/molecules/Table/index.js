import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableStyled = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const Table = ({
  caption, head, foot, children, ...props
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
  caption: PropTypes.string,
  head: PropTypes.node,
  foot: PropTypes.node,
  children: PropTypes.any
};

export default Table;
