'use strict'

const config = require('../config')
const store = require('../store')

const indexMoods = () => {
  $('.data-loader').removeClass('hidden')
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/moods',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const indexNeeds = () => {
  $('.data-loader').removeClass('hidden')
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
