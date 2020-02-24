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
  $('#entrylog-message').text('Apologies, an error occurred. Please try again later.')
}

module.exports = {
  showMoodsSuccess,
  // clearMoods,
  onShowMoodsFailure
}
