function sumCircles() {
  var totalArea = 0;
  for (var i = 0; i < arguments.length; i++) {
    totalArea += Math.PI * Math.pow(arguments[i] / 2, 2);
  }
  return "We have this much circle: " + Math.round(totalArea);
}

console.log(sumCircles(2));
console.log(sumCircles(2, 3, 4));
console.log(sumCircles(1, 1, 1)); // return , 'We have this much circle: 2'
console.log(sumCircles(13.58, 14.9, 56.99, 107.321));
