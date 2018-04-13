import React from 'react';
import { storiesOf } from '@storybook/react';
import TableHolding from '.';

let tableData = [
  {
    name: 'Bitcoin',
    icon: 'https://www.cryptocompare.com/media/19633/btc.png',
    price: '$6,848.38',
    priceFlag: 1,
    change24: '3.75%',
    change24Flag: 1
  },
  {
    name: 'Ethereum',
    icon: 'https://www.cryptocompare.com/media/20646/eth_logo.png',
    price: '$380,24',
    priceFlag: 2,
    change24: '9.75%',
    change24Flag: 2
  },
  {
    name: 'Ripple',
    icon: 'https://www.cryptocompare.com/media/19972/ripple.png',
    price: '$0.06',
    priceFlag: 1,
    change24: '23.75%',
    change24Flag: 1
  },
  {
    name: 'Bitcoins',
    icon: 'https://www.cryptocompare.com/media/19633/btc.png',
    price: '$6,848.38',
    priceFlag: 1,
    change24: '3.75%',
    change24Flag: 1
  },
  {
    name: 'Ethereums',
    icon: 'https://www.cryptocompare.com/media/20646/eth_logo.png',
    price: '$380,24',
    priceFlag: 2,
    change24: '9.75%',
    change24Flag: 2
  },
  {
    name: 'Ripples',
    icon: 'https://www.cryptocompare.com/media/19972/ripple.png',
    price: '$0.06',
    priceFlag: 1,
    change24: '23.75%',
    change24Flag: 1
  }
];


storiesOf('Molecule - Table--Holding', module)
  .add('default', () => (
    <TableHolding data={data} />
  ));
