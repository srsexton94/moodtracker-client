'use strict'

const showMoodsTemplate = require('../templates/entries.handlebars')

const onSubmitFormSuccess = () => {
  $('#mood-message').text('')
  $('#form-message').text('You submitted successfully!').css('color', 'green')

  setTimeout(() => {
    $('#form-message').text('') // clears the failure message after 2 seconds
  }, 2000)
}

const onSubmitFormFailure = () => {
  $('#form-message').text('There was an error, please try again later.').css('color', 'red')

  setTimeout(() => {
    $('#form-message').text('') // clears the failure message after 3 seconds
  }, 3000)
}

const onShowMoodsSuccess = data => {
  // Gets the data from the api & sends to template
  const showMoodsHtml = showMoodsTemplate({ moods: data.moods })
  // Uses the compiled HTML and adds it to the page
  $('#mood-entries').html(showMoodsHtml)
  $('#showLog').addClass('hidden')
}

const onShowMoodsFailure = () => {
  $('#entrylog-message').text('Apologies, an error occurred. Please try again later.').css('color', 'red')

  setTimeout(() => {
    $('#entrylog-message').text('') // clears the failure message after 3 seconds
  }, 3000)
}

module.exports = {
  onShowMoodsSuccess,
  onShowMoodsFailure,
  onSubmitFormSuccess,
  onSubmitFormFailure
}
