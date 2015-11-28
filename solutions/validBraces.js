function validBraces(braces){
  // given a string of braces - (), [], or {} - return if they are valid or not
  var firstChar = braces.charAt(0);
  var lastChar = braces.charAt(braces.length - 1);

  if (firstChar === ")" ||
      firstChar === "]" ||
      firstChar === "}" ||
      lastChar === "(" ||
      lastChar === "[" ||
      lastChar === "{" ||
      braces.length % 2 !== 0) {
        return false;
  }

  var countParens = 0;
  var countBrackets = 0;
  var countBraces = 0;


  for (var i = 0; i < braces.length; i++) {
    var currentChar = braces.charAt(i);
    if (countParens < 0 || countBrackets < 0 || countBraces < 0) {
      return false;
    }
    if (currentChar === "(") {
      countParens += 1;
    } else if (currentChar === ")") {
      countParens -= 1;
    } else if (currentChar === "[") {
      countBrackets += 1;
    } else if (currentChar === "]") {
      countBrackets -= 1;
    } else if (currentChar === "{") {
      countBraces += 1;
    } else if (currentChar === "}") {
      countBraces -= 1;
    }
    var prevChar = currentChar;
  }

  if (countParens > 0 || countBrackets > 0 || countBraces > 0) {
    return false;
  }

  return true;
}

console.log(validBraces("()")); // true
console.log(validBraces("[]")); // true
console.log(validBraces("{}")); // true
console.log(validBraces("(){}[]")); // true
console.log(validBraces("([{}])")); // true
console.log(validBraces("{}({})[]")); // true
console.log(validBraces("({})[({})]")); // true
console.log(validBraces("(({{[[]]}}))")); // true
console.log(validBraces("(}")); // false
// console.log(validBraces("[(])")); // false
console.log(validBraces("(})")); // false
console.log(validBraces(")(}{][")); // false
console.log(validBraces("())({}}{()][][")); //false
console.log(validBraces("(((({{")); // false
console.log(validBraces("}}]]))}])")); // false
