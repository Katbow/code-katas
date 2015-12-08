//var someString = "foo is an awesome foo bar foo foo";
//var replaced = somestring.replace(/foo/g, "bar").replace(/is/g, "or");
//var re = new RegExp("regex","g");
//"mystring".replace(re, "newstring");
var validWord = function(dictionary, word) {


  for (var i in dictionary) {
    var regex = new RegExp(dictionary[i],"g");
    word = word.replace(regex, "");
  }

  console.log(word);
  if (word.length == 0) {
    console.log (true);
  }
  else {
    console.log (false);
  }
};



validWord(['code', 'wars'], 'codewars');
validWord(['code', 'wars'], 'codewar');
validWord(['code', 'wars'], 'code');
