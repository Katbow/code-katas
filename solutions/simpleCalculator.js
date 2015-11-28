var Calculator = {
  add : function(n1, n2) {
    return n1 + n2;
  },
  subtract : function(n1, n2) {
    return n1 - n2;
  },
  multiply : function(n1, n2) {
    return n1 * n2;
  },
  divide : function(n1, n2) {
    if (n2 === 0) {
      return false;
    } else {
      return n1 / n2;
    }
  }
};

console.log(Calculator.add(1, 2));
console.log(Calculator.subtract(5, 1));
console.log(Calculator.multiply(2, 5));
console.log(Calculator.divide(9, 0));
console.log(Calculator.divide(0, 9));
