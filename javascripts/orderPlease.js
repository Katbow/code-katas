//this starts with finding index of num, then sorting
/*function order(words) {
  for (var num = 1; num < 10; num ++) {
    if (words.search(num) == -1) {
      return false;
    }
    else {
      console.log (words.search(num));
    }
    }
};*/

order('t3st th1s i2');
order("4of Fo1r pe6ople g3ood th5e the2")
order("")

//this starts with splitting into an array, finding the num in each element,
//then sorting elements by num and putting back into a string

function order(s) {
  var words = s.split(' ');
  var orderedWords = [];

  for (var num = 1; num <= words.length; num++) {
    // console.log(num, words[i], words[i].search(num));
    for (var i in words) { // for each word
      if (words[i].search(num) >= 0) {
        orderedWords.push(words[i]);
      }
    }
  }

  console.log(orderedWords.join(' '));
  //console.log(orderedWords);
};
