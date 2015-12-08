//calc the sum of each digit to the power of the number of digits in the value
function narcissistic( value ) {
  var digitAmount = value.toString().length;
  var answer = 0;
  for (var i = 0; i < digitAmount; i++) {
    answer += Math.pow(Number(value.toString()[i]), digitAmount);
  }
  return answer === value;
}

console.log(narcissistic(7));
console.log(narcissistic(152));
console.log(narcissistic(1634));
