import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '.';

storiesOf('Atom - Icon', module)
  .add('default', () => (
    <Icon icon="cog" />
  ))
  .add('color', () => (
    <Icon icon="cog" color="primary" />
  ))
  .add('size - small', () => (
    <Icon icon="cog" size="small" />
  ))
  .add('size - large', () => (
    <Icon icon="cog" size="large" />
  ));
