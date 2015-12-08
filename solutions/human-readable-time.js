function humanReadable(seconds) {
  var hours = Math.floor(seconds / 3600);
  if (hours < 10) {hours = "0" + hours;}

  var remainingSecs = seconds - hours * 3600;
  var mins = Math.floor(remainingSecs / 60);
  if (mins < 10) {mins = "0" + mins;}

  var secs = remainingSecs - mins * 60;
  if (secs < 10) {secs = "0" + secs;}
  return hours + ":" + mins + ":" + secs;
}

console.log(humanReadable(359999));
console.log(humanReadable(60));
