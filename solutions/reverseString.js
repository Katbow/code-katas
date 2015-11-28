String.prototype.reverse = function() {
  var answer = [];
  for (var i = this.length; i >= 0; i--) {
    answer.push(this.charAt(i));
  }

  return answer.join('');
}

console.log("This is a test".reverse());
