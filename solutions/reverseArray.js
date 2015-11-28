function reverse(arr) {
   var ans = [];

   for (var i = arr.length - 1;i >= 0;i--) {
      ans.push(arr[i]);
   }
   return ans;
};
