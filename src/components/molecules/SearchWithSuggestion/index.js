import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SearchList, SearchInput } from 'components';
import styled from 'styled-components';

const SearchListStyled = styled(SearchList)`
  position: absolute;
  left: 2rem;
  right: 2rem;
  top: calc(100% - .1rem);
`;

const SearchWithSuggestionStyled = styled.div`
  position: relative;
`;

class SearchWithSuggestion extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    list: PropTypes.array,
    onItemSelect: PropTypes.func,
    fetchList: PropTypes.func,
    loading: PropTypes.bool,
    error: PropTypes.object
  }

  static defaultProps = {
    list: []
  }

  // Keyboard handlers
  static keyDownHandlers = {
    ArrowDown() {
      let { highlightedIndex, filteredList } = this.state;
      let nextIndex;

      // Set the index of current highlighted item
      if (highlightedIndex === null) {
        nextIndex = 0;
      } else {
        nextIndex = highlightedIndex < filteredList.length - 1 ? highlightedIndex += 1 : 0;
      }

      this.setState({ highlightedIndex: nextIndex });

      // Scroll to the correct item
      this.handleScroll(nextIndex, 'down');
    },
    ArrowUp() {
      let { highlightedIndex, filteredList } = this.state;

      // Set the index of current highlighted item
      let previousIndex = highlightedIndex > 0 ? highlightedIndex -= 1 : filteredList.length - 1;
      this.setState({ highlightedIndex: previousIndex });

      // Scroll to the correct item
      this.handleScroll(previousIndex, 'up');
    },
    Enter(event) {
      let { highlightedIndex, filteredList } = this.state;

      if (event.keyCode !== 13) {
        return;
      }

      // Select the highlighted index and fill the input value with it
      if (filteredList[highlightedIndex].value) {
        this.props.onItemSelect(filteredList[highlightedIndex]);
        this.setState({
          currentInputValue: filteredList[highlightedIndex].label,
          isOpen: false
        });
      }
    },
    // Close the autocomplete list
    Escape() {
      this.setState({ isOpen: false });
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      highlightedIndex: null,
      filteredList: [],
      currentInputValue: '',
      fetchRequestSent: false
    };
  }

  // Scroll to the highlighted item when using keyboard arrows
  handleScroll(itemIndex, direction) {
    let listWrapper = this.suggestionList.scrollableDiv;
    let listWrapperHeight = listWrapper.offsetHeight;
    let list = this.suggestionList.searchListNode;
    let listItems = list.children;
    let ItemHeight = listItems[0].offsetHeight;
    let currentItemPosition = listItems[itemIndex].offsetTop;
    let rowCount = (listWrapperHeight / ItemHeight);

    if (direction === 'down') {
      listWrapper.scrollTop += ItemHeight;
      if (itemIndex < rowCount) {
        listWrapper.scrollTop = 0;
      }
    } else {
      listWrapper.scrollTop -= ItemHeight;
      if (itemIndex >= listItems.length - rowCount - 1) {
        listWrapper.scrollTop = currentItemPosition;
      }
    }
  }

  filterResult = (event) => {
    if (!this.state.isOpen) {
      this.setState({ isOpen: true });
    }

    let term = event.target.value;

    if (term.length > 1) {
      // Search the array for results
      let filteredList = this.props.list.filter((item) => {
        let listItemLabel = item.label.toLowerCase();
        let searchTerm = term.toLowerCase();
        return listItemLabel.indexOf(searchTerm) > -1;
      });

      // Get the first 30 results
      filteredList = filteredList.slice(0, 30);

      // If no item is found show "not found" label
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
    } else {
      this.setState({
        filteredList: [],
        currentInputValue: term,
        highlightedIndex: null
      });
    }
  }

  handleInputFocus = () => {
    let { isOpen, currentInputValue, fetchRequestSent } = this.state;

    // Fetch the coinlist if it's not already fetched
    if (!fetchRequestSent && this.props.fetchList) {
      this.setState({ fetchRequestSent: true }, () => {
        this.props.fetchList();
      });
    }

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
    if (item.value) {
      this.props.onItemSelect(item);
      this.setState({
        currentInputValue: item.label,
        isOpen: false
      });
    }
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
        { isOpen && filteredList.length > 0 &&
          <SearchListStyled
            list={filteredList}
            onItemHover={this.handleItemHover}
            onItemClick={this.handleItemClick}
            highlightedItem={filteredList[highlightedIndex]}
            onMouseOver={this.handleListFocus}
            onFocus={this.handleListFocus}
            onBlur={this.handleListBlur}
            onMouseOut={this.handleListBlur}
            innerRef={(comp) => { this.suggestionList = comp; }}
          />
        }
      </SearchWithSuggestionStyled>
    );
  }
}

export default SearchWithSuggestion;
