function countBy(x, n) {
  var count = x;
  var answer = [];
  for (var i = 0; i < n; i ++) {
    answer.push(count);
    count += x;
  }
  return answer;
}

console.log(countBy(2, 5));
console.log(countBy(1, 10));
