function getEvenNumbers(numbersArray){
  var answer = []
  for (var i in numbersArray) {
    if (numbersArray[i] % 2 === 0) {
      answer.push(numbersArray[i]);
    }
  }
  return answer;
}

console.log(getEvenNumbers([2,4,5,6]));
