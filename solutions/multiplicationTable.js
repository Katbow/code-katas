function multiplicationTable(row,col){
  var result = [];
  var singleRow = [];

  for (var i = result.length; i < row; i++) {
    for (var j = 1; j <= col; j++) {
      singleRow.push((result.length + 1) * j);
    }
    result.push(singleRow)
    singleRow = [];
  }

  return result;
}

console.log(multiplicationTable(3, 4));
