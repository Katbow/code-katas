function summaryRanges(nums) {
  if (nums.length == 0) { return nums; }
  var prevNum = nums[0];
  var currentNum;
  var temp = [nums[0]];
  for (var i = 1; i < nums.length; i++) {
    currentNum = nums[i];
    if (prevNum + 1 != currentNum && currentNum != prevNum) {
      temp.push(prevNum);
      temp.push(currentNum);
    } else if (i == nums.length - 1 && currentNum != prevNum) {
      temp.push(currentNum);
    }
    prevNum = currentNum;
  }

  var result = [];
  var j = 1;
  // TODO: add "->" in correct places.
  if (temp.length == 1) {
    result.push(temp[0].toString());
  } else if (temp.length == 2) {
    result.push(join(temp[0], temp[1]));
  } else if (temp.length > 2) {
    for (var i = 0; i < temp.length; i+=2) {
      result.push(join(temp[i], temp[j]));
      j += 2;
      if (temp[j] == undefined) {
        result.push(temp[temp.length -1].toString());
        break;
      }
    }

  }

  return result;
}

function join(a, b) {
  return a + "->" + b;
}

console.log(summaryRanges([1,2,3,4])); // ['1->4']
console.log(summaryRanges([0, 1, 2, 5, 6, 9])); // ["0->2", "5->6", "9"]
console.log(summaryRanges([1, 1, 1, 1])); // [1]
