// Your job is to return another function, that—given a number n—returns the
// appropriate string. How do you know the correct string? Well, it's the one
// paired with the largest key that still divides the number n!

function fizzBuzzFactory(arr) {
  return function(n) {
    for (var i = arr.length - 1; i >= 0; i--) {
      if (n % arr[i][0] == 0) {
        return arr[i][1];
      }
    }
    return n.toString();
  }
}

var myFizz = fizzBuzzFactory([[3, "Fizz"], [5, "Buzz"], [15, "FizzBuzz"]])
console.log(myFizz(3))  // "Fizz"
console.log(myFizz(4))  // "4"
console.log(myFizz(5))  // "Buzz"
console.log(myFizz(15)) // "FizzBuzz"

var myFooBar = fizzBuzzFactory([[2, "Foo"], [4, "Bar"], [6, "FooBar"]])
console.log(myFooBar(1) ); // "1"
console.log(myFooBar(2) ); // "Foo"
console.log(myFooBar(4) ); // "Bar"
console.log(myFooBar(6) ); // "FooBar"
console.log(myFooBar(8) ); // "Bar"
console.log(myFooBar(10)); // "Foo"
console.log(myFooBar(12)); // "FooBar"
