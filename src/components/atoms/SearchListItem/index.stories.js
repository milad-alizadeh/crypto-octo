import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchListItem from '.';

storiesOf('Atom - SearchListItem', module)
  .add('default', () => (
    <SearchListItem
      value="sample-item"
      onItemHover={action('hover')}
      onItemClick={action('click')}
      item={{
        label: 'Sample Item',
        value: 321
      }}
    >
      Sample Item
    </SearchListItem>
  ));
