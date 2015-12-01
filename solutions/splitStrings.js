function solution(str){
   var splitStr = str.match(/.{1,2}/g);
   var lastElement = splitStr[splitStr.length - 1];
   if (lastElement.length === 1) {
     splitStr.splice(splitStr.length - 1, 1, lastElement + "_");
   }
   return splitStr;
}

console.log(solution("abcde"));
