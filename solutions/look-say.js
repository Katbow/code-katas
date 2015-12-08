function getLines(lineCount){
  if (lineCount <= 0 || isNaN(lineCount)) {
    return -1;
  }

  var sequence = ['1'];

  for (var i = 0; sequence.length < lineCount; i++) {
    sequence.push(lookSay(sequence[i]));
  }

  return sequence.join(',');
}

function lookSay(n) {
  var digits = n.toString().split('');
  var count = 0;
  var prevDigit = digits[0];
  var currentDigit;
  var answer = "";

  for (var i in digits) {//for each digit
    currentDigit = digits[i];

    if (prevDigit === currentDigit) {
      count += 1;
    } else {
      answer += count;
      answer += prevDigit;
      count = 1;
    }
    prevDigit = currentDigit;
  }

  answer += count;
  answer += currentDigit;
  return answer;
}

console.log(getLines(10));
