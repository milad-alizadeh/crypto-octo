import React from 'react';
import { WatchlistTemplate, Navigation } from 'components';
import io from 'socket.io-client';

//
// const Watchlist = () => (
//   <WatchlistTemplate
//     nav={<Navigation />}
//   />
// );

class Watchlist extends React.Component {
  componentDidMount() {

    const socket = io('wss://streamer.cryptocompare.com');
    socket.emit('SubAdd', {
      subs: ['2~Coinbase~BTC~USD']
    });

    socket.on('m', (e) => {
      console.log(e);
    });

    console.log('did mount');
  }

  render() {

    return (
      <div>Hello</div>
    )
  }
}

export default Watchlist;
