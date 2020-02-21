'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
// const api = require('./api')
// const ui = require('./ui')

const openSignUp = event => {
  //
}

const openSignIn = event => {
  //
}

const openEntryLog = event => {
  //
}

const openUpdate = event => {
  //
}

const closeModal = event => {
  //
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
