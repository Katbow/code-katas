function getBestWord(points, words) {
  var highestPoints = 0;
  var currentWord;
  var result;
  var totalPoints = 0;

  for (var i = 0; i < words.length; i++) { // for each word
    var letters = words[i].split('');
    currentWord = words[i];
    for (var j = 0; j < letters.length; j++) { //add the points for each letter
      totalPoints += points[letters[j].charCodeAt(0) - 65]
    }
    if (totalPoints > highestPoints) {
      result = i;
      highestPoints = totalPoints;
    } else if (totalPoints === highestPoints) {
      if (currentWord.length <= prevWord.length) {
        result = i;
      }
    }

    var prevWord = currentWord;
    totalPoints = 0;
  }

  return result;
}

var points = [1,3,3,2,1,4,2,4,1,8,10,1,2,1,1,3,8,1,1,1,1,4,10,10,10,10];
var simpleWords = ["WHO","IS","THE","BEST","OF","US"];
var rndmWords = ["NOQ","TXAY","S","OM","ESFT","CJUKQ","QL","QO","ASTK","Y"];

console.log(getBestWord(points, simpleWords));
console.log(getBestWord(points, rndmWords));
