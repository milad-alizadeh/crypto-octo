import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchList from '.';

const list = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
  'Item 5',
  'Item 6',
  'Item 7',
  'Item 8',
  'Item 9',
  'Item 10'
];

storiesOf('Molecule - SearchList', module)
  .add('default', () => (
    <SearchList
      list={list}
      onItemClick={action('item was clicked')}
    />
  ));
