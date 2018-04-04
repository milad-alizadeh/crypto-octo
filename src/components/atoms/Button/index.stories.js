import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '.';

storiesOf('Atom - Button', module)
  .add('default', () => (
    <Button>Button Name</Button>
  ))
  .add('small', () => (
    <Button modifiers={['small']}>Button</Button>
  ))
  .add('success', () => (
    <Button modifiers={['success']}>Button</Button>
  ))
  .add('warning', () => (
    <Button modifiers={['warning']}>Button</Button>
  ))
  .add('disabled', () => (
    <Button modifiers={['disabled']}>Button</Button>
  ))
  .add('circular', () => (
    <Button modifiers={['circular', 'circularOnMobile']}>1W</Button>
  ));
