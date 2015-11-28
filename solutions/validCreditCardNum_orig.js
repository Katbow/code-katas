function validate(n){

  var numbers = n.toString().split("").map(Number);
  var doubleNums = numbers.slice();
  var singleDigitNum = [];

  if (numbers.length % 2 == 0) {
    //double every other digit from the first
    for (var i = 0; i < numbers.length; i+=2) {
      doubleNums.push(numbers[i] * 2);
    }
    for (var j = 1; j < numbers.length; j+=2) {
      console.log (numbers[j]);
      doubleNums.push(numbers[j]);
    }
  } else {
    //double every other digit from the second
    for (var i = 1; i < numbers.length; i+=2) {
      doubleNums.push(numbers[i] * 2);
    }
    for (var j = 0; j < numbers.length; j+=2) {
      doubleNums.push(numbers[j]);
    }
  }

  for (var i in doubleNums) {
    if (doubleNums[i] > 9) {
      singleDigitNum.push(doubleNums[i] - 9);

    } else {
      singleDigitNum.push(doubleNums[i]);
    }
  }

  var total = 0;
  for (var i in singleDigitNum) {
    total += singleDigitNum[i];
  }

  if (total % 10 == 0) {
    console.log(true);
  } else {
    console.log(false);
  }


  console.log(numbers);
  console.log(doubleNums);
  console.log(singleDigitNum);
  console.log(total);

}

//validate(1714);
validate(891);
