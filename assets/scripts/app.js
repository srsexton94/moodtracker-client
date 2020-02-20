'use strict'

const authEvents = require('./auth/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#update-profile').on('submit', authEvents.onUpdateProfile)
  $('#sign-out').on('submit', authEvents.onSignOut)
})

/*
FOR MODALS
get modal, button, and span
when user clicks on the button open modal (change modal display to block)
when user clicks on span close modal (change modal display to none)
when user clicks anywhere outside of the modal close it (if (event.target === modal) { display => none })
*/
