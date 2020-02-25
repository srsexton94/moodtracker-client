'use strict'

// each "Open" event removes the "hidden" (display: none) class from its modal
// each modal has z-index 1, places it above all other content (ie disables it)
const onOpenSignUp = event => {
  $('#signup-modal').removeClass('hidden')
}

const onOpenSignIn = event => {
  $('#signin-modal').removeClass('hidden')
}

const onOpenEntryLog = event => {
  $('#entrylog-modal').removeClass('hidden')
}

const onOpenChangePassword = event => {
  $('#changepassword-modal').removeClass('hidden')
}

const onOpenSignOut = event => {
  $('#signout-modal').removeClass('hidden')
}

const onCloseModal = event => {
  $('.modal').addClass('hidden') // upon closing any modal, ensure all modals are hidden

  // in case the modal closed is the entry log...
  $('#showLog').removeClass('hidden') // reveal the "show prev. entries" button
  $('#mood-entries').text('') // ensure entry log is emptied
}

// navigates from signUp to signIn
const upToIn = event => {
  onCloseModal(event)
  onOpenSignIn(event)
}

// navigates from signIn to signUp
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
