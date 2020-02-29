'use strict'

const showMoodsTemplate = require('../templates/entries.handlebars')
const api = require('./api')
const store = require('../store')

const onPostMoodSuccess = () => {
  const data = {} // initializes empty array
  data.need = store.need_data // makes
  data.need.mood_id = store.mood_id

  api.postNeed(data) // sends mood form data to API, POST request
    .then(onPostNeedSuccess)
    .catch(onPostFailure)
}

const onPostNeedSuccess = () => {
  $('#entry-submission').trigger('reset') // clears the form
  $('#main-message').text('') // empties mood-selection message (eg. 'happy?' 'sad?')
  // posts success message, colored green for visibility
  $('#main-message').text('You submitted successfully!').css('color', 'green')

  setTimeout(() => {
    $('#main-message').text('') // clears the failure message after a second
  }, 1000)
}

const onPostFailure = () => {
  // alerts user to form submission failure, colored red for visibility
  $('#main-message').text('There was an error, please try again later.').css('color', 'red')

  setTimeout(() => {
    $('#main-message').text('') // clears the failure message after 3 seconds
  }, 3000)
}

const onShowMoodsSuccess = data => {
  if (data.moods.length === 0) { // if there are no entries post message
    $('#entrylog-message').text('No Available Entries.')
  }

  // Sends API data to template, returns HTML code
  const showMoodsHtml = showMoodsTemplate({ moods: data.moods })

  // Uses the compiled HTML and adds it to the page
  $('#mood-entries').html(showMoodsHtml)
  $('#showLog').addClass('hidden') // hides the button
}

const onEntryLogFailure = () => {
  // sends user failure message, colored red for visibility
  $('#entrylog-message').text('Apologies, an error occurred. Please try again later.').css('color', 'red')

  setTimeout(() => {
    $('#entrylog-message').text('') // clears the failure message after 3 seconds
  }, 3000)
}

module.exports = {
  onPostMoodSuccess,
  onPostFailure,
  onShowMoodsSuccess,
  onEntryLogFailure
}
