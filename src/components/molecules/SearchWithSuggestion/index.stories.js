import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchWithSuggestion from '.';

const list = [
  {
    label: 'John',
    value: 32
  },
  {
    label: 'Jack',
    value: 413
  },
  {
    label: 'Mike',
    value: 234
  },
  {
    label: 'Matt',
    value: 13
  },
  {
    label: 'Chloe',
    value: 65
  },
  {
    label: 'Sara',
    value: 98
  },
  {
    label: 'Samuel',
    value: 87
  },
  {
    label: 'Milad',
    value: 3352
  },
  {
    label: 'Chessa',
    value: 41213
  },
  {
    label: 'Rob',
    value: 23564
  },
  {
    label: 'Vasi',
    value: 1331
  },
  {
    label: 'Chris',
    value: 65675
  },
  {
    label: 'Joe',
    value: 98987
  },
  {
    label: 'James',
    value: 87234
  }
];

storiesOf('Molecule - SearchWithSuggestion', module)
  .add('default', () => (
    <SearchWithSuggestion
      list={list}
      placeholder="Search for item"
      onItemSelect={action('item selected')}
    />
  ));
