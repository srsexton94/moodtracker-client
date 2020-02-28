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

const showMoods = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/moods',
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

const updateMood = (data, id) => {
  return $.ajax({
    url: config.apiUrl + '/moods/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const postNeed = data => {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/needs',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  postMood,
  showMoods,
  deleteMood,
  updateMood,
  postNeed
}
