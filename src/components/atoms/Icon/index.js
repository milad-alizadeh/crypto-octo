import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { palette } from 'styled-theme';
import { ifProp, prop } from 'styled-tools';

const Wrapper = styled.div`
  display: block;
  color: ${prop('fill', palette('grey', 3))};
  width: ${ifProp({ size: 'large' }, '3.6rem', ifProp({ size: 'small' }, '1.2rem', '2.4rem'))};
  height: ${ifProp({ size: 'large' }, '3.6rem', ifProp({ size: 'small' }, '1.2rem', '2.4rem'))};

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
  fill: PropTypes.string,
  size: PropTypes.string
};

export default Icon;
