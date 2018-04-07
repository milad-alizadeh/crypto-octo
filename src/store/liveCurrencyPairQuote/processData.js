import responseMap from './response-map';

export function getCurrencyPair(data, fsym, tsym) {
  let coinfsym = responseMap.STATIC.CURRENCY.getSymbol(fsym);
  let cointsym = responseMap.STATIC.CURRENCY.getSymbol(tsym);
  let incomingTrade = responseMap.TRADE.unpack(data);;
  console.log(incomingTrade);
  // let newTrade = {
  //   Market: incomingTrade.M,
  //   Type: incomingTrade.T,
  //   ID: incomingTrade.ID,
  //   Price: responseMap.convertValueToDisplay(cointsym, incomingTrade.P),
  //   Quantity: responseMap.convertValueToDisplay(coinfsym, incomingTrade.Q),
  //   Total: responseMap.convertValueToDisplay(cointsym, incomingTrade.TOTAL)
  // };
  //
  // if (incomingTrade['F'] & 1) {
  //   newTrade['Type'] = "SELL";
  // } else if (incomingTrade['F'] & 2) {
  //   newTrade['Type'] = "BUY";
  // } else {
  //   newTrade['Type'] = "UNKNOWN";
  // }
  //
  // console.log(newTrade);
}
