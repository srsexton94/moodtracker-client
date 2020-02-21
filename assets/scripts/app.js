'use strict'

const authEvents = require('./auth/events')
const modalEvents = require('./modals/events')

$(() => {
  authEvents.addHandlers() // Authentication Events
  modalEvents.addHandlers() // Modal Events
})
