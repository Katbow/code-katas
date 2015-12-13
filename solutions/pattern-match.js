function wordPattern(pattern, words) {
  words = words.split(' ');
  pattern = pattern.split('');

  if (pattern.length !== words.length) { return false; }

  var dictionary = {};
  for (var i = 0; i < pattern.length; i++) {
    if (dictionary.hasOwnProperty(pattern[i])) {
      if (dictionary[pattern[i]] !== words[i]) { return false; }
    } else {
      dictionary[pattern[i]] = words[i];
    }
  }

  for (var i = 1; i < Object.keys(dictionary).length; i++) {
    if (dictionary[Object.keys(dictionary)[0]] == dictionary[Object.keys(dictionary)[i]]) {return false}
  }

  return true;
}

console.log(wordPattern("abab", "cat dog cat dog"));
console.log(wordPattern("abab", "cat cat dog dog"));
console.log(wordPattern("abba", "dog dog dog dog"));
console.log(wordPattern("xyzzyx", "1 2 3 3 2 1"));
