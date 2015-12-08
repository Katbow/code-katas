function Event() {
  this.stored = [];
}

Event.prototype.subscribe = function(fn) {
  this.stored.push(fn);
}

Event.prototype.unsubscribe = function(fn) {
  var index = this.stored.indexOf(fn);
  if (index > -1) {
    this.stored.splice(index, 1);
  }
}

Event.prototype.emit = function() {
  for (var i in this.stored) {
    var args = Array.prototype.slice.call(arguments);
    this.stored[i].apply(this, args);
  }
}
