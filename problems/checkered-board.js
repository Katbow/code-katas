// Write a function which takes one parameter representing the dimensions of a checkered board. The board will always be square, so 5 means you will need a 5x5 board.
//
// The dark squares will be represented by a unicode white square, while the light squares will be represented by a unicode black square (the opposite colours ensure the board doesn't look reversed on code wars' dark background). It should return a string of the board with a space in between each square and taking into account new lines.
//
// An even number should return a board that begins with a dark square. An odd number should return a board that begins with a light square.
//
// If the number is less than 2, or if the parameter is not a number, return false.
//
// Examples:
//
// ```javascript
// checkeredBoard(5)
// ```
// returns the string
// ```
// □ ■ □ ■ □
// ■ □ ■ □ ■
// □ ■ □ ■ □
// ■ □ ■ □ ■
// □ ■ □ ■ □
// ```
//
// There should be no trailing white space at the end of each line.

function checkeredBoard(dimension) {
  if (dimension < 2 || isNaN(dimension)) { return false; }

  var square = { light: "\u25A0", dark: "\u25A1" };
  var primaryColour = dimension % 2 == 0 ? "dark" : "light";
  var secondaryColour = primaryColour === "light" ? "dark" : "light";

  function row() {
    var row = [];
    for (var i = 0; i < dimension; i++) {
      if (i % 2 == 0) {
        row.push(square[primaryColour]);
      } else {
        row.push(square[secondaryColour]);
      }
    }
    return row.join(" ");
  }

  var board = [];

  for (var i = 0; i < dimension; i++) {
    if (i % 2 == 0) {
      board.push(row(dimension, primaryColour));
    } else {
      board.push(row(dimension, secondaryColour));
    }
    var tmp = primaryColour, primaryColour = secondaryColour, secondaryColour = tmp;
  }
  return board.join("\n");
}


console.log(checkeredBoard(7));
console.log(checkeredBoard(4));

// Test.describe("checkeredBoard", function(){
//   Test.it ("returns false when dimension < 2", function(){
//     Test.assertEquals(checkeredBoard(1), false);
//     Test.assertEquals(checkeredBoard(0), false);
//     Test.assertEquals(checkeredBoard(-1), false);
//   });
//
//   Test.it ("returns false when dimension is NaN", function(){
//     Test.assertEquals(checkeredBoard("test"), false);
//     Test.assertEquals(checkeredBoard(NaN), false);
//     Test.assertEquals(checkeredBoard([]), false);
//   });
//
//   Test.it ("returns correct board for odd dimensions", function(){
//     Test.assertEquals(checkeredBoard(4), "□ ■ □ ■\n■ □ ■ □\n□ ■ □ ■\n■ □ ■ □");
//   });
//
//   Test.it ("returns correct board for even dimensions", function(){
//     Test.assertEquals(checkeredBoard(7), "■ □ ■ □ ■ □ ■\n□ ■ □ ■ □ ■ □\n■ □ ■ □ ■ □ ■\n□ ■ □ ■ □ ■ □\n■ □ ■ □ ■ □ ■\n□ ■ □ ■ □ ■ □\n■ □ ■ □ ■ □ ■");
//   });
// });
