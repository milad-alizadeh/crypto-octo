const api = require('binance');

const binanceRest = new api.BinanceRest({
  key: '5PdogNQ8KOtNFJC3ECQD8egAciSsO0jQWXfzg8slcjYzsaC9UsZxRyFtrJOT7Lr5', // Get this from your account on binance.com
  secret: 'pOCF2Dis6KnGKclRzx1Il39gDM4K6KREB1YIIdLBiTx0vWBRYMBfih6PkbceLjo2', // Same for this
  timeout: 15000, // Optional, defaults to 15000, is the request time out in milliseconds
  recvWindow: 10000, // Optional, defaults to 5000, increase if you're getting timestamp errors
  disableBeautification: false,
  /*
   * Optional, default is false. Binance's API returns objects with lots of one letter keys.  By
   * default those keys will be replaced with more descriptive, longer ones.
   */
  handleDrift: false
  /* Optional, default is false.  If turned on, the library will attempt to handle any drift of
   * your clock on it's own.  If a request fails due to drift, it'll attempt a fix by requesting
   * binance's server time, calculating the difference with your own clock, and then reattempting
   * the request.
   */
});

binanceRest.allOrders({
    symbol: 'BNBBTC' // Object is transformed into a query string, timestamp is automatically added
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
