function manhattanDistance(pointA, pointB){
  var diff = []
  for (var i in pointA) {
    diff.push(Math.abs(pointA[i] - pointB[i]));
  }

  var total = 0;
  for (var i in diff) {
    total += diff[i];
  }
}

manhattanDistance([1,1],[1,1]); //return 0
manhattanDistance([5,4],[3,2]); //return 3
manhattanDistance([1,1],[0,3]); //return 4
