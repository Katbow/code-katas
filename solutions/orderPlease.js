function order(s) {
  var words = s.split(' ');
  var orderedWords = [];

  for (var num = 1; num <= words.length; num++) {
    for (var i in words) {
      if (words[i].search(num) >= 0) {
        orderedWords.push(words[i]);
      }
    }
  }

  return orderedWords.join(' ');

};

order('t3st th1s i2');
order("4of Fo1r pe6ople g3ood th5e the2")
order("")
