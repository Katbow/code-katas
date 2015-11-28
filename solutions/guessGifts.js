function guessGifts(wishlist, presents) {
  var gifts = [];
  for (var i in presents) {
    for (var j in wishlist) {
      if (presents[i].size === wishlist[j].size) {
        if (presents[i].clatters === wishlist[j].clatters) {
          if (presents[i].weight === wishlist[j].weight) {
            gifts.push(wishlist[j].name);
          }
        }
      }
    }
  }
  var uniqueGifts = gifts.filter(function(item, pos) {
    return gifts.indexOf(item) == pos;
  })
  return uniqueGifts;
}

var wishlist = [
  {"name":"card game","size":"small","clatters":"no","weight":"light"},
  {"name":"bobble hat","size":"small","clatters":"no","weight":"light"},
  {"name":"socks","size":"small","clatters":"no","weight":"light"}
];

var presents = [
  {"size":"small","clatters":"no","weight":"light"},
  {"size":"small","clatters":"no","weight":"light"}
];

console.log(guessGifts(wishlist, presents));

//  - Expected: ["bobble hat","card game","socks"], instead got: ["bobble hat","bobble hat","card game","card game","socks","socks"]

// var wishlist = [
//     {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
//     {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
//     {name: "Card Game", size: "small", clatters: "no", weight: "light"}
// ];
//
// var presents = [
//     {size: "medium", clatters: "a bit", weight: "medium"},
//     {size: "small", clatters: "yes", weight: "light"}
// ];
