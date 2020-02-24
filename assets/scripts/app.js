'use strict'

const authEvents = require('./auth/events')
const modalEvents = require('./modals/events')
const uxEvents = require('./ux/events')
const resourceEvents = require('./resources/events')

$(() => {
  authEvents.addHandlers() // Authentication Events
  modalEvents.addHandlers() // Modal Events
  uxEvents.addHandlers() // User Experience Events
  resourceEvents.addHandlers() // Resource API request
})
