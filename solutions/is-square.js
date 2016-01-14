var isSquare = function(arr){
  if (arr.length == 0) return undefined;
  for (var i = 0; i < arr.length; i++) {
    if (Math.sqrt(arr[i]) % 1 != 0) return false;
  }
  return true;
}

console.log(isSquare([1, 2, 4, 11]));
console.log(isSquare([4, 16, 25]));
console.log(isSquare([]));
