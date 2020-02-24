'use strict'

const config = require('../config')

const showMoods = function () {
  return $.ajax({
    url: config.apiUrl + '/moods'
  })
}

const deleteMood = id => {
  return $.ajax({
    url: config.apiUrl + '/moods/' + id,
    method: 'DELETE'
  })
}

module.exports = {
  showMoods,
  deleteMood
}
