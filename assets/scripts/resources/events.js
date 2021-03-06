'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store')

const onPost = event => {
  event.preventDefault() // prevents page refresh

  const data = getFormFields(event.target) // formats usable data
  const needValues = Object.values(data.need) // makes an array of all need values

  if (!data.mood) { // posts failure message if no mood input
    $('#main-message').text('Please select a mood.').css('color', 'red')
    setTimeout(() => { $('#main-message').text('') }, 2000) // removes message
    return // stops function here
  }

  if (needValues.some(e => e > 10 || e <= 0)) { // if not 1-10
    $('#validation').text('Please only enter numbers 1-10').css('color', 'red')
    setTimeout(() => { $('#validation').text('') }, 2000) // removes message
    return // stops function here
  }

  api.postMood(data)// POST moods API request
    .then((response) => {
      store.mood_id = response.mood.id // stores the id of mood created
      store.need_data = data.need // store the form data for 'need'
    })
    .then(ui.onPostMoodSuccess) // leads to POST needs API request
    .catch(ui.onPostFailure) // posts failure message
}

const onShowMoods = event => {
  if (event) { event.preventDefault() } // prevents page refresh

  api.showMoods() // GET (index) moods API request
    .then(ui.onShowMoodsSuccess) // formats & posts API data to entry log modal
    .catch(ui.onEntryLogFailure) // shares failure message w/deleteMood
}

const deleteEntry = (need, mood) => {
  api.deleteNeed(need) // DELETE need API request
    .then(function () {
      api.deleteMood(mood) // if need deletion is successful, DELETE mood API request
        .then(onShowMoods) // if mood deletion is successful, refresh the log
        .catch(ui.onEntryLogFailure)
    })
    .catch(ui.onEntryLogFailure) // ^^if either is unsuccessful, post error message
}

const onDeleteButton = event => {
  event.preventDefault() // prevents page refresh

  const moodId = $(event.target).data('id') // finds the buttons data-id

  api.showNeeds() // GET (index) needs API request
    .then(data => {
      data.needs.map(need => { // for each need in the index response...
        if (need.mood.id === moodId) { // if it's mood matches the selected moodID...
          deleteEntry(need.id, need.mood.id) // delete both the need & mood entries
        }
      })
    })
    .catch(ui.onEntryLogFailure) // if unsuccessful post error message
}

const openMoodUpdateForm = event => {
  event.preventDefault() // prevents page refresh

  const id = $(event.target).data('id') // finds the buttons data-id
  const formid = '#form' + id // uses buttons data-id to find form id
  $(formid).removeClass('hidden') // reveals the update form for target mood
}

const onUpdateMood = event => {
  event.preventDefault() // prevents page refresh

  const id = $(event.target).data('id') // gets resource ID from data-id of log
  const data = getFormFields(event.target) // submission formatted as usable data

  api.updateMood(data, id) // updates mood entry in API, PATCH request
    .then(function () {
      onShowMoods(event) // refreshes entry log
    })
    .catch(ui.onEntryLogFailure) // posts failure message
}

// Event handlers for all actions to do with non-auth API resource(s)
const addHandlers = () => {
  $('#entry-submission').on('submit', onPost)
  $('#entries').on('click', '.delete', onDeleteButton)
  $('#entries').on('click', '.update', openMoodUpdateForm)
  $('#entries').on('submit', '.form', onUpdateMood)
}

module.exports = {
  addHandlers,
  onShowMoods
}
