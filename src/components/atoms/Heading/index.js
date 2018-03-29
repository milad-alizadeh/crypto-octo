import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoints from 'styled-components-breakpoint';

const fontSize = ({ level = 1 }) => `${0.75 + (1 * (1 / level))}rem`;

let HeadingTag = styled.h1`
  font-weight: 500;
  font-family: ${({ theme: fonts }) => fonts.primary};
  font-size: ${fontSize};
  margin: 0;
  margin-top: 0.85714em;
  margin-bottom: 0.57142em;
  color: ${props => props.theme.colors.greyLighter};
  ${breakpoints('xlarge')`
    background: blue;
  `}
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
