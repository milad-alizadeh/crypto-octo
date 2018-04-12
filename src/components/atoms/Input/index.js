import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const InputStyled = styled.input`
  background: ${({ theme }) => theme.colors.greyDarker};
  border: .1rem solid ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.greyLighter};
  font-size: 1.3rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  line-height: 1;
  font-weight: 300;
  border-radius: 4.8rem;
  padding: 1rem 3.4rem;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }

  ${breakpoint('medium')`
    padding: 1.4rem 3.4rem;
    font-size: 1.4rem;
  `}
`;

const Input = ({ onInputChange, type, value, placeholder }) => (
  <InputStyled
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={onInputChange}
  />
);

Input.defaultProps = {
  type: 'text',
  value: ''
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onInputChange: PropTypes.func
};

export default Input;
