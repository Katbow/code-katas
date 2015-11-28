function sumStrings(a, b) {
  var sum = (+a + +b).toString();

  if (sum.length > 16) {
    sum = sum.replace(".", "");

    if (a.length > b.length) {
      b = padWithZeros(b, a.length);
    } else if (b.length > a.length) {
      a = padWithZeros(a, b.length);
    }
    var temp = (+a.substring(16) + +b.substring(16)).toString();

    if (temp.charAt(0) < 5) {
      sum = sum.replace(sum.substring(15), +sum.charAt(15)-1);
      sum = sum + temp;
    } else {
      sum = sum.substring(0, 17) + temp;
    }
  }
  return sum;
}

function padWithZeros(string, length) {
  while (string.length < length) {
      string = '0' + string;
  }
  return string;
}

console.log(sumStrings('50095301248058391139327916261', '81055900096023504197206408605'));

console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'));



  // if a || b.length > 16
  // add numbers together after index 17.
  // change to string.
  // replace string after e with sum from above
  // function toFixed(x) {
  //   if (Math.abs(x) < 1.0) {
  //     var e = parseInt(x.toString().split('e-')[1]);
  //     if (e) {
  //         x *= Math.pow(10,e-1);
  //         x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
  //     }
  //   } else {
  //     var e = parseInt(x.toString().split('+')[1]);
  //     if (e > 20) {
  //         e -= 20;
  //         x /= Math.pow(10,e);
  //         x += (new Array(e+1)).join('0');
  //     }
  //   }
  //   return x.toString();
  // }
