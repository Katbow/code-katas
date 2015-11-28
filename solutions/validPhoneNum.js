/*function validPhoneNumber(pNum){
  console.log(pNum);

  if (pNum.length != 14) {
    console.log(false);
  } else if (pNum.indexOf('(') == 0 && pNum.indexOf(')') == 4 && pNum.indexOf(' ') == 5 && pNum.indexOf('-') == 9) {
    console.log(true);
  } else {
    console.log(false);
  }
}*/

function validPhoneNumber(pNum){

  function validLength() {
    return pNum.length == 14;
  }

  function validFormat() {
    return pNum.indexOf('(') == 0 &&
           pNum.indexOf(')') == 4 &&
           pNum.indexOf(' ') == 5 &&
           pNum.indexOf('-') == 9;
  }

  return validLength() && validFormat();
}

console.log(validPhoneNumber("(123) 456-7890"));
console.log(validPhoneNumber("(1111) 555-2345"));
console.log(validPhoneNumber("(098 123) 4567"));
