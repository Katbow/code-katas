function christmasTree(height) {
  var spacesCount = height;
  var starCount = 2;
  var tree = [];
  for (var i = tree.length; i < height; i++) {
    tree.push(Array(spacesCount).join(" ") + Array(starCount).join('*') + Array(spacesCount).join(" "));
    spacesCount -= 1;
    starCount += 2;
  }
  return tree.join("\n");
}

console.log(christmasTree(5));
