import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const fontSize = ({ level }) => `${0.75 + (1 * (1 / level))}rem`;

let HeadingTag = styled.h1`
  font-weight: 500;
  font-size: ${fontSize};
  margin: 0;
  margin-top: 0.85714em;
  margin-bottom: 0.57142em;
  color: ${({ color, theme: { colors } }) => color || colors.greyLighter};
`;

const Heading = (props) => {
  HeadingTag = HeadingTag.withComponent(`h${props.level}`);
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
