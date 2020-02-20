'use strict'

const config = require('../config')
const store = require('../store')

// post form data to the API
const signUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up', // Note: there is no URL yet in config!
    method: 'POST',
    data
  })
}

// post form data to API, retrieves authentication token
const signIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in', // Note: there is no URL yet in config!
    method: 'POST',
    data
  })
}

// requiring authentication token, edit portion of API data (password)
const updateProfile = data => {
  return $.ajax({
    url: config.apiUrl + '/change-password', // Note: there is no URL yet in config!
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// removes user data from the store object
const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out', // Note: there is no URL yet in config!
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  updateProfile,
  signOut
}
