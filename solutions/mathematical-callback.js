//var myArray = [4, 8, 2, 7, 5];
//myArray = processArray(myArray,function (a) {
//  return a * 2;
//}); myArray = arr? a = callback?
function a(num) {
  return num * 2;
}

function b(num) {
  return num + 5
}

function processArray(arr, callback) {
    var newArr = [];
    for ( var i in arr ) {
      newArr.push(callback(arr[i]))
    };
    return newArr;
}

console.log(processArray([4, 8, 2, 7, 5],a));
console.log(processArray([4, 8, 2, 7, 5],b));
