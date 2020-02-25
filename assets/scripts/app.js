'use strict'

const authEvents = require('./auth/events')
const modalEvents = require('./modals/events')
const uxEvents = require('./ux/events')
const resourceEvents = require('./resources/events')
const dataEvents = require('./data/events')

$(() => {
  authEvents.addHandlers() // Authentication Events
  modalEvents.addHandlers() // Modal Events
  uxEvents.addHandlers() // User Experience Events
  resourceEvents.addHandlers() // Resource API request events
  dataEvents.addHandlers() // Events for data visualization
})
