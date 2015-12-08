function GetSum(a, b) {
   if (a == b) { return a; }
   if (a > b) { var temp = a, a = b, b = temp; }

   var allNums = [];
   for (; a <= b; a++) {
     allNums.push(a);
   }

   return allNums.reduce(function(x, y) {
     return x + y;
   });
}

console.log(GetSum(-1, 2)); // 2
console.log(GetSum(1, 4)); // 10
