'use strict'

const dateTime = str => {
  // this block extracts each component part of the
  const year = str.substring(0, 4)
  const day = str.substring(5, 7)
  const month = str.substring(8, 10)
  let hour = parseInt(str.substring(11, 13)) + 7
  let min = parseInt(str.substring(14, 16))

  if (min === 0) { min = '00' }

  if (hour >= 19) {
    min += ' pm'
  } else {
    min += ' am'
  }

  if (hour > 24) {
    hour -= 24
  } else if (hour > 12) {
    hour -= 12
  }

  return month + '/' + day + '/' + year + ', ' + hour + ':' + min + ' (EST)'
  // return str
}

module.exports = dateTime
