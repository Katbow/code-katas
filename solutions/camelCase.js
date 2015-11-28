function toCamelCase(str){
  var words = str.split(/-|_/g);
  var result = [words[0]];

  for (var i = 1; i < words.length; i++) {
    result.push(words[i].replace(words[i].charAt(0), words[i].charAt(0).toUpperCase()));
  }
  return result.join('');
}

console.log(toCamelCase("the-stealth-warrior")); // "theStealthWarrior"
console.log(toCamelCase("The_stealth_warrior")); // "TheStealthWarrior"
