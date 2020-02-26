'use strict'

const api = require('./api')
const ui = require('./ui')

const onShowMoodVisual = event => {
  event.preventDefault() // prevents page refresh

  api.indexMoods() // displays API mood data, GET (index) request
    .then(ui.onShowMoodVisualSuccess) // WHAT WE DOIN HERE
    .catch(ui.onDataVisualFailure) // posts failure message
}

const addHandlers = () => {
  $('#showMoodVisual').on('click', onShowMoodVisual)
}

module.exports = {
  addHandlers
}
