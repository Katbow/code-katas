MORSE_CODE = [ '-.-.--': '!',
'.-..-.': '"',
'...-..-': '$',
'.-...': '&',
'.----.': '\'',
'-.--.': '(',
'-.--.-': ')',
'.-.-.': '+',
'--..--': ',',
'-....-': '-',
'.-.-.-': '.',
'-..-.': '/',
'-----': '0',
'.----': '1',
'..---': '2',
'...--': '3',
'....-': '4',
'.....': '5',
'-....': '6',
'--...': '7',
'---..': '8',
'----.': '9',
'---...': ':',
'-.-.-.': ';',
'-...-': '=',
'..--..': '?',
'.--.-.': '@',
'.-': 'A',
'-...': 'B',
'-.-.': 'C',
'-..': 'D',
'.': 'E',
'..-.': 'F',
'--.': 'G',
'....': 'H',
'..': 'I',
'.---': 'J',
'-.-': 'K',
'.-..': 'L',
'--': 'M',
'-.': 'N',
'---': 'O',
'.--.': 'P',
'--.-': 'Q',
'.-.': 'R',
'...': 'S',
'-': 'T',
'..-': 'U',
'...-': 'V',
'.--': 'W',
'-..-': 'X',
'-.--': 'Y',
'--..': 'Z',
'..--.-': '_',
'...---...': 'SOS' ]

// a single space is used to separate the character codes
// 3 spaces are used to separate words
decodeMorse = function(morseCode) {
  var morseWords = morseCode.split('   ');
  var morseLetters;
  var decodedLetters = [];
  var decodedWords = [];
  for (var i = 0; i < morseWords.length; i++) {
    morseLetters = morseWords[i].split(' ');
    for (var j = 0; j < morseLetters.length; j++) {
      decodedLetters.push(MORSE_CODE[morseLetters[j]]);
    }
    decodedWords.push(decodedLetters.join(''));
    decodedLetters = [];
  }
  return decodedWords.join(' ').trim();
}
console.log(decodeMorse("···· · −·−−   ·−−− ··− −·· ·")); // 'HEY JUDE'
