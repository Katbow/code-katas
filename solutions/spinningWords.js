function spinWords(str){
  var words = str.split(' ');
  var spunWords = [];
  for (var i in words) {
    if (words[i].length < 5) {
      spunWords.push(words[i]);
    } else {
      spunWords.push(words[i].split('').reverse().join(''));
    }
  }
  return spunWords.join(' ');
}

console.log(spinWords("Hey fellow warriors"));
