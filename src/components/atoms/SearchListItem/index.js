import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchListItemStyled = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.colors.greyLight};
  background: ${({ theme }) => theme.colors.greyDarker};
  padding: 1rem 1.5rem;
  font-size: 1.4rem;
  user-select: none;
  cursor: pointer;

  &:focus,
  &:hover {
    background: ${({ theme }) => theme.colors.greyDark};
  }
`;

const SearchListItem = ({ children, onItemClick }) => (
  <SearchListItemStyled click={onItemClick}>{children}</SearchListItemStyled>
);

SearchListItem.propTypes = {
  children: PropTypes.node,
  onItemClick: PropTypes.func
};

export default SearchListItem;
