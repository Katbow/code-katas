var monthsofyear = new Array('January',
                             'February',
                             'March',
                             'April',
                             'May',
                             'June',
                             'July',
                             'August',
                             'September',
                             'October',
                             'November',
                             'December');


var daysofweek = new Array('Sunday',
                           'Monday',
                           'Tuesday',
                           'Wednesday',
                           'Thursday',
                           'Friday',
                           'Saturday');

function Nths(day) {
  // find day of the month as number
}

function DayOfWeek(day, month, year) {
  // find day of the week
}

function FullDate(day, month, year) {
    var full_date = daysofweek[DayOfWeek(day, month, year)] + ' ' +
              day + Nths(day) + '  ' +  monthsofyear[month] + '  ' + year;
    return full_date;
}
