import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const detectSize = (size) => {
  switch (size) {
    case 'large':
      return '4.8rem';
    case 'small':
      return '2.4rem';
    default:
      return '3.6rem';
  }
};

const Wrapper = styled.div`
  display: block;
  color: ${({ theme, color }) => color ? theme.colors[color] : theme.colors.grey};
  width: ${props => detectSize(props.size)};
  height: ${props => detectSize(props.size)};

  & > svg {
    width: 100%;
    height: 100%;
    display: block;
    fill: currentcolor;
    stroke: currentcolor;
    transition: all ${props => props.theme.transition.fast};
  }
`;


const Icon = ({ icon, ...props }) => {
  let svg = require(`!raw-loader!./icons/${icon}.svg`);
  return <Wrapper {...props} dangerouslySetInnerHTML={{ __html: svg }} />;
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string
};

export default Icon;
