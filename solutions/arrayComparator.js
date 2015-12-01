// You have two arrays in this kata, every array contain only unique elements.
// Your task is to calculate number of elements in first array which also are in second array.

function matchArrays(v,r) {
  var count = 0;
  for (var i = 0; i < v.length; i++) {
    if (r.indexOf(v[i]) != -1 ) {
      count++;
    }
  }
  return count;
}

console.log(matchArrays(['Perl','Closure','JavaScript'], ['Go', 'C++','Erlang'])); // return 0
console.log(matchArrays(['incapsulation','OOP','array'], ['time', 'propert','paralelism','OOP'])); // return 1
console.log(matchArrays([1,2,3,4,5], [2,3,4,5,6])); // return 4
