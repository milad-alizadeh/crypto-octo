import React from 'react';
import { mount } from 'enzyme';
import Card from '.';
import theme from '../../themes/default';

const wrap = (props = {}) => mount(<Card {...props} theme={theme} />);

describe('Molecule - Card', () => {
  it('renders children when passed in', () => {
    let wrapper = wrap({ children: 'Test Child' });
    expect(wrapper.contains('Test Child')).toBeTruthy();
  });

  it('renders heading', () => {
    let wrapper = wrap({ heading: 'Test Heading' });
    expect(wrapper.contains('Test Heading')).toBeTruthy();
  });

  it('doesn\'t render header if heading is not provided', () => {
    let wrapper = wrap();
    expect(wrapper.find('header')).toHaveLength(0);
  });

  it('doesn\'t render content if no childre are provided', () => {
    let wrapper = wrap();
    expect(wrapper.find('div')).toHaveLength(0);
  });
});
