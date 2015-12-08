// g (integer >= 2) which indicates the gap we are looking for
// m (integer >= 2) which gives the start of the search (m inclusive)
// n (integer >= m) which gives the end of the search (n inclusive)
function gap(g, m, n) {
  for (var i = m; i <= n; i++) {
    if (isPrime(i) && isPrime(i + g) && checkBetween(i + 1, (i + g))) {
      return [i, i + g]
    }
  }
  return null;
}

function checkBetween(a, b) {
  var count = 0;
  for (var i = a; i < b; i++) {
    if (isPrime(i)) { count ++; }
  }
  return count === 0;
}

function isPrime(number) {
  var start = 2;
  while (start <= Math.sqrt(number)) {
    if (number % start++ < 1) return false;
  }
  return number > 1;
}

console.log(gap(2,100,110));  //, [101, 103]
// console.log(gap(4,100,110));  //, [103, 107]
// console.log(gap(6,100,110));  // , null
// console.log(gap(8,300,400));  // , [359, 367]
// console.log(gap(10,300,400)); // , [337, 347]
