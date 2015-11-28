function checkCoupon(givenCode, validCode, today, expiration){
  if (typeof givenCode !== "string"  || typeof validCode !== "string") {
    return false;
  }
  return givenCode == validCode && new Date(today) <= new Date(expiration);
}

console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'));
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'));
