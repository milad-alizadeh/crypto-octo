import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const detectSize = (size) => {
  switch (size) {
    case 'large':
      return '3.6rem';
    case 'small':
      return '1.2rem';
    default:
      return '2.4rem';
  }
};

const Wrapper = styled.div`
  display: block;
  color: ${({ theme, color }) => color ? theme.colors[color] : theme.colors.greyLighter};
  width: ${props => detectSize(props.size)};
  height: ${props => detectSize(props.size)};

  & > svg {
    width: 100%;
    height: 100%;
    display: block;
    fill: currentcolor;
    stroke: currentcolor;
  }
`;


const Icon = ({ icon, ...props }) => {
  const svg = require(`!raw-loader!./icons/${icon}.svg`);
  return <Wrapper {...props} dangerouslySetInnerHTML={{ __html: svg }} />;
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string
};

export default Icon;
