import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '.';

storiesOf('Atom - Input', module)
  .add('default', () => (
    <Input />
  ));
