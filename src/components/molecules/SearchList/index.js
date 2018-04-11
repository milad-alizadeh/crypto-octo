import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SearchListItem } from 'components';

const SearchListItemStyled = styled(SearchListItem)``;

const SearchListWrapper = styled.div`
  max-height: 20rem;
  overflow: auto;

  &::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 7px;
      background-color: rgba(0,0,0,.2);
  }
  &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: rgba(0,0,0,.5);
  }
  -webkit-overflow-scrolling: touch;
`;

const SearchListStyled = styled.ul`
  ${SearchListItemStyled} {
    border-bottom: .1rem solid ${({ theme }) => theme.colors.grey};
  }
`;

const renderList = (list, onItemClick) => {
  return list.map(item => (
    <SearchListItemStyled
      key={item}
      onItemClick={onItemClick(item)}
    >
      {item}
    </SearchListItemStyled>
  ));
};

const SearchInput = ({ list, onItemClick, ...props }) => {
  return (
    <SearchListWrapper>
      <SearchListStyled {...props}>
        {renderList(list, onItemClick)}
      </SearchListStyled>
    </SearchListWrapper>
  );
};

SearchInput.propTypes = {
  list: PropTypes.array,
  onItemClick: PropTypes.func
};

export default SearchInput;
