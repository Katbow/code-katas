var peopleWithAgeDrink = function(age) {
  if (age < 14) {
    return "drink toddy";
  } else if (age < 18) {
    return "drink coke";
  } else if (age < 21) {
    return "drink beer";
  } else {
    return "drink whisky";
  }
};

console.log(peopleWithAgeDrink(13)); // "drink toddy"
console.log(peopleWithAgeDrink(17)); // "drink coke"
console.log(peopleWithAgeDrink(18)); // "drink beer"
console.log(peopleWithAgeDrink(20)); // "drink beer"
console.log(peopleWithAgeDrink(30)); // "drink whisky"
