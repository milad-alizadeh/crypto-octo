import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SearchList, SearchInput } from 'components';
import styled from 'styled-components';

const SearchListStyled = styled(SearchList)`
  position: absolute;
  left: 2rem;
  right: 2rem;
  top: calc(100% + 1rem);
`;
const SearchInputStyled = styled(SearchInput)``;
const SearchWithSuggestionStyled = styled.div`
  position: relative;
`;

class SearchWithSuggestion extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    list: PropTypes.array,
    onItemSelect: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.filterResult = this.filterResult.bind(this);
    this.selectTerm = this.selectTerm.bind(this);

    this.state = {
      filteredList: [],
      currentInputValue: ''
    };
  }

  selectTerm(term) {
    if (this.props.onItemSelect) {
      this.props.onItemSelect(term);
    }

    this.setState({
      currentInputValue: term.label,
      filteredList: []
    });
  }

  filterResult(term) {
    let filteredList = this.props.list.filter((item) => {
      let listItemLabel = item.label.toLowerCase();
      let listItemValue = item.value.toString().toLowerCase();
      let searchTerm = term.toLowerCase();
      return listItemLabel.indexOf(searchTerm) > -1 || listItemValue.indexOf(searchTerm) > -1;
    });

    this.setState({
      filteredList,
      currentInputValue: term
    });
  }

  render() {
    let { placeholder } = this.props;
    let { filteredList, currentInputValue } = this.state;

    return (
      <SearchWithSuggestionStyled>
        <SearchInputStyled
          placeholder={placeholder}
          onInputChange={this.filterResult}
          value={currentInputValue}
        />
        <SearchListStyled
          list={filteredList}
          onItemSelect={this.selectTerm}
        />
      </SearchWithSuggestionStyled>
    );
  }
}

export default SearchWithSuggestion;
