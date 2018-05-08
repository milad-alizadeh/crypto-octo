import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ChartControls from '.';

let controls = ['1d', '3d', '1w'];

storiesOf('Molecule - ChartControls', module)
  .add('default', () => (
    <ChartControls
      controls={controls}
      onActiveControlChange={action('active control changed')}
    />
  ));
