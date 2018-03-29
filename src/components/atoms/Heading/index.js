import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

let HeadingStyled = styled.h1`
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.4rem;
  margin: 0;
  color: ${({ theme, color }) => color ? theme.colors[color] : theme.colors.grey};
`;

const Heading = (props) => {
  const level = props.level || 1;
  HeadingStyled = HeadingStyled.withComponent(`h${level}`);
  return (
    <HeadingStyled {...props}>{props.children}</HeadingStyled>
  );
};

Heading.propTypes = {
  level: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.node
};

export default Heading;
