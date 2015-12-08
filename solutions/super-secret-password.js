var superSecretChars = [['a', 'A', '@'],['s', 'S', '$'],['o', 'O', '0'], ['h', 'H', '5'], ['x', 'X', '*']];
function createSSP(password){
  for(var i in superSecretChars) {
    var re = new RegExp(superSecretChars[i][0],"g");
    var reCaps = new RegExp(superSecretChars[i][1],"g");
    password = password.replace(re, superSecretChars[i][2]);
    password = password.replace(reCaps, superSecretChars[i][2]);
  }
  return password;
}

console.log(createSSP("haxorpassword"));
console.log(createSSP("HaxorPassword"));
