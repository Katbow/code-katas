// Description
// This is a simplified version of
// [Deep comparison of objects](http://www.codewars.com/kata/deep-comparison-of-objects).
//
// It's not easy to compare objects in JavaScript.
// Even two objects with the same properties and values will be considered different.
//
// ```javascript
// {a: 1, b: 2} === {a: 1, b: 2}
// // false
// ```
//
// Your task is to create a function, compareObjects(objectA, objectB), which
// compares 2 objects. The parameters will always be objects, and will not
// contain other objects or arrays, just strings and numbers.

// Solution
var compareObjects = function(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  for (var i in a) {
    console.log(a[i] + " a");
    console.log(b[i] + " b");
    if (a[i] !== b[i]) { return false; }
  }
  return true;
};

// Test.describe("compareObjects", function(){
//    Test.it ("return false when objects are not equal length", function(){
//      Test.assertEquals(compareObjects({a: 1}, {a: 1, b: 2}), false);
//      Test.assertEquals(compareObjects({}, {a: "test"}), false);
//    });
//
//    Test.it ("return false when objects have same properties in different order", function(){
//      Test.assertEquals(compareObjects({b: 2, a: 1}, {a: 1, b: 2}), false);
//      Test.assertEquals(compareObjects({x: "yz", a: "bc"}, {a: "bc", x: "yz"}), false);
//    });
//
//    Test.it ("return true if objects have same properties in same order", function(){
//      Test.assertEquals(compareObjects({a: 1, b: 2}, {a: 1, b: 2}), true);
//      Test.assertEquals(compareObjects({a: "test"}, {a: "test"}), true);
//      Test.assertEquals(compareObjects({a: "test", q: 26, r: 94, d: "abcd", katbow: "isAwesome", codewars: "isFun"}, {a: "test", q: 26, r: 94, d: "abcd", katbow: "isAwesome", codewars: "isFun"}), true);
//    });
// });
