'use strict'

const store = require('./../store.js')
const ux = require('./../ux/events')

const onSignUpSuccess = response => {
  $('#sign-up').trigger('reset') // clears the form
  $('#signup-modal').addClass('hidden') // hides Sign Up
  $('#signin-modal').removeClass('hidden') // reveals Sign In
}

const onSignUpFailure = response => {
  // posts failure message in signup form, colored red for visibility
  $('#signup-message').text('Sorry, Sign up unsuccessful').css('color', 'red')

  $('#sign-up').trigger('reset') // clears the form

  setTimeout(() => {
    $('#signup-message').text('') // removes failure message after 3 seconds
  }, 3000)
}

const onSignInSuccess = response => {
  // stores the response data in 'store.js' (for auth token)
  store.user = response.user

  $('#sign-in').trigger('reset') // clears the form

  $('#signin-modal').addClass('hidden') // hides sign-in
  $('#title-page').addClass('hidden') // hides title page
  $('#main').removeClass('hidden') // reveals main page
}

const onSignInFailure = response => {
  // add failure message in signin form, colored red for visibility
  $('#signin-message').text('Email/Password incorrect').css('color', 'red')

  $('#sign-in').trigger('reset') // clears the form

  setTimeout(() => {
    $('#signin-message').text('') // removes failure message after 3 seconds
  }, 3000)
}

const onChangePasswordSuccess = response => {
  $('#change-password').trigger('reset') // clears the form

  // Navigates back to the main page upon successful form submission
  $('#changepassword-modal').addClass('hidden')

  $('#main-message').text('Password change succeeded!').css('color', 'green')
  setTimeout(() => {
    $('#main-message').text('') // removes success message after 1 second
  }, 1000)
}

const onChangePasswordFailure = response => {
  // add failure message in change password form, colored red for visibility
  $('#changepassword-message').text('Password update failed.').css('color', 'red')

  $('#change-password').trigger('reset') // clears the form

  setTimeout(() => { // removes failure message after 3 seconds
    $('#changepassword-message').text('')
  }, 3000)
}

const onSignOutSuccess = response => {
  store.user = null // wipes signed-in users data clean

  // Navigates back to title page upon succesful sign out...
  $('.modal').addClass('hidden') // ensures all modals hidden
  $('#main').addClass('hidden') // hides main page
  $('#title-page').removeClass('hidden') // reveals title page
  ux.closeMobileNav() // collapses mobile navbar
}

const onSignOutFailure = response => {
  // add success message in signout form
  $('#signout-message').text('Error Alert: Account still signed in.').css('color', 'red')

  setTimeout(() => {
    $('#signout-message').text('') // clears the failure message after 3 seconds
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
