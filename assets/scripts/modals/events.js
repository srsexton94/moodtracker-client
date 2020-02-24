'use strict'

// const api = require('./api')
// const ui = require('./ui')

const onOpenSignUp = event => {
  $('#signup-modal').removeClass('hidden')
}

const onOpenSignIn = event => {
  $('#signin-modal').removeClass('hidden')
}

const onOpenEntryLog = event => {
  $('#entrylog-modal').removeClass('hidden')

  // api.showMoods()
  //   .then(ui.onShowMoodsSuccess)
  //   .catch(ui.onShowMoodsFailure)
}

const onOpenChangePassword = event => {
  $('#changepassword-modal').removeClass('hidden')
}

const onOpenSignOut = event => {
  $('#signout-modal').removeClass('hidden')
}

const onCloseModal = event => {
  $('.modal').addClass('hidden')
}

const upToIn = event => {
  onCloseModal(event)
  onOpenSignIn(event)
}

const inToUp = event => {
  onCloseModal(event)
  onOpenSignUp(event)
}

const addHandlers = () => {
  $('#signup-open').on('click', onOpenSignUp)
  $('#signin-open').on('click', onOpenSignIn)
  $('#entrylog-open').on('click', onOpenEntryLog)
  $('#changepassword-open').on('click', onOpenChangePassword)
  $('#signout-open').on('click', onOpenSignOut)
  $('.close').on('click', onCloseModal)
  $('#signup-to-signin').on('click', upToIn)
  $('#signin-to-signup').on('click', inToUp)
}

module.exports = {
  addHandlers
}
