'use strict'

const showMoodsTemplate = require('../templates/entries.handlebars')

const onPostMoodSuccess = () => {
  $('#mood-message').text('') // empties mood-selection message (eg. 'happy?' 'sad?')
  // posts success message, colored green for visibility
  $('#form-message').text('You submitted successfully!').css('color', 'green')

  setTimeout(() => {
    $('#form-message').text('') // clears the failure message after 2 seconds
  }, 2000)
}

const onPostMoodFailure = () => {
  // alerts user to form submission failure, colored red for visibility
  $('#form-message').text('There was an error, please try again later.').css('color', 'red')

  setTimeout(() => {
    $('#form-message').text('') // clears the failure message after 3 seconds
  }, 3000)
}

const onShowMoodsSuccess = data => {
  // Gets the data from the api & sends to template
  // Returns HTML code postulated with the API data sent
  const showMoodsHtml = showMoodsTemplate({ moods: data.moods })

  // Uses the compiled HTML and adds it to the page
  $('#mood-entries').html(showMoodsHtml)
  $('#showLog').addClass('hidden') // hides the "show prior entries" button
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
  onPostMoodFailure,
  onShowMoodsSuccess,
  onEntryLogFailure
}
