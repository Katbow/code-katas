//var someString = "foo is an awesome foo bar foo foo";
//var replaced = somestring.replace(/foo/g, "bar").replace(/is/g, "or");
//var re = new RegExp("regex","g");
//"mystring".replace(re, "newstring");

var validWord = function(dictionary, word) {
  dictionary.sort();
  for (var i in dictionary) {
    var regex = new RegExp(dictionary[i],"g");
    word = word.replace(regex, "");
  }

  return word.length == 0;
};



// console.log(validWord(['code', 'wars'], 'codewars')); // true
// console.log(validWord(['code', 'wars'], 'codewar')); // false
// console.log(validWord(['code', 'wars'], 'code')); // true
console.log(validWord([ 'ab', 'a', 'bc' ], 'abc')) // true
