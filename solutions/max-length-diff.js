function mxdiflg(arr1, arr2) {
  if (arr1.length == 0 || arr2.length == 0) { return -1; };
  var diffA = maxLen(arr1) - minLen(arr2), diffB = maxLen(arr2) - minLen(arr1);
  return diffA > diffB ? diffA : diffB;
}

function maxLen(array) {
  return array.sort(function (a, b) { return b.length - a.length; })[0].length;
}

function minLen(array) {
  return array.sort(function (a, b) { return a.length - b.length;})[0].length;
}

s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
console.log(mxdiflg(s1,s2)); // 13
