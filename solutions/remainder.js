var remainder = function(D , d){
  return D - (Math.floor(D / d) * d);
}

console.log(remainder(4, 3));
console.log(remainder(11, 3));
