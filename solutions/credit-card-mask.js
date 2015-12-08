// return masked string
function maskify(cc) {
  if (cc.length < 4) {
    return cc;
  } else {
    var unmaskedNums = cc.substr(cc.length - 4, cc.length);
    var maskedNums = Array(cc.length - 3).join("#");
    return maskedNums + unmaskedNums;
  }
}

console.log(maskify('4556364607935616'));
