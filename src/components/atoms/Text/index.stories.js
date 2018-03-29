import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from '.';

storiesOf('Atom - Text', module)
  .add('default', () => (
    <Text>Sample Text</Text>
  ));
