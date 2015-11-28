function decimalPlaces(n) {
  //determine the number of decimal places in n
  if (isNan(n)) {
    return 0;
  }

  var num = n.toString().split('.');

  if (num.length == 1) {
    var exp = num[0].split('e-');
    return Number(exp[1]);
  }
  else if (num[1].search('e') >= 0){
    var both = num[1].split('e-');
    return both[0].length + Number(both[1]);
  }
  else {
    return num[1].length;
  }

  // if (num.split("e").length == 1) {
  //   return "confirmed";
  // }


  // if (num.search('.') == 0) {
  //   num.split('e-');
  //   return Number(num[1]);
  // }
  // else {
  //   var dec = num.split('.');
  //   if (dec[1].search('e') == -1) {
  //     return dec[1].length;
  //   }
  //   else {
  //     var newNum = dec[1].split('e');
  //     return newNum[0].length; + Number(newNum[1]);
  //   }
  // }
  console.log(num);



  // return 0;
}

console.log(decimalPlaces(3.14));
console.log(decimalPlaces(10.75e-21));
console.log(decimalPlaces(2.e-14));
// decimalPlaces(NaN);

// var num = n.toString().split(".");
// return num[1].length;
