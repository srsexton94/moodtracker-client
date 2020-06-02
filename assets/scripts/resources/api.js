'use strict'

const config = require('../config')
const store = require('../store')

const postMood = data => {
  $('.resource-loader').removeClass('hidden')
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
  $('.resource-loader').removeClass('hidden')
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/moods',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showNeeds = () => {
  $('.resource-loader').removeClass('hidden')
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/needs',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteMood = id => {
  $('.resource-loader').removeClass('hidden')
  return $.ajax({
    url: config.apiUrl + '/moods/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteNeed = id => {
  $('.resource-loader').removeClass('hidden')
  return $.ajax({
    url: config.apiUrl + '/needs/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateMood = (data, id) => {
  $('.resource-loader').removeClass('hidden')
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
  $('.resource-loader').removeClass('hidden')
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
  showNeeds,
  deleteMood,
  deleteNeed,
  updateMood,
  postNeed
}
