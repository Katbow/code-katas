function getNiceNames(people){
  var nicePeople = [];
  for (var i in people) {
    if (people[i].wasNice === true) {
      nicePeople.push(people[i].name);
    }
  }
  return nicePeople;
}

function getNaughtyNames(people){
  var naughtyPeople = [];
  for (var i in people) {
    if (people[i].wasNice === false) {
      naughtyPeople.push(people[i].name);
    }
  }
  return naughtyPeople;
}

console.log(getNiceNames([
        { name: 'Warrior reading this kata', wasNice: true },
        { name: 'xDranik', wasNice: false },
        { name: 'Santa', wasNice: true }
    ]));
