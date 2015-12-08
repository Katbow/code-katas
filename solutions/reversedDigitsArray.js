function digitize(n) {
  var reversedDigits = [], n = n.toString();
  for (var i = n.length - 1; i >= 0; i--) {
    reversedDigits.push(+(n[i]));
  }
  return reversedDigits;
}

console.log(digitize(35231)); // [1,3,2,5,3]
