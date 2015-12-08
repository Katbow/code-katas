// Your solution shall be an object containing the "path" and "values" keys.
//
// "path" array keeps track of all the cells in the maze (see "toXpath" array in sample test case);
// "values" array keeps track of all encountered cells contents. (see toXvalues array in sample test case);

function getToX(maze) {
  var path = [], values = [];
  for (var i = 0; i < maze.length; i++) { // for each row
    for (var j = 0; j < maze.length; j++) { // for each column
      if (maze[i][j] == '_') {
        path.push([i, j]);
        values.push('_');
      } else if (maze[i][j] == 'W') {
        i += 1;
      } else if (maze [i][j] == 'x') {
        path.push([i, j]);
        values.push('x');
      }
    }
  }
  return {path:path, values:values};
}

console.log(getToX([ [ '_', '_', '_', 'W', '_', '_', '_' ],
                     [ 'W', 'W', '_', 'W', '_', '_', '_' ],
                     [ 'W', 'W', '_', '_', 'W', '_', '_' ],
                     [ 'W', 'W', 'W', '_', 'W', '_', '_' ],
                     [ '_', 'W', 'W', '_', 'W', 'W', 'W' ],
                     [ '_', '_', 'W', '_', '_', 'x', 'W' ],
                     [ 'W', 'W', 'W', 'W', 'W', 'W', 'W' ] ]));

// var toXpath = [ [ 0, 0 ],[ 0, 1 ],[ 0, 2 ],[ 1, 2 ],[ 2, 2 ],
//               [ 2, 3 ],[ 3, 3 ],[ 4, 3 ],[ 5, 3 ],[ 5, 4 ],[ 5, 5 ] ],
//
// var toXvalues =["_"   ,  "_"   ,   "_"  ,   "_"  ,  "_"   ,
//                "_"   ,  "_"   ,   "_"  ,   "_"  ,  "_"   ,  "x" ];
