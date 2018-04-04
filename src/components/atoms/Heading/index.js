import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

let HeadingStyled = styled.h1`
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ size }) => fontSize(size)};
  margin: 0;
  color: ${({ theme, color }) => color ? theme.colors[color] : theme.colors.greyLight};
`;

const Heading = (props) => {
  let level = props.level || 1;
  HeadingStyled = HeadingStyled.withComponent(`h${level}`);
  return (
    <HeadingStyled {...props}>{props.children}</HeadingStyled>
  );
};

Heading.propTypes = {
  level: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.string
};

export default Heading;
