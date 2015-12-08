var vampire_test = function(a, b) {
  var ab = a.toString() + b.toString();
  var prod = (a * b).toString();
  var arrAb = ab.split('');
  var arrProd = prod.split('');
  var testAb = arrAb.sort().toString();
  var testProd = arrProd.sort().toString();

  return testAb === testProd;
};

console.log(vampire_test(6,21));
