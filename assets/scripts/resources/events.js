'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store')

const onShowMoods = event => {
  event.preventDefault() // prevents page refresh

  api.showMoods() // GET (index) moods API request
    .then(ui.onShowMoodsSuccess) // formats & posts API data to entry log modal
    .catch(ui.onEntryLogFailure) // shares failure message w/deleteMood
}

// const validateForm = () => {
//   $().value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// }

const onPost = event => {
  event.preventDefault() // prevents page refresh

  const data = getFormFields(event.target) // formats usable data
  const needValues = Object.values(data.need) // makes an array of all need values

  if (!data.mood) {
    $('#main-message').text('Please select a mood.').css('color', 'red')

    setTimeout(() => {
      $('#main-message').text('') // clears failure message after 2 seconds
    }, 2000)

    return // stops function here, prevents API requests
  }
  if (needValues.some(e => e > 10 || e <= 0)) { // if not 1-10
    $('#validation').text('Please only enter numbers 1-10').css('color', 'red')

    setTimeout(() => {
      $('#validation').text('') // clears failure message after 2 seconds
    }, 2000)

    return // stops function here, prevents API requests
  }

  api.postMood(data)// POST moods API request
    .then((response) => {
      store.mood_id = response.mood.id // stores the id of mood created
      store.need_data = data.need // store the form data for 'need'
    })
    .then(ui.onPostMoodSuccess) // leads t POST needs API request
    .catch(ui.onPostFailure) // posts failure message
}

const onDeleteMood = event => {
  event.preventDefault() // prevents page refresh

  const id = $(event.target).data('id') // finds the buttons data-id

  api.deleteMood(id) // destroys mood entry in API, DELETE request
    .then(function () {
      onShowMoods(event) // refreshes entry log
    })
    .catch(ui.onEntryLogFailure) // posts failure message
}

const openUpdateForm = event => {
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
  $('#showLog').on('click', onShowMoods)
  $('#mood-entries').on('click', '.delete', onDeleteMood)
  $('#mood-entries').on('click', '.update', openUpdateForm)
  $('#mood-entries').on('submit', '.form', onUpdateMood)
}

module.exports = {
  addHandlers
}
