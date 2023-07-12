export function customFormatNumber(num) {
  const number = num;
  const convertedNumber = (number * 100000000).toFixed(5);
  return "$0.0₉" + convertedNumber.slice(3, 10);
}

export function customFormatDigits(num) {
  let rawValue = num;
  let MARKET_CAP = new Intl.NumberFormat().format(parseFloat(rawValue?.toFixed(2)));
  return MARKET_CAP;
}
