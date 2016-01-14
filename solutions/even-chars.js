function evenChars(string) {
  if (string.length < 2 || string.length > 100) return "invalid string"
  var evenCharArr = [];
  for (var i = 1; i < string.length; i += 2) evenCharArr.push(string[i]);
  return evenCharArr;
}

console.log(evenChars("codewars")); // ['c', 'd', 'w', 'r']
console.log(evenChars("h")); // 'invalid string'
