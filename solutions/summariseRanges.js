function summaryRanges(nums) {
  if (nums.length == 0) { return nums; }

  var result = [], start = nums[0], end = nums[0], prev = nums[0];
  var addRange = function() {
    start === end ? result.push(String(end)) : result.push(join(start, end));
  }

  for (var i = 0; i < nums.length; i++) {
    var current = nums[i];
    var diff = current - prev;
    if (diff === 0) {
      continue;
    } else if (diff === 1) {
      end = current;
    } else if (diff > 1) {
      addRange();
      start = current;
      end = current;
    }
    prev = current;
  }
  addRange();
  return result;
}

function join(a, b) {
  return a + "->" + b;
}

console.log(summaryRanges([])); // []
console.log(summaryRanges([5])); // ['5']
console.log(summaryRanges([1, 1, 1, 1])); // ["1"]
console.log(summaryRanges([1,2,3,4])); // ['1->4']
console.log(summaryRanges([1,2,3,4,4])); // ['1->4']
console.log(summaryRanges([0, 1, 2, 3, 3, 3, 4, 5])) // ["0->5"]
console.log(summaryRanges([0, 1, 2, 5, 6, 9])); // ["0->2", "5->6", "9"]
console.log(summaryRanges([0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10])) // ["0->7","9->10"]
console.log(summaryRanges([-2, 0])); // ['-2', '0']
console.log(summaryRanges([-2,0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10, 12])) // ["-2", "0->7", "9->10", "12"]
