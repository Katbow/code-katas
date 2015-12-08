//given an array with n, s, e, w direction return true if:
// it is exactly 10 mins and if it takes you back to your original location
function isValidWalk(walk) {

  if (walk.length !== 10) {
    return false;
  }

  var location = 0;
  for (var i = 0; i < walk.length; i++) {
    if (walk[i] === 'n'|| walk[i] === 'e') {
      location += 1;
    } else if (walk[i] === 's' || walk[i] === 'w') {
      location -= 1;
    }
  }

  if (location !== 0) {
    return false;
  }

  return true;
}

console.log(isValidWalk([ 'n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 'n' ])); // false
console.log(isValidWalk([ 'e', 'e', 'e', 'w', 'n', 's', 'n', 's', 'e', 'w' ])); // false
console.log(isValidWalk([ 'n', 'n', 'n', 'e', 'e', 's', 's', 'w', 'w', 'w' ])); // false
