import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '.';

storiesOf('Icon', module)
  .add('default', () => (
    <Icon icon="cog" />
  ))
  .add('fill', () => (
    <Icon icon="cog" fill="blue" />
  ))
  .add('size', () => (
    <Icon icon="cog" size="large" />
  ));
