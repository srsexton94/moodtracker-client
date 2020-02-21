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

const openUpdate = event => {
  $('#updateprofile-modal').removeClass('hidden')
}

const closeModal = event => {
  $('.modal').addClass('hidden')
}

const addHandlers = () => {
  $('#signup-open').on('click', openSignUp)
  $('#signin-open').on('click', openSignIn)
  $('#entrylog-open').on('click', openEntryLog)
  $('#update-open').on('click', openUpdate)
  $('.close').on('click', closeModal)
  $('.modal').on('click', closeModal) // on click outside modal content
}

module.exports = {
  addHandlers
}
