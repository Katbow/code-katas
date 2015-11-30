// function scoreHand(cards) {
//   var countA = 0;
//   for (var i = 0; i < cards.length; i++) {
//     if (cards[i] === "J" || cards[i] === "Q" || cards[i] === "K") {
//       cards[i] = 10;
//     } else if (cards[i] === "A") {
//       cards[i] = 11;
//       countA += 1;
//     } else {
//       cards[i] = Number(cards[i]);
//     }
//   }
//
//   var result = cards.reduce(function(previousValue, currentValue, currentIndex, array) {
//     return previousValue + currentValue;
//   });
//
//   for (var i = 1; i <= countA; i++) {
//     if (result > 21) {
//       result -= 10;
//     }
//   }
//
//   return result;
// }

// console.log(scoreHand(["A"]));
console.log(scoreHand(["A", "J", "A"]));
// console.log(scoreHand(["5", "4", "3", "2", "A", "K"]));

function scoreHand(cards) {
  var score = 0;
  var countA = 0;
  for (var i = 0; i < cards.length; i++) {
    switch (cards[i]) {
      case "J":
      case "Q":
      case "K":
        score += 10;
        break;
      case "A":
        score += 11;
        countA++;
        break;
      default:
        Number(cards[i]);
    }
  }

  while (countA > 0 && score > 21) {
    score -= 10;
    countA--;
  }

  return score
}
