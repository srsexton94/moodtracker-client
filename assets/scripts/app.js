'use strict'

const authEvents = require('./auth/events')
const modalEvents = require('./modals/events')
const uxEvents = require('./ux/events')

$(() => {
  authEvents.addHandlers() // Authentication Events
  modalEvents.addHandlers() // Modal Events
  uxEvents.addHandlers() // User Experience Events
})
