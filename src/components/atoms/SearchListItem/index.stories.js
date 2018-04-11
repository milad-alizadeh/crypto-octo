import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchListItem from '.';

storiesOf('Atom - SearchListItem', module)
  .add('default', () => (
    <SearchListItem text="Sample Item" />
  ));
