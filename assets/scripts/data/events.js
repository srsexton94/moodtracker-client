'use strict'

const api = require('./api')
const ui = require('./ui')

const onShowMoodTally = event => {
  event.preventDefault() // prevents page refresh

  api.indexMoods() // GETs (index) mood data to provide chart
    .then(ui.onShowMoodTallySuccess) // displays bar chart of all selections
    .catch(ui.onDataVisualFailure) // posts failure message
}

const onShowMoodOverTime = event => {
  event.preventDefault() // prevents page refresh

  api.indexMoods() // GETs (index) mood data to provide chart
    .then(ui.onShowMoodOverTimeSuccess) // displays line chart of selections over time
    .catch(ui.onDataVisualFailure) // posts failure message
}

const onShowNeedAvgs = event => {
  event.preventDefault() // prevents page refresh
  const mood = $(event.target).data('mood') // string of mood name selected

  api.indexNeeds() // GETs (index) need data to provide chart
    .then(data => {
      ui.onShowNeedAvgsSuccess(data, mood) // provide chart that data AND mood name
    })
    .catch(ui.onDataVisualFailure) // posts failure message
}

const addHandlers = () => {
  $('#moodTally').on('click', onShowMoodTally)
  $('#moodOverTime').on('click', onShowMoodOverTime)
  $('#needAvgs button').on('click', onShowNeedAvgs)
}

module.exports = {
  addHandlers
}
