
/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
function triangleType(a, b, c) {
  var angleA = findAngle(b, c, a);
  var angleB = findAngle(a, c, b);
  var angleC = findAngle(a, b, c);
  if (angleA == 0 || angleB == 0 || angleC == 0) {
    return 0;
  } else if (angleA < 90 && angleB < 90 && angleC < 90) {
    return 1;
  } else if (angleA == 90 || angleB == 90 || angleC == 90) {
    return 2;
  } else {
    return 3;
  }
  return Math.round(angleA + angleB + angleC);
}

function findAngle(a, b, c){
  var angle = (Math.pow(a, 2)+Math.pow(b, 2)-Math.pow(c, 2));
  angle = angle / (2 * a * b);
  angle = Math.acos(angle);
  angle = angle*180/Math.PI;
  return isNaN(angle) ? 0 : angle;
}

console.log(triangleType(7, 3, 2)); // return 0 (Not triangle)
// console.log(triangleType(2, 4, 6)); // return 0 (Not triangle)
// console.log(triangleType(8, 5, 7)); // return 1 (Acute, angles are approx. 82°, 38° and 60°)
// console.log(triangleType(3, 4, 5)); // return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
// console.log(triangleType(7, 12, 8)); // return 3 (Obtuse, angles are approx. 34°, 106° and 40°)
