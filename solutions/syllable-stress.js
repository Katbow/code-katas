function stress(word) {
  var chars = word.split('');
  var letters = [];
  var num = [];
  for (var i in chars) {
    if (isNaN(+(chars[i]))) {
      letters.push(chars[i]);
    } else {
      num.push(chars[i]);
    }
  }
  num = +(num.join(''));
  letters = letters.join('');
  if (num < 3 || num > 11) { return "invalid word"; }

  var ante = { ty: "ty", al: "al", ise: "ise", ate: "ate"};
  var pen = { ic: "ic", sion: "sion", tion: "tion", ious: "ious" };
  var result = "";
  if (ante.hasOwnProperty(letters)) {
    return result += (num-2) + "ante-pen";
  } else if (pen.hasOwnProperty(letters)) {
    return result += (num - 1) + "pen";
  } else { return "invalid word"; }
}

console.log(stress("5ty"));
console.log(stress("3ty"));
console.log(stress("6sion"))
// function GrεεκL33t(str){
//   var result = "";
//   for (var i in str) {
//     var letter = str[i].toLowerCase();
//     result += greekLeetLetters.hasOwnProperty(letter) ? greekLeetLetters[letter] : letter;
//   }
//   return result;
// }
