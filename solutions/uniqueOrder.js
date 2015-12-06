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
