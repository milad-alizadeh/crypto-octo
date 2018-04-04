import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

let fontSize = (size) => {
  switch (size) {
    case 'large':
      return '2.4rem';
    case 'medium':
      return '1.8rem';
    default:
      return '1.4rem';
  }
};

const TextStyled = styled.span`
  font-size: ${({ size }) => fontSize(size)};
  text-transform: uppercase;
  letter-spacing: .03em;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme, color }) => color ? theme.colors[color] : theme.colors.greyLight};
`;

const Text = props => (
  <TextStyled {...props}>{ props.children }</TextStyled>
);

Text.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  size: PropTypes.string
};

export default Text;
