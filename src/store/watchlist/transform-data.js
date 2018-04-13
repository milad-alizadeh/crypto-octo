export default function (inputData, params, tsym) {
  let displayData = inputData.DISPLAY[params.Name][tsym];
  let rawData = inputData.RAW[params.Name][tsym];
  let baseImageUrl = 'https://www.cryptocompare.com';

  return {
    symbol: params.Name,
    change24h: displayData.CHANGE24HOUR,
    changePct24h: displayData.CHANGEPCT24HOUR,
    coinName: params.FullName,
    flag: rawData.FLAGS,
    img: baseImageUrl + params.ImageUrl,
    marketCap: displayData.MKTCAP,
    price: displayData.PRICE,
    volume24h: displayData.TOTALVOLUME24HTO
  };
}
