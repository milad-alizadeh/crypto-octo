import React from 'react';
import { shallow } from 'enzyme';
import Icon from '.';
import theme from '../../themes/default';

const wrap = (props = {}) => shallow(<Icon icon="github" {...props} theme={theme} />).dive();

it('renders with different combination of props', () => {
  wrap({ size: 'large' });
});

it('renders props when passed in', () => {
  let wrapper = wrap({ id: 'foo' });
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1);
});
