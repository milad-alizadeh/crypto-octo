import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '.';

storiesOf('Atom - Button', module)
  .add('default', () => (
    <Button>Button Name</Button>
  ))
  .add('size', () => (
    <Button size="small">Button Name</Button>
  ))
  .add('active', () => (
    <Button active>Button Name</Button>
  ))
  .add('color & active', () => (
    <Button active color="secondary">Button Name</Button>
  ));
