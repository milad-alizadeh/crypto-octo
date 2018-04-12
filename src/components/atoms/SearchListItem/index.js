import React, { Component } from 'react';
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

class SearchListItem extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (this.props.onItemClick) {
      this.props.onItemClick(this.props.item);
    }
  }

  render() {
    let { item, ...props } = this.props;
    return (
      <SearchListItemStyled
        {...props}
        onClick={this.onClick}
      >
        {item.label}
      </SearchListItemStyled>
    );
  }
}

SearchListItem.propTypes = {
  item: PropTypes.object,
  children: PropTypes.node,
  onItemClick: PropTypes.func
};

export default SearchListItem;
