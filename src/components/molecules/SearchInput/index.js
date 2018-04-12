import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Icon, Input } from 'components';

const IconStyled = styled(Icon)``;
const Button = styled.button``;
const InputStyled = styled(Input)``;

let SearchInputStyled = styled.div`
  position: relative;

  ${Button} {
    width: 2rem;
    height: 2rem;
    position: absolute;
    right: 2rem;
    top: .9rem;
    background: none;
    padding: 0;

    &:focus {
      outline: 0;
    }
  }

  ${IconStyled} {
    width: 100%;
    height: 100%;
  }

  ${InputStyled} {
    padding-right: 4rem;


    &:focus {
      outline: 0;
    }
  }

  ${breakpoint('medium')`
    ${Button} {
      width: 2.5rem;
      height: 2.5rem;
      right: 2rem;
      top: 1rem;
    }
  `}
`;

const SearchInput = ({
  placeholder, value, onInputChange, onInputFocus, onInputBlur, ...props
}) => {
  return (
    <SearchInputStyled {...props}>
      <InputStyled
        placeholder={placeholder}
        type="text"
        value={value}
        onInputChange={onInputChange}
        onInputFocus={onInputFocus}
        onInputBlur={onInputBlur}
      />
      <Button>
        <IconStyled
          icon="magnifying-glass"
        />
      </Button>
    </SearchInputStyled>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string,
  onInputChange: PropTypes.func,
  onInputFocus: PropTypes.func,
  onInputBlur: PropTypes.func,
  placeholder: PropTypes.string
};

export default SearchInput;
