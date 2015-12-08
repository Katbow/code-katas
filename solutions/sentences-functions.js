function Adam(string) {
  if(string === undefined) {
    return "Adam";
  }
  return "Adam " + string;
}

function has(string) {
  return "has " + string;
}

function a(string) {
  return "a " + string;
}

function dog(string) {
  if(string === undefined) {
    return "dog";
  }
  return "dog " + string;
}

function The(string) {
  return "The " + string;
}

function name(string) {
  return "name " + string;
}

function of(string) {
  return "of " + string;
}

function the(string) {
  return "the " + string;
}

function is(string) {
  return "is " + string;
}

function also(string) {
  return "also " + string;
}

Adam(has(a(dog())));

The(name(of(the(dog(is(also(Adam())))))));
