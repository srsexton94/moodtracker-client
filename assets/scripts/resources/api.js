'use strict'

const config = require('../config')

const postMood = data => {
  return $.ajax({
    url: config.apiUrl + '/moods',
    method: 'POST',
    data
  })
}

module.exports = {
  postMood
}
