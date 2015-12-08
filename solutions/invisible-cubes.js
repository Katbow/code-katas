function notVisibleCubes(n) {
  return n > 2 ? Math.pow(n - 2, 3) : 0;
}
console.log(notVisibleCubes(1));
console.log(notVisibleCubes(3));
console.log(notVisibleCubes(4));
