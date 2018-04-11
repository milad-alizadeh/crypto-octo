import React from 'react';
import { WatchlistTemplate, TablePrice } from 'components';
import io from 'socket.io-client';

//
// const Watchlist = () => (
//   <WatchlistTemplate
//     nav={<Navigation />}
//   />
// );

let tableData = [
  {
    name: 'Bitcoin',
    icon: 'https://www.cryptocompare.com/media/19633/btc.png',
    price: '$6,848.38',
    priceFlag: 1,
    totalValue: '$14,848.38',
    profitLoss: '$4,848.38',
    profitLossFlag: 2,
    change24: '3.75%',
    change24Flag: 1
  },
  {
    name: 'Ethereum',
    icon: 'https://www.cryptocompare.com/media/20646/eth_logo.png',
    price: '$380,24',
    priceFlag: 2,
    totalValue: '$6,842.14',
    profitLoss: '$1,342,00',
    profitLossFlag: 1,
    change24: '9.75%',
    change24Flag: 2
  },
  {
    name: 'Ripple',
    icon: 'https://www.cryptocompare.com/media/19972/ripple.png',
    price: '$0.06',
    priceFlag: 1,
    totalValue: '$842.14',
    profitLoss: '$1,342,00',
    profitLossFlag: 1,
    change24: '23.75%',
    change24Flag: 1
  },
  {
    name: 'Bitcoins',
    icon: 'https://www.cryptocompare.com/media/19633/btc.png',
    price: '$6,848.38',
    priceFlag: 1,
    totalValue: '$14,848.38',
    profitLoss: '$4,848.38',
    profitLossFlag: 2,
    change24: '3.75%',
    change24Flag: 1
  },
  {
    name: 'Ethereums',
    icon: 'https://www.cryptocompare.com/media/20646/eth_logo.png',
    price: '$380,24',
    priceFlag: 2,
    totalValue: '$6,842.14',
    profitLoss: '$1,342,00',
    profitLossFlag: 1,
    change24: '9.75%',
    change24Flag: 2
  },
  {
    name: 'Ripples',
    icon: 'https://www.cryptocompare.com/media/19972/ripple.png',
    price: '$0.06',
    priceFlag: 1,
    totalValue: '$842.14',
    profitLoss: '$1,342,00',
    profitLossFlag: 1,
    change24: '23.75%',
    change24Flag: 1
  }
];

let data = {
  card1: {
    heading: 'Currently Held Coins',
    component: <TablePrice data={tableData} />
  }
};

class Watchlist extends React.Component {
  componentDidMount() {
    //
    // const socket = io('wss://streamer.cryptocompare.com');
    // socket.emit('SubAdd', {
    //   subs: ['2~Coinbase~BTC~USD']
    // });
    //
    // socket.on('m', (e) => {
    //   console.log(e);
    // });

    console.log('did mount');
  }

  render() {
    return (
      <WatchlistTemplate data={data} />
    )
  }
}

export default Watchlist;
