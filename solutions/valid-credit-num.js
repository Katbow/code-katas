function validate(n){

  var numbers = n.toString().split("").map(Number);

  for (var i = numbers.length - 2; i >= 0; i -= 2) {
    numbers[i] = numbers[i] * 2;

    if (numbers[i] > 9) {
      numbers[i] = numbers[i] - 9;
    }
  }

  var total = 0;
  for (var i in numbers) {
    total += numbers[i];
  }

  return total % 10 == 0;
}

validate(1714);
validate(981);

// alternate longer solution
// function validate(n){
//
//   var numbers = n.toString().split("").map(Number);
//   var doubleNums = numbers.slice();
//   var singleDigitNum = [];
//
//   if (numbers.length % 2 == 0) {
//     //double every other digit from the first
//     for (var i = 0; i < numbers.length; i+=2) {
//       doubleNums.push(numbers[i] * 2);
//     }
//     for (var j = 1; j < numbers.length; j+=2) {
//       console.log (numbers[j]);
//       doubleNums.push(numbers[j]);
//     }
//   } else {
//     //double every other digit from the second
//     for (var i = 1; i < numbers.length; i+=2) {
//       doubleNums.push(numbers[i] * 2);
//     }
//     for (var j = 0; j < numbers.length; j+=2) {
//       doubleNums.push(numbers[j]);
//     }
//   }
//
//   for (var i in doubleNums) {
//     if (doubleNums[i] > 9) {
//       singleDigitNum.push(doubleNums[i] - 9);
//
//     } else {
//       singleDigitNum.push(doubleNums[i]);
//     }
  }
