var nbrOfLaps = function(lapALen, lapBLen) {
  var lcm = lowestCommonMultiple(lapALen, lapBLen);
  return [lcm / lapALen, lcm / lapBLen];
}

function greatestCommonDivisor(a, b) {
  if (b === 0) return a;
  return greatestCommonDivisor(b, a % b);
}

function lowestCommonMultiple(a, b) {
  return Math.abs(a * b) / greatestCommonDivisor(a, b);
}

//[numLapsA, numLapsB]
console.log(nbrOfLaps(3, 5));
console.log(nbrOfLaps(4, 6));
console.log(nbrOfLaps(3, 9));
console.log(nbrOfLaps(5, 5));
