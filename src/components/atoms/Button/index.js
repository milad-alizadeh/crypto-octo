import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoints from 'styled-components-breakpoint';
import { applyStyleModifiers, styleModifierPropTypes } from 'styled-components-modifiers';

import { ifColor } from '../../helpers';

let backgroundColor = ({ color, theme, active }) => (
  active ? ifColor(color, 'primary', theme) : ''
);

let borderColor = ({ color, theme, active }) => (
  active ? ifColor(color, 'primary', theme) : theme.colors.grey
);

let color = ({ theme, active }) => (
  active ? theme.colors.white : theme.colors.greyLight
);

const MODIFIER_CONFIG = {
  primary: ({ theme }) => `
    cursor: disabled;
    &, &:hover {
      color: ${theme.colors.greyLighter}
      background: ${theme.colors.greyLighter}
      border-color: ${theme.colors.greyLighter}
    }
  `,

  secondary: ({ theme }) => `
    cursor: disabled;
    &, &:hover {
      color: ${theme.colors.greyLighter}
      background: ${theme.colors.greyLighter}
      border-color: ${theme.colors.greyLighter}
    }
  `,

  // Alternatively, you can return an object with your styles under the key `styles`.
  success: ({ theme }) => `
    background-color: ${theme.colors.success};
    border-color: ${theme.colors.success};
    color: ${theme.colors.white};

    &:hover {
      color: ${theme.colors.white};
    }
  `,

  disabled: ({ theme }) => `
    cursor: not-allowed;
    &, &:hover {
      color: ${theme.colors.greyDark}
      background: ${theme.colors.greyLighter}
      border-color: ${theme.colors.greyLighter}
    }
  `,

  warning: ({ theme }) => `
    background-color: ${theme.colors.warning};
    border-color: ${theme.colors.warning};
    color: ${theme.colors.white};
  `,

  small: () => `
    font-size: 1.4rem;
    padding: .7rem 1.9rem;
  `,

  large: () => `
    font-size: 1.8rem;
    padding: 1.2rem 2.4rem
  `,

  circular: () => `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    padding: 0;
    border-radius: 50%;
  `,

  circularOnMobile: () => `
    ${breakpoints('medium')`
      background: red !important;
      padding: .7rem 1.9rem;
    `}
  `
};

let ButtonStyled = styled.div`
  border-radius: 2rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 400;
  font-size: 1.4rem;
  min-width: .8rem;
  line-height: 1;
  list-style: none;
  padding: .7rem 1.9rem;
  cursor: pointer;
  display: inline-block;
  color: ${color};
  text-transform: uppercase;
  transition: ${({ theme }) => theme.transition.fast};
  transition-property: color, background, border-color;
  background-color: ${backgroundColor};
  border: .1rem solid ${borderColor};

  &:hover {
    border-color: ${({ theme, color }) => ifColor(color, 'primary', theme)};
    background: ${({ theme, color }) => ifColor(color, 'primary', theme)};
    color: ${({ theme }) => theme.colors.white};
    cursor: ${({ active }) => active ? 'pointer' : ''};
  }

  ${applyStyleModifiers(MODIFIER_CONFIG)}
`;

const Button = (props) => {
  ButtonStyled = props.tag ? ButtonStyled.withComponent(props.tag) : ButtonStyled;

  return (
    <ButtonStyled {...props}>{props.children}</ButtonStyled>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  color: PropTypes.string,
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG)
};

export default Button;
