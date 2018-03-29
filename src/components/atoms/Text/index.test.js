import React from 'react';
import { shallow } from 'enzyme';
import Text from '.';
import theme from '../../themes/default';

const wrap = (props = {}) => shallow(<Text {...props} theme={theme} />).dive();

describe('Atom - Text', () => {
  it('renders children when passed in', () => {
    const wrapper = wrap({ children: 'test' });
    expect(wrapper.contains('test')).toBe(true);
  });
});
