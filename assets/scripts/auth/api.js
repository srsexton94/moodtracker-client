'use strict'

const config = require('../config')
const store = require('../store')

// post form data to the user API
const signUp = data => {
  $('.auth-loader').removeClass('hidden')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

// post form data to user API, retrieves authentication token
const signIn = data => {
  $('.auth-loader').removeClass('hidden')
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

// requiring authentication token, edits user API password data
const changePassword = data => {
  $('.auth-loader').removeClass('hidden')
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// removes user data from the user API
const signOut = () => {
  $('.auth-loader').removeClass('hidden')
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
