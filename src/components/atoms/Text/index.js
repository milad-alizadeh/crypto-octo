import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextStyled = styled.span`
  font-size: 1.4rem;
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
  color: PropTypes.string
};

export default Text;
