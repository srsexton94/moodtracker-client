'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onSignUp = event => {
  event.preventDefault() // prevents page refresh

  const data = getFormFields(event.target) // formats form submission data

  api.signUp(data) // sends user data to API, POST request
    .then(ui.onSignUpSuccess) // clears form, hides signUp modal, reveals signIn
    .catch(ui.onSignUpFailure) // clears form, posts failure message
}

const onSignIn = event => {
  event.preventDefault() // prevents page refresh

  const data = getFormFields(event.target) // formats form submission data

  api.signIn(data) // sends user data to API, POST request
    .then(ui.onSignInSuccess) // clears form, stores user data, navigates to main page
    .catch(ui.onSignInFailure) // clears form, posts failure message
}

const onChangePassword = event => {
  event.preventDefault() // prevents page refresh

  const data = getFormFields(event.target) // formats form submission data

  if (data.passwords.old === data.passwords.new) {
    $('#changepassword-message').text('Must be a new password').css('color', 'red')
    $('#change-password').trigger('reset') // clears form

    setTimeout(() => { $('#changepassword-message').text('') }, 2000)
    return // stops function, prevents API request
  }

  api.changePassword(data) // sends new data to API, PATCH request
    .then(ui.onChangePasswordSuccess) // clears form, navigates back to main page
    .catch(ui.onChangePasswordFailure) // clears form, sends failure message
}

const onSignOut = event => {
  event.preventDefault() // prevents page refresh

  api.signOut() // removes user API data from sign-in, DELETE request
    .then(ui.onSignOutSuccess) // wipes stored user data, navigates to title page
    .catch(ui.onSignOutFailure) // sends failure message
}

// event handlers for each authentication submission
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
