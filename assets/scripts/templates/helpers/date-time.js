'use strict'

// this takes a datetime (UTC) format string & returns M/D/Y, HR:MIN am/pm (EST)
const dateTime = str => {
  // this block extracts each component part of the date & time
  const year = str.substring(0, 4)
  const day = str.substring(5, 7)
  const month = str.substring(8, 10)
  let hour = parseInt(str.substring(11, 13)) + 7 // add 7 to set to our time zone (EST)
  let min = parseInt(str.substring(14, 16))

  // if the minute value is 0, still print two digits
  if (min === 0) { min = '00' }

  if (hour >= 19) { // if it's the afternoon, add 'pm'
    min += ' pm'
  } else { // if it's the morning, add 'am'
    min += ' am'
  }

  // this block converts 24-hr clock time to 12-hr clock time
  if (hour > 24) {
    hour -= 24
  } else if (hour > 12) {
    hour -= 12
  }

  return month + '/' + day + '/' + year + ', ' + hour + ':' + min + ' (EST)'
}

module.exports = dateTime
