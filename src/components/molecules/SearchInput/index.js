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
    cursor: pointer;
    background: none;
    padding: 0;

    &:hover {
      ${IconStyled} {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

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

const SearchInput = (props) => {
  return (
    <SearchInputStyled {...props}>
      <InputStyled
        placeholder={props.placeholder}
        type={props.type}
        onInputChange={props.onInputChange}
      />
      <Button>
        <IconStyled icon={props.icon} onClick={props.onSubmit} />
      </Button>
    </SearchInputStyled>
  );
};

SearchInput.propTypes = {
  icon: PropTypes.string.isRequired,
  type: PropTypes.string,
  onInputChange: PropTypes.func,
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string
};

export default SearchInput;
