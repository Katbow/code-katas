function deleteNth(arr, x) {
  var newList = [];
  for (var i = 0; i < arr.length; i++) {
    if (newList.filter(function(num){return num == arr[i]}).length < x) {
      newList.push(arr[i]);
    }
  }
  return newList;
}

// console.log(deleteNth([1,1,1,1],2)); // return [1,1]
// console.log(deleteNth([20,37,20,21],1)); // return [20,37,21]
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3)); // [1,1,3,3,7,2,2,2]
console.log(deleteNth([1,2,3,1,1,2,1,2,3,3,2,4,5,3,1], 3)); // [1,2,3,1,1,2,2,3,3,4,5]
