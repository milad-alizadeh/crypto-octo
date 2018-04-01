import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

let TagStyled = styled.div`
  border-radius: 2rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 400;
  font-size: ${({ size }) => size === 'small' ? '1.2rem' : '1.4rem'};
  min-width: .8rem;
  line-height: 1;
  list-style: none;
  padding: ${({ size }) => size === 'small' ? '.7rem 1.9rem' : '1.2rem 2.4rem'};
  cursor: pointer;
  display: inline-block;
  color: ${color};
  text-transform: uppercase;
  transition: all ${({ theme }) => theme.transition.fast};
  background-color: ${backgroundColor};
  border: .1rem solid ${borderColor};

  &:hover {
    border-color: ${({ theme, color }) => ifColor(color, 'primary', theme)};
    background: ${({ theme, color }) => ifColor(color, 'primary', theme)};
    color: ${({ theme }) => theme.colors.white};
    cursor: ${({ active }) => active ? 'pointer' : ''};
  }
`;

const Tag = (props) => {
  TagStyled = props.tag ? TagStyled.withComponent(props.tag) : TagStyled;

  return (
    <TagStyled {...props}>{props.children}</TagStyled>
  );
};

Tag.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  color: PropTypes.string
};

export default Tag;
