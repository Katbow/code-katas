function formatDuration (seconds) {
  if (seconds === 0) { return "now"; }

  var readableDuration = [];
  var years = Math.floor(seconds / 31536000);
  if (years == 1) {
    readableDuration.push("1 year")
  } else if (years > 1) {
    readableDuration.push(years + " years");
  }

  var remainingSecs = seconds - (years * 31536000);
  var days = Math.floor(remainingSecs / 86400);
  if (days == 1) {
    readableDuration.push("1 day")
  } else if (days > 1) {
    readableDuration.push(days + " days");
  }

  remainingSecs = remainingSecs - (days * 86400);
  var hours = Math.floor(remainingSecs / 3600);
  if (hours == 1) {
    readableDuration.push("1 hour")
  } else if (hours > 1) {
    readableDuration.push(hours + " hours");
  }

  remainingSecs = remainingSecs - (hours * 3600);
  var mins = Math.floor(remainingSecs / 60);
  if (mins == 1) {
    readableDuration.push("1 minute")
  } else if (mins > 1) {
    readableDuration.push(mins + " minutes");
  }

  var secs = remainingSecs - (mins * 60);
  if (secs == 1) {
    readableDuration.push("1 second")
  } else if (secs > 1) {
    readableDuration.push(secs + " seconds");
  }

  return formatArray(readableDuration);
}

function formatArray(arr){
    var outStr = "";
    if (arr.length === 1) {
        outStr = arr[0];
    } else if (arr.length === 2) {
        outStr = arr.join(' and ');
    } else if (arr.length > 2) {
        outStr = arr.slice(0, -1).join(', ') + ' and ' + arr.slice(-1);
    }
    return outStr;
}
// console.log(formatDuration(3662));
console.log(formatDuration(15731080));
