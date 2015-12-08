function encode(string){
  var array = string.split('');
  for (var i in array) {
    if (array[i] === "a") {
      array.splice(i, 1, "1");
    } else if (array[i] === "e") {
      array.splice(i, 1, "2");
    } else if (array[i] === "i") {
      array.splice(i, 1, "3")
    } else if (array[i] === "o") {
      array.splice(i, 1, "4")
    } else if (array[i] === "u") {
      array.splice(i, 1, "5")
    }
  }
  return array.join('');
}

function decode(string){
  var array = string.split('');
  for (var i in array) {
    if (array[i] === "1") {
      array.splice(i, 1, "a");
    } else if (array[i] === "2") {
      array.splice(i, 1, "e");
    } else if (array[i] === "3") {
      array.splice(i, 1, "i")
    } else if (array[i] === "4") {
      array.splice(i, 1, "o")
    } else if (array[i] === "5") {
      array.splice(i, 1, "u")
    }
  }
  return array.join('');
}

console.log(encode("halo"));
console.log(decode("h1l4"));
