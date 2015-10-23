function validate(n){

  var numbers = n.toString().split("").map(Number);

  for (var i = numbers.length - 2; i >= 0; i -= 2) {
    numbers[i] = numbers[i] * 2;

    if (numbers[i] > 9) {
      numbers[i] = numbers[i] - 9;
    }
  }

  var total = 0;
  for (var i in numbers) {
    total += numbers[i];
  }

  return total % 10 == 0;
}

validate(1714);
validate(981);
