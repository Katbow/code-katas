function findNeedle(haystack) {
  for (var i in haystack) {
    if (haystack[i] == 'needle') {
      return "found the needle at position " + i;
    }
  }
}

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])) // 'found the needle at position 5'
