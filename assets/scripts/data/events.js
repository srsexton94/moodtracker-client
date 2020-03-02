'use strict'

const api = require('./api')
const ui = require('./ui')

const onShowMoodTally = event => {
  event.preventDefault() // prevents page refresh

  api.indexMoods() // displays API mood data, GET (index) request
    .then(ui.onShowMoodTallySuccess) // displays bar chart of all selections
    .catch(ui.onDataVisualFailure) // posts failure message
}

const onShowMoodOverTime = event => {
  event.preventDefault() // prevents page refresh

  api.indexMoods()
    .then(ui.onShowMoodOverTimeSuccess)
    .catch(ui.onDataVisualFailure)
}

const addHandlers = () => {
  $('#moodTally').on('click', onShowMoodTally) // upon button click...
  $('#moodOverTime').on('click', onShowMoodOverTime)
}

module.exports = {
  addHandlers
}
