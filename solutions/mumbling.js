function accum(str) {
	var letters = str.split('');
  var result = [];
  for (var i = 0; i < letters.length; i++) {
    result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }
  return result.join('-');
}

console.log(accum("abcd")); //"A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); //"R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt")); //"C-Ww-Aaa-Tttt"
