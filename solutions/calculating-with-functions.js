//This time we want to write calculations using
//functions and get the results.
function calculate(num, arr) {
  var operator = arr[0];
  var operand = arr[1];
  if (operator === '+') {
    return num + operand;
  } else if (operator === '-') {
    return num - operand;
  } else if (operator === '*') {
    return num * operand;
  } else if (operator === '/') {
    return num / operand;
  }
}

function zero(arr) {
  if (arr === undefined) {
    return 0;
  } else {
    return calculate(0, arr);
  }
}

function one(arr) {
  if (arr === undefined) {
    return 1;
  } else {
    return calculate(1, arr);
  }
}

function two(arr) {
  if (arr === undefined) {
    return 2;
  } else {
    return calculate(2, arr);
  }
}

function three(arr) {
  if (arr === undefined) {
    return 3;
  } else {
    return calculate(3, arr);
  }
}

function four(arr) {
  if (arr === undefined) {
    return 4;
  } else {
    return calculate(4, arr);
  }
}

function five(arr) {
  if (arr === undefined) {
    return 5;
  } else {
    return calculate(5, arr);
  }
}

function six(arr) {
  if (arr === undefined) {
    return 6;
  } else {
    return calculate(6, arr);
  }
}

function seven(arr) {
  if (arr === undefined) {
    return 7;
  } else {
    return calculate(7, arr);
  }
}

function eight(arr) {
  if (arr === undefined) {
    return 8;
  } else {
    return calculate(8, arr);
  }
}

function nine(arr) {
  if (arr === undefined) {
    return 9;
  } else {
    return calculate(9, arr);
  }
}

function plus(num) {
  return ['+', num];
}

function minus(num) {
  return ['-', num];
}

function times(num) {
  return ['*', num];
}

function dividedBy(num) {
  return ['/', num];
}

console.log(seven(times(five()))); //return 35
console.log(four(plus(nine()))); //return 13
console.log(eight(minus(three()))); //return 5
console.log(six(dividedBy(two()))); //return 3
