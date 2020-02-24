'use strict'

const store = require('./../store.js')

const onSignUpSuccess = response => {
  $('#sign-up').trigger('reset') // clears the form
  $('#signup-modal').addClass('hidden')
  $('#signin-modal').removeClass('hidden') // "navigates" to sign-in
}

const onSignUpFailure = response => {
  console.log(response)
  // add failure message in signup form
  $('#signup-message').text('Sorry, Sign up unsuccessful').css('color', 'red')

  $('#sign-up').trigger('reset') // clears the form

  setTimeout(() => {
    $('#signup-message').text('') // removes failure message after 5 seconds
  }, 3000)
}

const onSignInSuccess = response => {
  $('#sign-in').trigger('reset') // clears the form

  // stores the response data in 'store.js' to access authentication token later
  store.user = response.user
  store.user.games = []

  // Navigates to main page upon successful sign in
  $('#signin-modal').addClass('hidden')
  $('#title-page').addClass('hidden')
  $('#main').removeClass('hidden')
}

const onSignInFailure = response => {
  // add failure message in signin form
  $('#signin-message').text('Email/Password incorrect').css('color', 'red')

  $('#sign-in').trigger('reset') // clears the form

  setTimeout(() => {
    $('#signin-message').text('') // removes failure message after 5 seconds
  }, 3000)
}

const onChangePasswordSuccess = response => {
  $('#change-password').trigger('reset') // clears the form

  // Navigates back to the main page upon successful form submission
  $('#changepassword-modal').addClass('hidden')
}

const onChangePasswordFailure = response => {
  // add failure message in change password form
  $('#changepassword-message').text('Password update failed.').css('color', 'red')

  $('#change-password').trigger('reset') // clears the form

  setTimeout(() => { // removes failure message after 5 seconds
    $('#changepassword-message').text('')
  }, 3000)
}

const onSignOutSuccess = response => {
  $('#sign-out').trigger('reset') // clears the form

  store.user = null // wipes signed-in users data clean

  // Navigates back to title page upon succesful sign out
  $('.modal').addClass('hidden')
  $('#main').addClass('hidden')
  $('#title-page').removeClass('hidden')
}

const onSignOutFailure = response => {
  // add success message in signout form
  $('#signout-message').text('Error Alert: Account still signed in.').css('color', 'red')

  $('#sign-out').trigger('reset') // clears the form

  setTimeout(() => {
    $('#signout-message').text('') // clears the failure message after 5 seconds
  }, 3000)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
