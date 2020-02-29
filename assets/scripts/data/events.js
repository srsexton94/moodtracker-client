'use strict'

const api = require('./api')
const ui = require('./ui')

const onShowMoodVisual = event => {
  event.preventDefault() // prevents page refresh

  api.indexMoods() // displays API mood data, GET (index) request
    .then(ui.onShowMoodVisualSuccess) // displays bar chart of all selections
    .catch(ui.onDataVisualFailure) // posts failure message
}

const addHandlers = () => {
  $('#showMoodVisual').on('click', onShowMoodVisual) // upon button click...
}

module.exports = {
  addHandlers
}
