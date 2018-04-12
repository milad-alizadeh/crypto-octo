import React from 'react';
import { storiesOf } from '@storybook/react';
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
  }
];

storiesOf('Molecule - SearchWithSuggestion', module)
  .add('default', () => (
    <SearchWithSuggestion
      list={list}
      placeholder="Search for item"
    />
  ));
