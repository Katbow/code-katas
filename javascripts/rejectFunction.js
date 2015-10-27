function reject(array, iterator) {
  var result = [];
  for (var i in array) {
    if (iterator(array[i]) === false) {
      result.push(array[i]);
    }
  }
  return result;
}

function a(num) {
  return num % 2 === 0;
}

console.log(reject([1, 2, 3, 4], a));
