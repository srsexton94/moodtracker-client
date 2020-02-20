'use strict'

const store = require('./../store.js')

const onSignUpSuccess = response => {
  $('#sign-up').trigger('reset') // clears the form

  // Add code to navigate to signIn modal (or sign in automatically?)
  // upon successful sign up
}

const onSignUpFailure = response => {
  // add failure message in signup form
  $('#signup-message').text('Sorry, Sign up unsuccessful')

  $('#sign-up').trigger('reset') // clears the form

  setTimeout(() => {
    $('#signup-message').text('') // removes failure message after 5 seconds
  }, 5000)
}

const onSignInSuccess = response => {
  $('#sign-in').trigger('reset') // clears the form

  // Add code to navigate to main page upon successful sign in

  // stores the response data in 'store.js' to access authentication token later
  store.user = response.user
  store.user.games = []
}

const onSignInFailure = response => {
  // add failure message in signin form
  $('#signin-message').text('Email/Password incorrect, Please try again.')

  $('#sign-in').trigger('reset') // clears the form

  setTimeout(() => {
    $('#signin-message').text('') // removes failure message after 5 seconds
  }, 5000)
}

const onUpdateProfileSuccess = response => {
  $('#update-profile').trigger('reset') // clears the form

  // Add code to navigate back to the main page upon successful form submission
}

const onUpdateProfileFailure = response => {
  // add success message in update profile form
  $('#updateprofile-message').text('Password update failed, Please try again.')

  $('#update-profile').trigger('reset') // clears the form

  setTimeout(() => { // removes failure message after 5 seconds
    $('#updateprofile-message').text('')
  }, 5000)
}

const onSignOutSuccess = response => {
  $('#sign-out').trigger('reset') // clears the form

  // Add code to navigate back to main page upon succesful sign out

  store.user = null // wipes signed-in users data clean
}

const onSignOutFailure = response => {
  // add success message in signout form
  $('#signout-message').text('Alert: Account still signed in.')

  $('#sign-out').trigger('reset') // clears the form

  setTimeout(() => {
    $('#signout-message').text('') // clears the failure message after 5 seconds
  }, 5000)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onUpdateProfileSuccess,
  onUpdateProfileFailure,
  onSignOutSuccess,
  onSignOutFailure
}
