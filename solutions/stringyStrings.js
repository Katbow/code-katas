function stringy(size) {
  var string = "";
  for (var i = 0; i < size; i++) {
    string += i % 2 == 0 ? "1" : "0";
  }
  return string;
}

console.log(stringy(4));
console.log(stringy(3));
