'use strict'

const config = require('../config')
const store = require('../store')

const showMoods = function () {
  return $.ajax({
    url: config.apiUrl + '/moods',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteMood = id => {
  return $.ajax({
    url: config.apiUrl + '/moods/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  showMoods,
  deleteMood
}
