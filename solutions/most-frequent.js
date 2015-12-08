function mostFrequentItemCount(items) {
  var freq = {}, max = 0;
  for(var i = 0; i < items.length; i++) {
    freq[items[i]] = (freq[items[i]] || 0) + 1;
    if(freq[items[i]] > max) {
      max = freq[items[i]];
    }
  }
  return max;
}

console.log(mostFrequentItemCount([3, -1, -1])); // 2
console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3])); //, 5
