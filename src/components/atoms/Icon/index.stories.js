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
  .add('size - small', () => (
    <Icon icon="cog" size="small" />
  ))
  .add('size - large', () => (
    <Icon icon="cog" size="large" />
  ));
