sequence = function(n) {
  var sequence = [];
  var num = 0;
  for (var i = 0; i < n * n; i++) {
    var sign = "+";
    sequence.push(sign);
  }
  return sequence;
}

console.log(sequence(2));


snail = function(array) {
  if (array.length <= 1) {
    return array[0];
  }

  addOne = function(num) {
    //adds ones in the pattern
    return num += 1;
  }

  addLength = function(num) {
    //adds array.length
    return num += array.length;
  }

  minusOne = function(num) {
    //minuses one
    return num -= 1;
  }

  minusLength = function(num) {
    return num -= array.length;
  }

  var result = []



  return result;
}

console.log(snail([[1, 2], [1, 2]]));
console.log(snail([[1,2,3], [1,2,3], [1,2,3]]));
// console.log(snail([
  // [1,2,3,4,5],
  // [1,2,3,4,5],
  // [1,2,3,4,5],
  // [1,2,3,4,5],
  // [1,2,3,4,5]])
// );
