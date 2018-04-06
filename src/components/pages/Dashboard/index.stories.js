// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Dashboard } from 'components';

storiesOf('Page - Dashboard', module)
  .add('default', () => (
    <Dashboard />
  ));
