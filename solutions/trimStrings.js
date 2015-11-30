function trim(string, maxLength) {
  if (string.length <= maxLength) {
    return string;
  }

  if (string.length <= 3) {
    return string.substring(0, maxLength) + "...";
  }

  return string.substring(0, maxLength - 3) + "...";
}

console.log(trim("He", 1));
console.log(trim("Code Wars is pretty rad", 50));
console.log(trim("Creating kata is fun", 14));
