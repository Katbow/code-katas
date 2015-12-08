function twoDecimalPlaces(number) {
  number = number.toString();
  return +(number.substring(0, number.indexOf('.')));
};
