function checkRoot(string) {
  var arr = string.split(",");
  if (arr.length != 4) {return "incorrect input"}
  var prod = 1;
  var firstNum = Number(arr[0]);
  for (var i in arr) {
    var num = Number(arr[i]);
    if (isNaN(num)) return "incorrect input";
    if (firstNum + Number(i) != num) return "not consecutive";
    prod = prod * num;
  }
  var perfSquare = prod + 1;
  return perfSquare + ", " + Math.sqrt(perfSquare);
};

console.log(checkRoot("1,2,3,4"));
console.log(checkRoot("4,5,6,7"));
console.log(checkRoot("1,2,3,4,5"));
console.log(checkRoot("1,2,3"));
console.log(checkRoot('3,s,5,6'));
console.log(checkRoot('11,13,14,15'));
