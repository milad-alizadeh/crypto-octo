import React from 'react';
import { shallow } from 'enzyme';
import IconWithLabel from '.';
import theme from '../../themes/default';

const wrap = (props = {}) => shallow(<IconWithLabel {...props} theme={theme} />).dive();

describe('Molecules - IconWithLabel', () => {
  it('renders the right ', () => {
    const wrapper = wrap({
      tag: 'li',
      icon: 'cog',
      label: 'test'
    });
    expect(wrapper.find('li')).toHaveLength(1);
  });

  it('renders the icon and the label', () => {
    const wrapper = wrap({
      icon: 'cog',
      label: 'Test label'
    });

    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.contains('Test label')).toBeTruthy();
  });
});
