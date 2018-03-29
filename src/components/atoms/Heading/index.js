import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


let HeadingTag = styled.h1`
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.4rem;
  margin: 0;
  color: ${({ theme, color }) => color ? theme.colors[color] : theme.colors.greyLight};
`;

const Heading = (props) => {
  const level = props.level || 1;
  HeadingTag = HeadingTag.withComponent(`h${level}`);
  return (
    <HeadingTag {...props}>{props.children}</HeadingTag>
  );
};

Heading.propTypes = {
  level: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.node
};

export default Heading;
