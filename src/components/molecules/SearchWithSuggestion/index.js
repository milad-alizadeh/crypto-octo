import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SearchList, SearchInput } from 'components';
import styled from 'styled-components';

const SearchListStyled = styled(SearchList)``;
const SearchInputStyled = styled(SearchInput)``;
const SearchWithSuggestionStyled = styled.div``;

class SearchWithSuggestion extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    list: PropTypes.string,
    onItemClick: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.filterResult = this.filterResult.bind(this);

    this.state = {
      filteredList: []
    };
  }

  filterResult(term) {
    let filteredList = this.props.list.filter(item => item.indexOf(term) > -1);
    this.setState({ filteredList });
  }

  render() {
    let { placeholder } = this.props;

    return (
      <SearchWithSuggestionStyled>
        <SearchInputStyled
          placeholder={placeholder}
          onInputChange={this.filterResult}
        />
        <SearchListStyled
          list={this.state.filteredList}
        />
      </SearchWithSuggestionStyled>
    );
  }
}

export default SearchWithSuggestion;
