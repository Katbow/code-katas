function XO(str) {
  str = str.toUpperCase();
  var X = 0;
  var O = 0;

  for (var i in str) {
    if (str.charAt(i) === "X") {
      x += 1;
    } else if (str.charAt(i) === "O") {
      o += 1;
    }
  }
  return x === o;
}
