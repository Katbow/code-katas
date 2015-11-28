Guesser.prototype.getNumber = function() {
  var max = 1000;
  var min = 1;

  while (min < max) {
    var mid = Math.round((max + min) /2);
    var result = this.guess(mid);
    if (result === "Correct!") {
      return mid;
    } else if (result === "Too high!") {
      max = mid;
    } else if (result === "Too low!") {
      min = mid;
    }
  }
}
