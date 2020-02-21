'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
// const api = require('./api')
// const ui = require('./ui')

const openSignUp = event => {
  $('#signup-modal').removeClass('hidden')
}

const openSignIn = event => {
  $('#signin-modal').removeClass('hidden')
}

const openEntryLog = event => {
  $('#entrylog-modal').removeClass('hidden')
}

const openChangePassword = event => {
  $('#changepassword-modal').removeClass('hidden')
}

const closeModal = event => {
  $('.modal').addClass('hidden')
}

const upToIn = event => {
  closeModal(event)
  openSignIn(event)
}

const inToUp = event => {
  closeModal(event)
  openSignUp(event)
}

const addHandlers = () => {
  $('#signup-open').on('click', openSignUp)
  $('#signin-open').on('click', openSignIn)
  $('#entrylog-open').on('click', openEntryLog)
  $('#changepassword-open').on('click', openChangePassword)
  $('.close').on('click', closeModal)
  $('#signup-to-signin').on('click', upToIn)
  $('#signin-to-signup').on('click', inToUp)
}

module.exports = {
  addHandlers
}
