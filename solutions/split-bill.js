function splitTheBill(x) {
  var avgAmount = 0;
  for (var i in x) {
    avgAmount += x[i];
  }
  avgAmount /= Object.keys(x).length; // 57.2

  for (var name in x) {
    x[name] = (x[name] * 10 - avgAmount * 10) / 10;
  }
  return x;
}

// console.log(splitTheBill({A: 20, B: 15, C: 10})); // {A: 5, B: 0, C: -5}
console.log(splitTheBill({ A: 40, B: 25, C: 10, D: 153, E: 58 }));
// { A: -17.200000000000003, B: -32.2, C: -47.2, D: 95.8, E: 0.7999999999999972 }
