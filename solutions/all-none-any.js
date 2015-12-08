Array.prototype.all = function (p) {
  // TODO: returns true if all array elements return true
  for (var i = 0; i < this.length; i++) {
    if (p(this[i]) === false) {
      return false;
    }
  }
  return true;
};

Array.prototype.none = function (p) {
  // TODO: returns true if all array elements return false
  for (var i = 0; i < this.length; i++) {
    if (p(this[i]) === true) {
      return false;
    }
  }
  return true;
};

Array.prototype.any = function (p) {
  // TODO: returns true if at least one element returns true
  for (var i = 0; i < this.length; i++) {
    if (p(this[i]) === true) {
      return true;
    }
  }
  return false;
};
