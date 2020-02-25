'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js') // why is this now throwing an error w/o .js end?
const ui = require('./ui.js')

const onShowMoods = event => {
  // if statement runs prevent default only when passed an event
  if (event) { event.preventDefault() } // prevents page refresh

  api.showMoods() // displays API mood data, GET (index) request
    .then(ui.onShowMoodsSuccess) // formats & posts API data to entry log modal
    .catch(ui.onEntryLogFailure) // shares failure message w/deleteMood
}

const onPostMood = event => {
  event.preventDefault() // prevents page refresh

  const data = getFormFields(event.target) // submission formatted as usable data

  api.postMood(data) // sends mood form data to API, POST request
    .then(ui.onPostMoodSuccess) // empties mood message, posts success message
    .catch(ui.onPostMoodFailure) // posts failure message
}

const onDeleteMood = event => {
  event.preventDefault() // prevents page refresh

  const id = $(event.target).data('id') // finds the buttons data-id

  api.deleteMood(id) // destroys mood entry in API, DELETE request
    .then(onShowMoods) // upon success, refresh entry log
    .catch(ui.onEntryLogFailure) // shares failure message w/showMoods
}

// Event handlers for all actions to do with non-auth API resource(s)
const addHandlers = () => {
  $('#entry-submission').on('submit', onPostMood)
  $('#showLog').on('click', onShowMoods)
  $('#mood-entries').on('click', '.btn', onDeleteMood)
}

module.exports = {
  addHandlers
}
