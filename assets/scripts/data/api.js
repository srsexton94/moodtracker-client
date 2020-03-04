'use strict'

const config = require('../config')
const store = require('../store')

const indexMoods = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/moods',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const indexNeeds = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/needs',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  indexMoods,
  indexNeeds
}
