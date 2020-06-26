'use strict'

const store = require('./../store.js')
const ux = require('./../ux/events')

const onSignUpSuccess = response => {
  // hide loader image
  $('.loader').addClass('hidden')
  $('#sign-up').trigger('reset') // clears the form
  $('#signup-modal').addClass('hidden') // hides Sign Up
  $('#signin-modal').removeClass('hidden') // reveals Sign In
}

const onSignUpFailure = response => {
  // hide loader image
  $('.loader').addClass('hidden')
  // posts failure message in signup form, colored red for visibility
  $('#signup-message').text('Sorry, Sign up unsuccessful').css('color', 'red')

  $('#sign-up').trigger('reset') // clears the form

  setTimeout(() => {
    $('#signup-message').text('') // removes failure message after 3 seconds
  }, 3000)
}

const onSignInSuccess = response => {
  // hide loader image
  $('.loader').addClass('hidden')
  // stores the response data in 'store.js' (for auth token)
  store.user = response.user

  $('#sign-in').trigger('reset') // clears the form

  $('#signin-modal').addClass('hidden') // hides sign-in
  $('#title-page').addClass('hidden') // hides title page
  $('#main').removeClass('hidden') // reveals main page
}

const onSignInFailure = response => {
  // hide loader image
  $('.loader').addClass('hidden')
  // add failure message in signin form, colored red for visibility
  $('#signin-message').text('Email/Password incorrect').css('color', 'red')

  $('#sign-in').trigger('reset') // clears the form

  setTimeout(() => {
    $('#signin-message').text('') // removes failure message after 3 seconds
  }, 3000)
}

const onGuestSignInSuccess = response => {
  // hide loader image & reveal guest sign in link
  $('.loader').addClass('hidden')
  $('.guest-login').removeClass('hidden')
  $('#changepassword-open').addClass('hidden')
  // stores the response data in 'store.js' (for auth token)
  store.user = response.user

  $('#sign-in').trigger('reset') // clears the form

  $('#signin-modal').addClass('hidden') // hides sign-in
  $('#title-page').addClass('hidden') // hides title page
  $('#main').removeClass('hidden') // reveals main page
}

const onGuestSignInFailure = response => {
  // hide loader image & reveal guest sign in link
  $('.loader').addClass('hidden')
  $('.guest-login').removeClass('hidden')

  // add failure message in place of guest sign in link, colored red for visibility
  $('.guest-login').text('Email/Password incorrect').css('color', 'red')

  $('#sign-in').trigger('reset') // clears the form

  // replaces failure message with regular text after 2 seconds
  setTimeout(() => {
    $('.guest-login').text('Sign in as a Guest').css('color', '#fefefe')
  }, 2000)
}

const onChangePasswordSuccess = response => {
  // hide loader image
  $('.loader').addClass('hidden')
  $('#change-password').trigger('reset') // clears the form

  // Navigates back to the main page upon successful form submission
  $('#changepassword-modal').addClass('hidden')

  $('#main-message').text('Password change succeeded!').css('color', 'green')
  setTimeout(() => {
    $('#main-message').text('') // removes success message after 1 second
  }, 1000)
}

const onChangePasswordFailure = response => {
  // hide loader image
  $('.loader').addClass('hidden')
  // add failure message in change password form, colored red for visibility
  $('#changepassword-message').text('Password update failed.').css('color', 'red')

  $('#change-password').trigger('reset') // clears the form

  setTimeout(() => { // removes failure message after 3 seconds
    $('#changepassword-message').text('')
  }, 3000)
}

const onSignOutSuccess = response => {
  // hide loader image
  $('.loader').addClass('hidden')
  store.user = null // wipes signed-in users data clean

  // Navigates back to title page upon succesful sign out...
  $('.modal').addClass('hidden') // ensures all modals hidden
  $('#main').addClass('hidden') // hides main page
  $('#title-page').removeClass('hidden') // reveals title page
  $('.message').text('') // empties all message posts
  $('.emoji').removeClass('emoji-select') // de-selects emojis
  $('#changepassword-open').removeClass('hidden') // reveals change pw in case of guest
  ux.closeMobileNav() // collapses mobile navbar
}

const onSignOutFailure = response => {
  // hide loader image
  $('.loader').addClass('hidden')
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
  onGuestSignInSuccess,
  onGuestSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
