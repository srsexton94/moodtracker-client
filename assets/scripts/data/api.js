'use strict'

const config = require('../config')
const store = require('../store')

const showMoods = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/moods',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  showMoods
}
