import React from 'react';
import { storiesOf } from '@storybook/react';
import Navigation from '.';

let list = [
  {
    label: 'Dashboard',
    icon: 'monitor',
    to: '/',
    exact: true,
    activeClassName: 'current'
  },
  {
    label: 'Watchlist',
    icon: 'eye',
    to: '/watchlist',
    activeClassName: 'current'
  },
  {
    label: 'Settings',
    icon: 'cog',
    to: '/settings',
    activeClassName: 'current'
  }
];

storiesOf('Molecule - Navigation', module)
  .add('default', () => (
    <Navigation list={list} />
  ));
