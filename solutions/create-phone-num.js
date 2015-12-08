function createPhoneNumber(numbers){
  var phoneStr = numbers.join('');
  console.log(phoneStr);

  phoneStr = "(" + phoneStr;
  console.log(phoneStr);
  phoneStr = phoneStr.slice(0, 4) + ") " + phoneStr.slice(4);
  console.log(phoneStr);
  phoneStr = phoneStr.slice(0, 9) + "-" + phoneStr.slice(9);
  console.log(phoneStr);
};

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
