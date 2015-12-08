function isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}

function getPrimes(start, finish) {
  var primeNums = [];
  if (start > finish) {
    var tmp = start, start = finish, finish = tmp;
  }
  for (var num = start; num <= finish; num ++) {
    if (isPrime(num)) {
      primeNums.push(num)
    }
  }
  return primeNums;
}

isPrime(0) //false
getPrimes(0, 30) // [2,3,5,7,11,13,17,19,23,29]
getPrimes(30, 0) // [2,3,5,7,11,13,17,19,23,29]
