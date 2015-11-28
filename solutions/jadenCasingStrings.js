String.prototype.toJadenCase = function () {
  var words = this.split(' ');

  String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
  }

  for (var i = 0; i < words.length; i++) { //for each word
    words[i] = words[i].replaceAt(0, words[i].charAt(0).toUpperCase());
  }

  return words.join(' ');
};
