function lcm(args){
    // Recursively iterate through pairs of arguments
    // i.e. lcm(args[0], lcm(args[1], lcm(args[2], args[3])))
  var args = Array.prototype.slice.call(arguments);

  if(args.length == 2){
    return lowestCommonMultiple(args[0], args[1]);
  } else {
      var arg0 = args[0];
      args.shift();
      return lowestCommonMultiple(arg0, lcm(args));
  }
}

function lowestCommonMultiple(a, b) {
  return Math.abs(a * b) / greatestCommonDivisor(a, b);
}

function greatestCommonDivisor(a, b) {
  if (b === 0) return a;
  return greatestCommonDivisor(b, a % b);
}

console.log(lcm(2,3,4));
