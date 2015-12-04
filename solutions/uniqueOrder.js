var uniqueInOrder = function(sequence) {
  if (typeof sequence === "string") { sequence = sequence.split(''); }

  var prev;
  var current;
  var answer = [];
  for (var i in sequence) {
    current = sequence[i];
    if (prev != current) {
      answer.push(current);
    }
    prev = current;
  }
  return answer;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'));         // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3]));       // [1,2,3]

// function lookSay(n) {
//   var digits = n.toString().split('');
//   var count = 0;
//   var prevDigit = digits[0];
//   var currentDigit;
//   var answer = "";
//
//   for (var i in digits) {//for each digit
//     currentDigit = digits[i];
//
//     if (prevDigit === currentDigit) {
//       count += 1;
//     } else {
//       answer += count;
//       answer += prevDigit;
//       count = 1;
//     }
//     prevDigit = currentDigit;
//   }
//
//   answer += count;
//   answer += currentDigit;
//   return answer;
// }
