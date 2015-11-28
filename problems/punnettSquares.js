//Instructions
// In biology, a genotype is the genetic make up of an individual which will determine a specific characteristic of that individual. There are three possible ways to describe the genotype:
//
// - Homozygous dominant. Represented by two upper case letters, i.e. BB.
// - Heterozygous. Represented by an upper and lower case letter, i.e. Bb.
// - Homozygous recessive. Represented by two lower case letters, i.e. bb.
//
// A Punnett square is used to predict the probablilty that a child will have a certain genotype, when given the genotypes of each parent. While this is a useful tool, it can be tedious to draw many times and calculate the probability of each genotype.
//
// Your task is to write a function which takes two parameters, the genotype of the father and the genotype of the mother. The function must return an object which contains the Punnett square, and the probability for each genotype.
//
// Rules for the Punnett Square
//
// - The square should always have the male genotype across the top of the table, and the female genotype should be down the left side of the table.
// - The table should include spaces and new lines to ensure readability. The format is "-B--b\nB-BB-Bb\n\b-Bb-bb", where - represents a space.
// - The uppercase letter should always come first i.e. Bb instead of bB.
//
//
// Example:
//
// ```javascript
// punnettSquare("Bb", "BB")
// ```
// should return
//
// ```javascript
// { square:
// " B  b
// B BB Bb
// B BB Bb",
// Dominant: 50%,
// Heterozygous: 50%,
// Recessive: 0% }
// ```

// solution

function punnettSquare(father, mother) {
  if (father.length !== 2 || mother.length !== 2) { return false; }

  var dad = father.split('');
  var mom = mother.split('');

  var genotypes = [
    dad[0] + mom[0],
    dad[1] + mom[0],
    dad[0] + mom[1],
    dad[1] + mom[1]
  ];

  for (var i in genotypes) {
    if (genotypes[i] === genotypes[i][0].toLowerCase() + genotypes[i][1].toUpperCase()) {
        genotypes[i] = genotypes[i][0].toUpperCase() + genotypes[i][1].toLowerCase();
    }
  }

  var square = "  " + dad[0] + "  " + dad[1] + "\n" +
               mom[0] + " " + genotypes[0] + " " + genotypes[1] + "\n" +
               mom[1] + " " + genotypes[2] + " " + genotypes[3];

  var dominant = 0
    , heterozygous = 0
    , recessive = 0
    , type = "";

  for (var i = 0; i < mom.length; i++) {
    for (var j = 0; j < dad.length; j++) {
      type = dad[j] + mom[i];
      if (type === dad[j].toUpperCase() + mom[i].toUpperCase()) {
        dominant += 25;
      } else if (type === dad[j].toUpperCase() + mom[i] ||
                 type === dad[j] + mom[i].toUpperCase()) {
        heterozygous += 25;
      } else {
        recessive += 25;
      }
    }
  }
  return {
    punnett: square,
    dominantProb: dominant,
    heterozygousProb: heterozygous,
    recessiveProb: recessive
  };
}

console.log(punnettSquare("Bb", "BB"));
// console.log(punnettSquare("Qq", "QQ"));
// console.log(punnettSquare(["XX", "XX"]));
// console.log(punnettSquare(["cc", "cc"]));
// console.log(punnettSquare(["tt", "TT"]));
// console.log(punnettSquare(["ZZ", "zz"]));
// console.log(punnettSquare(["WW", "Ww"]));
// console.log(punnettSquare(["Oo", "Oo"]));
// console.log(punnettSquare(["Ee", "ee"]));
// console.log(punnettSquare(["ss", "Ss"]));

// function test(input, expected) {
//   var actual = punnettSquare(input);
//   ['punnett','Dominant','Heterozygous','Recessive'].forEach(function(n) {
//     Test.assertEquals(actual[n], expected[n], 'Expected '+n+' to be '+expected[n]+', but was '+actual[n]);
//   });
// }
//
// Test.describe("punnettSquare", function(){
//   Test.it ("returns false when parents.length != 2", function(){
//     Test.assertEquals(punnettSquare([]), false);
//     Test.assertEquals(punnettSquare(["A", "Aa", "aa"]), false);
//     Test.assertEquals(punnettSquare(["aa"]), false);
//   });
//
//   Test.it ("returns an object with a valid square and probabilities", function(){
//     test(["Qq", "QQ"], {punnett: '  Q  q\nQ QQ Qq\nQ QQ Qq', Dominant: 50, Heterozygous: 50, Recessive: 0 });
//     test(["XX", "XX"], {punnett: '  X  X\nX XX XX\nX XX XX', Dominant: 100, Heterozygous: 0, Recessive: 0 });
//     test(["cc", "cc"], {punnett: '  c  c\nc cc cc\nc cc cc', Dominant: 0, Heterozygous: 0, Recessive: 100 });
//     test(["tt", "TT"], {punnett: '  t  t\nT Tt Tt\nT Tt Tt', Dominant: 0, Heterozygous: 100, Recessive: 0 });
//     test(["ZZ", "zz"], {punnett: '  Z  Z\nz Zz Zz\nz Zz Zz', Dominant: 0, Heterozygous: 100, Recessive: 0 });
//     test(["WW", "Ww"], {punnett: '  W  W\nW WW WW\nw Ww Ww', Dominant: 50, Heterozygous: 50, Recessive: 0 });
//     test(["Oo", "Oo"], {punnett: '  O  o\nO OO Oo\no Oo oo', Dominant: 25, Heterozygous: 50, Recessive: 25});
