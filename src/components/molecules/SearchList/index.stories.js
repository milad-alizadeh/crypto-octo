import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchList from '.';

const arrayList = [
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

const objectList = {
  32: {
    label: 'john'
  },
  34: {
    label: 'Jack'
  },
  36: {
    label: 'john'
  },
  39: {
    label: 'Matt'
  },
  333: {
    label: 'Chloe'
  },
  423: {
    label: 'Sara'
  },
  3242: {
    label: 'Sam'
  }
};

storiesOf('Molecule - SearchList', module)
  .add('default - array list', () => (
    <SearchList
      list={arrayList}
      onItemHover={action('hover')}
      onItemClick={action('click')}
    />
  ))
  .add('default - object list', () => (
    <SearchList
      list={objectList}
      onItemHover={action('hover')}
      onItemClick={action('click')}
    />
  ));
