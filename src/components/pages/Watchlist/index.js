import React from 'react';
import { WatchlistTemplate, TableWatchlist } from 'components';
import io from 'socket.io-client';
import { CoinSearch, WatchlistTable } from 'containers';

let data = {
  card1: {
    heading: 'Search for coins',
    component: <CoinSearch />
  },
  card2: {
    heading: 'Currently Held Coins',
    component: <WatchlistTable />
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
    //
    // console.log('did mount');
  }

  render() {
    return (
      <WatchlistTemplate data={data} />
    );
  }
}

export default Watchlist;
