import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { applyStyleModifiers, styleModifierPropTypes } from 'styled-components-modifiers';

const MODIFIER_CONFIG = {
  highlighted: ({ theme }) => `
    background: ${theme.colors.greyDark};
  `
};

const ImageContainer = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  margin: auto 1rem auto 0;

  img {
    max-width: 100%;
  }
`;

const SearchListItemStyled = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.colors.greyLight};
  background: ${({ theme }) => theme.colors.greyDarker};
  padding: 1rem 1.5rem;
  font-size: 1.4rem;
  user-select: none;
  cursor: pointer;
  display: flex;
  height: 4rem;


  ${applyStyleModifiers(MODIFIER_CONFIG)}
`;

class SearchListItem extends Component {
  onMouseOver = () => {
    this.props.onItemHover(this.props.item);
  }

  onItemClick = () => {
    this.props.onItemClick(this.props.item);
  }

  render() {
    let { item, onItemClick, ...props } = this.props;
    return (
      <SearchListItemStyled
        {...props}
        onMouseOver={this.onMouseOver}
        onFocus={this.onMouseOver}
        onClick={this.onItemClick}
      >
        {item.img && <ImageContainer><img src={item.img} alt="" /></ImageContainer>}
        {item.label}
      </SearchListItemStyled>
    );
  }
}

SearchListItem.propTypes = {
  item: PropTypes.object,
  onItemHover: PropTypes.func,
  onItemClick: PropTypes.func,
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG)
};

export default SearchListItem;
