'use strict'

const entryLogTemplate = require('../templates/entries.handlebars')

const showMoodsSuccess = (data) => {
  // Gets the data from the api & sends to template
  const showMoodsHtml = entryLogTemplate({ moods: data.moods })
  // Uses the compiled HTML and adds it to the page
  $('.mood-entries').html(showMoodsHtml)
}

// const clearMoods = () => {
//   $('.mood-entries').empty()
// }

const onShowMoodsFailure = () => {
  $('#entrylog-message').text('Apologies, an error occurred. Please try again later.').css('color', 'red')

  setTimeout(() => {
    $('#entrylog-message').text('') // clears the failure message after 5 seconds
  }, 3000)
}

module.exports = {
  showMoodsSuccess,
  // clearMoods,
  onShowMoodsFailure
}
