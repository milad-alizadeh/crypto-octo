import React from 'react';
import { storiesOf } from '@storybook/react';
import IconWithLabel from '.';

storiesOf('Molecule - IconWithLabel', module)
  .add('default', () => (
    <IconWithLabel icon="cog" label="Settings" />
  ));
