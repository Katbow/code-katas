function horses(n) {
  if (n < 3) { return n; }
  if (n !== parseInt(n, 10)) { return undefined; }
  return n * (n - 1) * (n - 2);
}

console.log(horses(15)); //2730
console.log(horses(4)); // 24
