'use strict'

const config = require('../config')
const store = require('../store')

const postMood = data => {
  return $.ajax({
    url: config.apiUrl + '/moods',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  postMood
}
