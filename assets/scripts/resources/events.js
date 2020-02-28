'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js') // why is this now throwing an error w/o .js end?
const ui = require('./ui.js')
const store = require('../store')

const onShowMoods = event => {
  // if statement runs prevent default only when passed an event
  event.preventDefault() // prevents page refresh

  api.showMoods() // displays API mood data, GET (index) request
    .then(ui.onShowMoodsSuccess) // formats & posts API data to entry log modal
    .catch(ui.onEntryLogFailure) // shares failure message w/deleteMood
}

const onPost = event => {
  event.preventDefault() // prevents page refresh

  const data = getFormFields(event.target) // submission formatted as usable data
  // console.log('before POSTmoods:', data)
  api.postMood(data)// sends mood form data to API, POST request
    .then((response) => {
      store.mood_id = response.mood.id
      store.need_data = data.need
      // console.log('mood id: ', moodId)
      // console.log('needData; ', needData)
    })
    .then(ui.onPostMoodSuccess) // empties mood message, posts success message
    .catch(ui.onPostFailure) // posts failure message

  // api.postNeed(data) // sends mood form data to API, POST request
  //   .then(ui.onPostSuccess) // empties mood message, posts success message
  //   .catch(ui.onPostFailure) // posts failure message
}

const onDeleteMood = event => {
  event.preventDefault() // prevents page refresh

  const id = $(event.target).data('id') // finds the buttons data-id

  api.deleteMood(id) // destroys mood entry in API, DELETE request
    .then(function () {
      onShowMoods(event)
    }) // upon success, refresh entry log
    .catch(ui.onEntryLogFailure) // shares failure message w/showMoods
}

const openUpdateForm = event => {
  event.preventDefault() // prevents page refresh

  const id = $(event.target).data('id') // finds the buttons data-id
  const formid = '#form' + id // uses buttons data-id to find form id
  $(formid).removeClass('hidden') // reveals the form
}

const onUpdateMood = event => {
  event.preventDefault() // prevents page refresh

  const id = $(event.target).data('id') // gets resource ID from data-id of log
  const data = getFormFields(event.target) // submission formatted as usable data

  api.updateMood(data, id) // updates mood entry in API, PATCH request
    .then(function () {
      onShowMoods(event)
    }) // upon success, refresh entry log
    .catch(ui.onEntryLogFailure) // shares failure message w/show & delete actions
}

// Event handlers for all actions to do with non-auth API resource(s)
const addHandlers = () => {
  $('#entry-submission').on('submit', onPost)
  $('#showLog').on('click', onShowMoods)
  $('#mood-entries').on('click', '.delete', onDeleteMood)
  $('#mood-entries').on('click', '.update', openUpdateForm)
  $('#mood-entries').on('submit', '.form', onUpdateMood)
}

module.exports = {
  addHandlers
}
