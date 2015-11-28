function taxCalculator(total) {
  var tax = 0;

  if (total <= 0) {
    return 0;
  } else if (total <= 10) {
    tax += total * 0.10;
  } else if (total <= 20) {
    tax += (total - 10) * 0.07 + 1;
  } else if (total <= 30) {
    tax += (total - 20) * 0.05 + 1.7;
  } else if (total > 30) {
    tax += (total - 30) * 0.03 + 2.2;
  }

  return Math.round(tax * 100) / 100;
}

console.log(taxCalculator(30.49));
