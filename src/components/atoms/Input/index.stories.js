import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from '.';

storiesOf('Atom - Input', module)
  .add('default', () => (
    <Input />
  ))
  .add('with placeholder', () => (
    <Input placeholder="Search for coins" />
  ))
  .add('with eventListeners', () => (
    <Input
      placeholder="Search for coins"
      onInputFocus={action('input focus')}
      onInputBlur={action('input blur')}
      onInputChange={action('input change')}
    />
  ));
