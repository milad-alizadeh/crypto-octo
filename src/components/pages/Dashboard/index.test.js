// https://github.com/diegohaz/arc/wiki/Testing-components
import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '.';

it('renders', () => {
  shallow(<Dashboard />);
});
