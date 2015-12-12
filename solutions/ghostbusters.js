function ghostBusters(building) {
  return building.search(/\s/) > -1 ? building.replace(/\s/g, '') : "You just wanted my autograph didn't you?";
}

console.log(ghostBusters("sky scr apers"));
console.log(ghostBusters("house"));
