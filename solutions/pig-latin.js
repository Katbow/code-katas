function pigIt(str) {
  var array = str.split(' ');
  var result = []
  for (var i in array) {
    result.push(pigLatinWord(array[i]));
  }
  return result.join(' ');
}

function pigLatinWord(string) {
  var arr = string.split('');
  arr.push(arr.shift());
  arr.push("ay")
  return arr.join('');
}

// console.log(pigLatinWord("Oink"));
console.log(pigIt('Pig latin is cool')); //returns 'igPay atinlay siay oolcay'
console.log(pigIt('This is my string')); //returns 'hisTay siay ymay tringsay'
