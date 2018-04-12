import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SearchListItem } from 'components';

const SearchListItemStyled = styled(SearchListItem)``;

const SearchListStyled = styled.ul`
  ${SearchListItemStyled} {
    border-bottom: .1rem solid ${({ theme }) => theme.colors.grey};

    &:last-child {
      border: 0;
    }
  }
`;


const SearchListWrapper = styled.div`
  max-height: 20rem;
  overflow: auto;
  border: .1rem solid ${({ theme }) => theme.colors.grey};

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

class SearchInput extends Component {
  static propTypes = {
    list: PropTypes.array,
    onItemSelect: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.handleListItemClick = this.handleListItemClick.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  handleListItemClick(term) {
    this.props.onItemSelect(term);
  }

  renderList(list) {
    return list.map((item) => {
      return (
        <SearchListItemStyled
          key={item.value}
          onItemClick={this.handleListItemClick}
          item={item}
        />
      );
    });
  }

  render() {
    let { list, ...props } = this.props;

    return (
      <div>
        { list.length > 0 &&
          <SearchListWrapper {...props}>
            <SearchListStyled>
              {this.renderList(list)}
            </SearchListStyled>
          </SearchListWrapper>
        }
      </div>
    );
  }
}


export default SearchInput;
