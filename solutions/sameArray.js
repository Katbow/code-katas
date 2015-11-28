function comp(a, b) {

  if (a == null || b == null) {
    return false;
  }

  if (a.length == 0 || b.length == 0) {
    return false;
  }

  if (a.length != b.length) {
    return false;
  }

  a = a.sort(compareNums);
  b = b.sort(compareNums);

  for (var i in a) {
    if (a[i] * a[i] != b[i]) {
      return false;
    }
  }

  return true;
}

function compareNums(a, b) {
  return a - b;
}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],[11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]));
