import React from 'react';
import { shallow } from 'enzyme';
import TableRow from '.';
import theme from '../../themes/default';

const wrap = (props = {}) => shallow(<TableRow {...props} theme={theme} />);

it('renders with different combination of props', () => {
  wrap({ filled: true });
});

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' });
  expect(wrapper.contains('test')).toBe(true);
});

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' });
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1);
});
