function validParentheses(parens){
  if (parens.length % 2 != 0 ||
      parens.charAt(0) == ")" ||
      parens.charAt(parens.length - 1) == "(") {
    return false;
  }

  var count = 0;
  for (var i = 0; i < parens.length; i++) {
    if (count < 0) {
      return false;
    }
    if (parens.charAt(i) == "(") {
      count += 1;
    }
    else if (parens.charAt(i) == ")") {
      count -= 1;
    }
  }

  return count == 0;
}

console.log(validParentheses( "()" ));
console.log(validParentheses( "())" ));
console.log(validParentheses( ")(" ));
console.log(validParentheses( "()((" ));
console.log(validParentheses( ")(()" ));
console.log(validParentheses( "(((((((())))))))" ));
