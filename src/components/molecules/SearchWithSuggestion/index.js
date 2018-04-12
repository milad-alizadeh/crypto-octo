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

const SearchWithSuggestionStyled = styled.div`
  position: relative;
`;

class SearchWithSuggestion extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    list: PropTypes.array,
    onItemSelect: PropTypes.func
  }

  static keyDownHandlers = {
    ArrowDown() {
      let { highlightedIndex, filteredList } = this.state;

      if (highlightedIndex === null) {
        this.setState({ highlightedIndex: 0 });
      } else {
        let nextIndex = highlightedIndex < filteredList.length - 1 ? highlightedIndex += 1 : 0;
        this.setState({ highlightedIndex: nextIndex });
      }
    },
    ArrowUp() {
      let { highlightedIndex, filteredList } = this.state;

      if (highlightedIndex === null) {
        this.setState({ isOpen: false });
      } else {
        let previousIndex = highlightedIndex > 0 ? highlightedIndex -= 1 : filteredList.length - 1;
        this.setState({ highlightedIndex: previousIndex });
      }
    },
    Enter(event) {
      let { highlightedIndex, filteredList } = this.state;

      if (event.keyCode !== 13) {
        return;
      }

      this.setState({
        currentInputValue: filteredList[highlightedIndex].label,
        isOpen: false
      });
    },
    Escape() {
      this.setState({ isOpen: false });
    },
    Tab(event) {

    }
  }

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      highlightedIndex: null,
      filteredList: props.list,
      currentInputValue: ''
    };
  }

  filterResult = (event) => {
    if (!this.state.isOpen) {
      this.setState({ isOpen: true });
    }

    let term = event.target.value;
    let filteredList = this.props.list.filter((item) => {
      let listItemLabel = item.label.toLowerCase();
      let listItemValue = item.value.toString().toLowerCase();
      let searchTerm = term.toLowerCase();
      return listItemLabel.indexOf(searchTerm) > -1 || listItemValue.indexOf(searchTerm) > -1;
    });

    if (!filteredList.length) {
      filteredList.push({
        value: null,
        label: 'Not found!'
      });
    }

    this.setState({
      filteredList,
      currentInputValue: term,
      highlightedIndex: null
    });
  }

  handleInputFocus = () => {
    let { isOpen, currentInputValue } = this.state;
    if (!isOpen && !currentInputValue) {
      this.setState({ isOpen: true });
    }
  }

  handleInputBlur = () => {
    if (!this.ignoreInputBlur && this.state.isOpen) {
      this.setState({ isOpen: false });
    }
  }

  handleItemHover = (item) => {
    this.setState({ highlightedIndex: this.state.filteredList.indexOf(item) });
  }

  handleItemClick = (item) => {
    this.props.onItemSelect(item);
    this.setState({
      currentInputValue: item.label,
      isOpen: false
    });
  }

  handleListFocus = () => {
    this.ignoreInputBlur = true;
  }

  handleListBlur = () => {
    this.ignoreInputBlur = false;
  }

  handleKeyDown = (event) => {
    if (SearchWithSuggestion.keyDownHandlers[event.key]) {
      SearchWithSuggestion.keyDownHandlers[event.key].call(this, event);
    }
  }

  render() {
    let { placeholder } = this.props;
    let { filteredList, highlightedIndex, currentInputValue, isOpen } = this.state;

    return (
      <SearchWithSuggestionStyled>
        <SearchInput
          placeholder={placeholder}
          value={currentInputValue}
          onInputChange={this.filterResult}
          onInputFocus={this.handleInputFocus}
          onInputBlur={this.handleInputBlur}
          onKeyDown={this.handleKeyDown}
          onClick={this.handleInputFocus}
        />
        { isOpen &&
          <SearchListStyled
            list={filteredList}
            onItemHover={this.handleItemHover}
            onItemClick={this.handleItemClick}
            highlightedItem={filteredList[highlightedIndex]}
            onMouseOver={this.handleListFocus}
            onFocus={this.handleListFocus}
            onBlur={this.handleListBlur}
            onMouseOut={this.handleListBlur}
          />
        }
      </SearchWithSuggestionStyled>
    );
  }
}

export default SearchWithSuggestion;
