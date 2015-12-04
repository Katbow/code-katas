// 1 reindeer per 30 presents.
// 8 reindeers in total
// up to 180 presents at once (2 reindeers for Santa and the sleigh + 6 reindeers with 30 presents each).

function reindeers(presents) {
  if (presents > 180) { throw "Too many presents!" }
  return Math.ceil(presents / 30) + 2;
}

console.log(reindeers(0)); // must return 2
console.log(reindeers(1)); // must return 3
console.log(reindeers(30)); // must return 3
console.log(reindeers(180));
console.log(reindeers(200)); // must throw an error
