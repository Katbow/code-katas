function sumFromString(str){
  var nums = str.match( /\d+/g);
  if (nums === null) { return 0; }

  return nums.map(function(n) {
    return Number(n);
  }).reduce(function(a, b) {
    return a + b;
  });
}

console.log(sumFromString("In 2015, I want to know how much does iPhone 6+ cost?"));
console.log(sumFromString("Hello World"));
