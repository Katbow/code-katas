function toWeirdCase(string){
  var words = string.split(' ');

//replaceAt function from:
//http://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript

  String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
  }

  for (var i in words) {
     for (var j = 0; j < words[i].length; j += 2) {
       var capLetter = words[i].charAt(j).toUpperCase();
       words[i] = words[i].replaceAt(j, capLetter);
     }
  }

  console.log(words = words.join(' '));
}

//test cases
//toWeirdCase('This'); //returns 'ThIs'
//toWeirdCase('is'); //returns 'Is'
//toWeirdCase('This is a test'); //returns ThIs Is A TeSt'

toWeirdCase('Looks') //returns 'LOokS'
toWeirdCase('Looks like you passed') //returns 'LOokS LiKe YoU PaSsEd'
toWeirdCase('Just kidding') //returns JuSt KIDdinG
  /*for (var i in words) {
    var temp_word = [];
    for (var j in words[i]) {
      var c = '';
      if (j % 2 == 0) {
        c = words[i][j].toUpperCase();
      } else {
        c = words[i][j].toLowerCase();
      }
      temp_word.push(c);
    }
  }
    words[i] = temp_word.join(''); */
