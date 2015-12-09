// function solution(string) {
//   var words = string.match(/[A-Z][a-z]+/g);
//   console.log(words);
//   var result = [words[0]];
//
//   for (var i = 1; i < words.length; i++) {
//     result.push(words[i].replace(words[i].charAt(0), words[i].charAt(0).toUpperCase()));
//   }
//   return result.join(' ');
// }

function solution(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1 $2");
}

// function replacer(match) { return ' ' + match }
// str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
console.log(solution("camelCase"));
console.log(solution("camelCaseTest"));
